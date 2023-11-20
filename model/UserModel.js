const db = require('../config/database');

const User = {

    getUserByPhone: (id, callback) => {
        db.query('SELECT COUNT(*) AS jml FROM users WHERE phone = ?', [id], callback);
    },
    getUserLogin: (phone, callback) => {
        db.query('SELECT * FROM users WHERE phone = ?', [phone], callback);
    },
    createUser: (newUser, callback) => {
        db.query('INSERT INTO users SET ?', [newUser], callback);
    },
};

module.exports = User;