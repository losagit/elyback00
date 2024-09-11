require('dotenv').config();

module.exports = {
    username : process.env.DB_USERNAME || "root",
    password : process.env.DB_PASSWORD || "mysql54710",
    database : process.env.DB_DATABASE || "dbintranet",
    host: process.env.DB_HOST || "127.0.0.1",
    dialect : process.env.DB_DIALECT || "mysql",

    
    seederStorage: "sequelize",
    seederStorageTableName: "seeds",

    migrationStorage : "sequelize",
    migrationStorageTableName : "migrations"

}