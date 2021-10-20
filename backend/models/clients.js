const mongoose = require('mongoose');

const Types = require('mongoose').Types;

const schema = mongoose.Schema({
    Name: String,
    EIDA: Number,
    Children: Object,
    hasDrivingLicense: Boolean,
    isCitizen: Boolean,
    

});
module.exports = mongoose.model('usersss', schema);
