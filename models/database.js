const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const charitySchema = new Schema({
    name: [{ type: String, required: true }],
    cause: String,
    link: String,
    image: String,
    description: String,
});

const Charity = mongoose.model(`Charity`, charitySchema);

module.exports = Charity;