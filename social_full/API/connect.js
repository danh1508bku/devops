import mysql from "mysql2";

export const db = mysql.createConnection({
    host:"159.89.196.47",
    user: "root",
    password:"1234",
    database:"mydevify_social",
    port:"3306"
}) 