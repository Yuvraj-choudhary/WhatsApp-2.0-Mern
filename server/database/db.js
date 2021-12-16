import mongoose from "mongoose";

const Connection = async (username, password) => {
  const URL = `mongodb://yuvraj:10%40Birampur@chatapp-shard-00-00.tsl16.mongodb.net:27017,chatapp-shard-00-01.tsl16.mongodb.net:27017,chatapp-shard-00-02.tsl16.mongodb.net:27017/WHATSAPP-MERN-STACK?ssl=true&replicaSet=atlas-fjcjm5-shard-0&authSource=admin&retryWrites=true&w=majority`;

  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: false,
    });
    console.log("Database connection successfully established 🤩");
  } catch (err) {
    console.error(`Error while connecting to server ${err} 😔`);
  }
};

export default Connection;
