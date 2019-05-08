const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users");

const app = express();

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// DB Config
// const db = require("./config/keys").mongoURI;

const db = 'mongodb://localhost/mern_authenticate_me';

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// app.use(Express.static(path.join(__dirname, '../public')));

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
// app.get('*', function (request, response){
//    response.sendFile(path.resolve(__dirname, '../public', 'index.html'));
// })
// Routes
app.use("/api/users", users);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
