var mongoose = require('./db.js');
Schema = mongoose.Schema;
var testSchema = new Schema({
    name: {type: String},
    age: {type: Number},
    sex: {type: String}
}, {
    versionKey: false,
    collection: 'test'
});
module.exports = mongoose.model('Test', testSchema);