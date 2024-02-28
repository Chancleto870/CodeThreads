const express = require("express");
const app = express();
const cors = require("cors")

app.use(cors());

app.listen(3000,()=>{
	console.log("Servidor escuchando por el puerto 3000")
})

app.get("/",(request,response)=>{
	response.send("helo")
})


