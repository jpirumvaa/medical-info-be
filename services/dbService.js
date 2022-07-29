const nSQL = require("@nano-sql/core").nSQL;

const createDatabase = () => {
    nSQL().createDatabase({
        id: "medical-info-db",
        mode: "TEMP",
        tables: [
            {
                name: "medical-info",
                model: {
                    "id:int": { pk: true, ai: true },
                    "name:string": { notNull: true },
                    "username:string": { notNull: true },
                    "age:float": {}
                }
            }
        ]
    }).then(() => {
        return nSQL("medical-info").query("upsert", [
            {
                name: "User Insert",
                username: "username",
                age: 4.7,
            },
            {
                name: "user 2 insert",
                username: "username",
                rating: 4.3,
            }
        ]).exec();
    });
};

module.exports = {
    createDatabase
};