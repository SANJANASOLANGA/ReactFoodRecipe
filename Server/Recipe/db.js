const mongoose = require('mongoose');

const db = "mongodb+srv://sanjanasolangaarachchi:WnQMY2bLReIw0LKU@recipe.pmdzzp3.mongodb.net/?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect(db, {
      useNewUrlParser: true,
    });

    console.log('MongoDB is Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
