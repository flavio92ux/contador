const mongoConnection = require('./connection');

module.exports = async () => {
  const db = await mongoConnection.getConnection();
  const result = await db.collection('contador').find({}).toArray();
  return result;
};