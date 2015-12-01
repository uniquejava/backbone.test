var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MessageSchema = new Schema({
    user_phone: {type: String},
    content: {type: String}
});

var Message = mongoose.model('Message', MessageSchema);

module.exports = Message;