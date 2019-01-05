//call requires
const express = require("express");
const mongoose = require ("mongoose");
const require = ("./routes")
const app = express()

//Port info
const PORT = 6666;

//process.env
if(process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"))

}

//Send the requests to the react APP
app.get("*", function(req, res) {
    //this takes the user to the html code (front end)
    res.sendFile(path.join(__dirname, "client/build/index.html"))
});

//do an app.listen
app.listen(PORT, function() {
    console.log( 'Server is now on ${PORT}' );
});