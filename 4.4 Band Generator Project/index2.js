import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

// Set the view engine to EJS
app.set("view engine", "ejs");

// Use static files from the "public" folder
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// Sample data
const adj = ["abandoned", "sleepy"];
const noun = ["piglet", "joy"];

// GET request to render the home page
app.get("/", (req, res) => {
  res.render("index.ejs");
});

// POST request to generate random adjective and noun
app.post("/submit", (req, res) => {
  const randomAdj = adj[Math.floor(Math.random() * adj.length)];
  const randomNoun = noun[Math.floor(Math.random() * noun.length)];
  res.render("index.ejs", {
    adjective: randomAdj,
    noun: randomNoun,
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
