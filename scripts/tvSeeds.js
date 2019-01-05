const mongoose = require("mongoose");
const db = require ("../models")

//collects the TV show items and inserts it into the list

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/reactreadinglist"
);

//what is listed already
const tvSeed = [

    {
        title: ""
    }

]

//adding a removal feature
db.tvShow
.remove({})
.then(() => db.tvShow.collection.insertMany(tvSeed))
.then(data => {
    console.log(data.result.n + "inserted tv show");
    process.exit(0)
})
.catch(err => {
    console.error(err);
    process.exit(1);
});