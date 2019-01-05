const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const list = new listItem({
    title: {type: String, required: true}
})

const tvShow = mongoose.model("Tv Show", list);

module.exports = tvShow;