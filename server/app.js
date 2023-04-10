const exprss = require("express");
const app = exprss();
const PORT = 4321


// base url
app.get("/", (req, res) => {
    res.status(201).json("server started")
})

// creating PORT 
app.listen(PORT, () => {
    console.log(`server started at ${PORT}`);
})