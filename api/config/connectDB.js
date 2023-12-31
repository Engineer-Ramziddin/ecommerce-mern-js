const mongoose = require('mongoose');
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log('MongoDBga muvaffaqiyatli ulanildi');
  } catch (error) {
    console.error('MongoDBga ulanishda xatolik:', error.message);
  }
};

module.exports = connectDB;
