const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
const categoryRoutes = require("./routes/category");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Server running");
});

app.listen(port, () => {
  console.log("Server running on port:", port);
});

app.use("/category", categoryRoutes);

async function connectDb() {
  await mongoose.connect("mongodb://localhost:27017", {
    dbName:"e-commerce-store-db"
  })
}

connectDb().catch((err) => {
  console.log(err);
})