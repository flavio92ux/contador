const { ObjectId } = require('mongodb');
const mongoConnection = require('./connection');

module.exports = async (number) => {
    const db = await mongoConnection.getConnection();
    await db.collection('contador').updateOne(
        { _id: ObjectId('61d1a7589284b23a700bc61e') },
        { $set: { number } },
        );
  };