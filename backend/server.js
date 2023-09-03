const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require('./config/database');

// Connecting to database
connectDatabase()

// setting up config file
dotenv.config({ path: '../backend/config/config.env' });
const port = process.env.PORT;
const nodeEnv = process.env.NODE_ENV;
app.listen(process.env.PORT, () => {
  console.log(
    `server started at port number ${port} in ${nodeEnv} mode`
  );
});
