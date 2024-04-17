import "dotenv/config";
import app from "./src/app.js";

const Port = 3000;

app.listen(Port, ()=>{
    console.log("Servidor rodando na porta 3000!");
})