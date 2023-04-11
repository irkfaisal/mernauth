const express = require("express");
const app = express();
const cors = require("cors")
const PORT = 4321
require("./db/connection")

const router = require("./routes/router")

// base url
// app.get("/", (req, res) => {
//     res.status(201).json("server started")
// })
app.use(express.json());
app.use(cors());
app.use(router);

// creating PORT 
app.listen(PORT, () => {
    console.log(`server started at ${PORT}`);
})