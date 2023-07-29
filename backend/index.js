const connectToMongo = require("./db");
const express =require("express");
const cors = require("cors");
connectToMongo();
const dotenv = require("dotenv").config();
const app = express();

app.use(cors());
app.use(express.json())
app.use("/api/auth",require("./routes/auth"));
app.use("/api/notes",require("./routes/notes"))

app.listen(8070,()=>{
    console.log("dbNotes app listening on port 8070")
})