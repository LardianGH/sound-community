const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const soundSchema = new Schema({ //each part seperated for specific searches
    fileKey: { type: String, required: true }, //name and date and filetype
    //fileName: { type: String, required: true }, //just name
    //fileDate: { type: String, required: true }, //just fileDate
    //fileType:  { type: String, required: true }, //just fileType
    userID: { type: String, required: true } //links to user
});

const Sound = mongoose.model("Sound", soundSchema);

module.exports = Sound;