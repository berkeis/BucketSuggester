var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AlbumSchema = new Schema({
    name: {type: String, required: true, max: 100},
    length: {type: Number, required: true},
});


// Export the model
module.exports = mongoose.model('Album', AlbumSchema);