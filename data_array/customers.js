const bcrypt = require('bcryptjs');

const customers = [
    {
        name: "Steve Young",
        email: "steve@steve.com",
        password: bcrypt.hashSync("admin2021", 10),
        adminPrivilege: true
    },
    {
        name: "Squidward Tentacles",
        email: "squidward@acre.com",
        password: bcrypt.hashSync("clarinet", 10),
    },
    {
        name: "Keyzer Soze",
        email: "comefindme@123.com",
        password: bcrypt.hashSync("usualsuspect", 10),
    },
]

module.exports = customers;