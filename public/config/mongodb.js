const mongodb = require('mongoose');
require('dotenv').config();
//start conection mongoDB
const Urldb = process.env.MONGODB_URL;
mongodb.connect(Urldb, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});
const conectionMongo = mongodb.connection;
conectionMongo.once('open', () => {
    console.log('Db mongo is connected');
});


module.exports = conectionMongo;