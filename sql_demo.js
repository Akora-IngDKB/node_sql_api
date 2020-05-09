const mysql = require('mysql')

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "testdb"
})

const funcs = {
    fetch(name, callback) {
        if (!name) callback("Please provide a country name", undefined)

        con.connect(function (err) {
            if (err) {
                return callback(err, undefined)
            }
            console.log("Connected!")

            const sql = "select * from customers where country = " + mysql.escape(name)

            con.query(sql, function (err, result) {
                if (err) {
                    callback(err, undefined)
                } else {
                    callback(undefined, result)
                }

            })
        })
    }
}

export default funcs