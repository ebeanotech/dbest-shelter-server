const crypto = require("crypto");
const Code = require("./models/Code");
const connectDB = require("./DB/connect");
require("dotenv").config();

// Function to generate a random code
const generateRandomCode = () => {
  return crypto.randomBytes(16).toString("hex");
};

// Function to generate and store 50 codes if not already present
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log("Connected to DB");
    await Code.deleteMany({});

    const codes = [];
    for (let i = 0; i < 50; i++) {
      const code = new Code({ code: generateRandomCode() });
      codes.push(code);
    }
    await Code.insertMany(codes);
    console.log(`${50} codes generated and stored`);

    process.exit(0);
  } catch (error) {
    console.error("Error generating/storing codes:", error);
    process.exit(1);
  }
};

start();
