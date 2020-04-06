const {Schema, model} = require('mongoose');

const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    img_url: String,
    buy_url: String
}, {timestamps: true});

model('Books', bookSchema);