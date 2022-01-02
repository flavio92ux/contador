const { MongoClient } = require('mongodb');

const MONGODB_URL = 'mongodb+srv://deploy:upload@cluster0.1o8ry.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const DB_NAME = 'contador';

const getConnection = () => MongoClient
  .connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((conn) => conn.db(DB_NAME))
  .catch((err) => {
    console.error(err);
    process.exit();
  });

module.exports = { getConnection };