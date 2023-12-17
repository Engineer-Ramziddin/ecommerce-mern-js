const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/ecom");
    console.log('MongoDBga muvaffaqiyatli ulanildi');
  } catch (error) {
    console.error('MongoDBga ulanishda xatolik:', error.message);
  }
};

module.exports = connectDB;
