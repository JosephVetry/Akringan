var bcrypt = require('bcryptjs');

const hash = (password) => {
    return bcrypt.hashSync(password);
}

const check = (password, newPassword) => {
    return bcrypt.compareSync(password, newPassword);
}

module.exports = { hash, check }
