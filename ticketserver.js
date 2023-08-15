const express = require("express");
const fs = require("fs");
var session = require("express-session");
const app = express();
const multer = require("multer"); // Import multer
const upload = multer(); // Initialize multer

app.set("view engine", "ejs");
const db = require("./models/TicketDb");

const { TicketModel } = require("./models/Data");
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/ticket", (req, res) => {
  res.sendFile(__dirname + "/ticket.html"); 
});
app.get("/ticketscript.js", function (req, res) {
  res.sendFile(__dirname + "/ticketscript.js");
});


db.init()
  .then(function () {
    console.log("db connected");
    app.listen(8000, function () {
      console.log("server on port 8000");
    });
  })
  .catch((e) => {
    console.log("database error", e);
  });

app.post("/ticketData", upload.none(), function (req, res) {
  console.log(req.body);
  const newTicket = {
    id: req.body.id,
    title: req.body.title,
    priority: req.body.priority,
    description: req.body.description,
  };
  console.log(newTicket);
  TicketModel.create(newTicket)
    .then(function () {
      res.status(200).json(newTicket);
    })
    .catch(function (err) {
      res.status(500).send(err);
    });
});
