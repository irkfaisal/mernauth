
const mongoose = require("mongoose");
var username = encodeURIComponent("irkfaisal");
var password = encodeURIComponent("faisalmongodb");

const DB = `mongodb+srv://${username}:${password}@cluster0.7rcqr9a.mongodb.net/authmern?retryWrites=true&w=majority`

mongoose.connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => console.log("DataBase Connected")).catch((errr) => {
    console.log(errr);
})