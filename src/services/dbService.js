import { nSQL } from "@nano-sql/core";

const controllDb = (rows) => {
    nSQL().createDatabase({
        id: "medical-info-db",
        mode: "TEMP",
        tables: [
            {
                name: "medical-info",
                model: {
                    "id:int": { pk: true, ai: true },
                    "2000:string": { notNull: true },
                    "2001:string": { notNull: true },
                    "2002:string": { notNull: true },
                    "tag:string": { notNull: true },
                }
            }
        ]
    }).then(() => {
        return nSQL("medical-info").query("upsert", rows).exec();
    });
};

export default controllDb;