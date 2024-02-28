import mongoose from 'mongoose';

mongoose
  .connect(String(process.env.MONGO_DATABASE))
  .then(() => console.log('Database connection!'));
