import express from "express";
import dbConnect from "./config/dbConnect.js";
import routes from "./routes/index.js";

const connection = await dbConnect();
connection.on("error", (erro) => {
    console.error("Erro ao tentar se conectar com o banco de dados: " + erro);
});

connection.once("open", () => {
    console.log("Conexão com o banco de dados realizada com sucesso!");
});

const app = express();
routes(app);
export default app;