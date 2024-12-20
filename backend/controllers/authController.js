const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    try {
        const { nome, cognome, email, password } = req.body;

        // Hash della password
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({ nome, cognome, email, password: hashedPassword });
        await newUser.save();

        res.json({status: 'success', user: {nome: newUser.nome, cognome: newUser.cognome} });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) return res.status(400).json({ message: 'Credenziali errate' });

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) return res.status(400).json({ message: 'Credenziali errate' });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({status: 'success', token, user: { id: user._id, nome: user.nome, cognome: user.cognome, email: user.email } });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};