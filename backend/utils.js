const bcrypt = require("bcrypt");

const utils = {

    hash(password)
    {
        const salt = bcrypt.genSaltSync();
        return bcrypt.hashSync(password, salt);
        
    },

    compare_hash(password, hash)
    {
        return bcrypt.compareSync(password, hash);
    },
}

module.exports = { utils }