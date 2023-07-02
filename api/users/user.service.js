const pool = require('../config/database');

module.exports = {
    create: (data, callBack) => {
        pool.query(
            `insert into registration(firstName, lastName, gender, email, password, number)`
                `values(?,?,?,?,?,?)`
        )
    }
}