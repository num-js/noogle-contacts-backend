const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const contactsSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    mobile_num: {
        type: Number,
        require: true
    },
    email: {
        type: String
    },
    address: {
        type: String
    },
    description: {
        type: String
    },
    profile_pic: {
        type: String
    },
    creating_date: {
        type: Date,
        default: Date.now
    },
    user: {
        type: ObjectId,
        ref: "User",
    }
});

module.exports = mongoose.model('noogleV2contacts', contactsSchema);