const jwt = require("jsonwebtoken");
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const app = express();
const swaggerDocument = require("./swagger.json")
const swaggerUI = require("swagger-ui-express");
app.use(cors());
app.use(express.json());
const secretKeys = "sudsuay";

app.use(
    '/api-docs',
    swaggerUI.serve,
    swaggerUI.setup(swaggerDocument)
);

app.listen(8800, () => {
    console.log("Start server at port 8800");
});

const setDB = mysql.createPool({
    host:"localhost" || process.env.DB_HOST,
    port:"3306" || process.env.DB_PORT,
    user:"root" || process.env.DB_USER,
    password:"Bp220244" || process.env.DB_PASSWORD,
    database:"NumerEquation" || process.env.DB_NAME
});

app.get("/gettoken/:name", (req, res) => {
    let token = jwt.sign({ user: req.params.name }, secretKeys);
    res.send(token);
});

app.get("/EquationsTable", authorization, (req, res) => {
    const q = "SELECT * FROM EquationsTable";
    setDB.query(q, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

app.get("/EquationsTable_2", (req, res) => {
    const q = "SELECT * FROM EquationsTable";
    setDB.query(q, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

function authorization(req, res, next) {
    let token = req.headers["authorization"];
    if (token === undefined) {
        res.send("don't have authorization");
    } else {
        token = token.split(" ")[1];
        let decode = jwt.verify(token, secretKeys);
        if (decode.user === "Bell") {
            next();
        } else {
            res.send("pls authen");
        }
    }
}

module.exports = app;