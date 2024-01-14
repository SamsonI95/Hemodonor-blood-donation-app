const express = require("express");
const router = require("./routers/router");
const app = express();
const cors = require("cors");

const port = 4000;

app.use(
  cors({
    origin: "*",
    methods: ["POST", "GET"], // allow only POST requests
    optionsSuccessStatus: 200, // some legacy browsers choke on 204
  })
);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
app.use(express.json()); // add this middleware to parse JSON data in request body

app.use("/api", router);
