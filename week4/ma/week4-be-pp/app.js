const express = require("express");
const app = express();
const userRouter = require("./routes/userRouter.js");
const tourRouter = require("./routes/tourRouter.js");

const morgan = require('morgan');

app.use(morgan('tiny'));


// Middleware to parse JSON
app.use(express.json());

// ROUTES
// GET /tours

app.use("/user", userRouter);
app.use("/tour", tourRouter);
// POST /tours


const port = 4000;
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});