const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    username: String,
    nickname: String,
    password: String,
    status: {
        type: Boolean,
        default: true
    }
}, {timestamps: true});


model('Users', userSchema);