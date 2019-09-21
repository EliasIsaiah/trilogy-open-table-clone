const express = require("express");
const path = require("path");

// ## Phase IV - For this fourth phase, aim to complete the following

// * Backend Team:

// Create the logic that handles reservation requests. Your code should work such that POST requests take in JSON objects, checks if there is any space left, then adds the JSON object to either the reservation array or the waitlist array. Your POST route should also respond to requests with a confirmation (true or false) of whether or not the requestor has a reservation (or is on the waiting list).

// You should be using Postman to do all your testing at this point.

// * Frontend Team:

// Begin to do serious research on AJAX. Specifically, focus your attention on how AJAX can be used to do both GET and POST requests.

// Then create the necessary code on your tables.html page such that it can retrieve data from the Backend Team's API. In essence you will be creating an AJAX GET request to retrieve the data.

// Then create the necessary code on your reserve.html page such that it can send data to the Backend Team's API. In essence you will be creating an AJAX POST request to send the data.

// All: This is the most challenging part of today's activity. Be persistent! You can do this!

const app = express();
const PORT = 3001;
const RESERVATION_LIMIT = 5;
// const WAITLIST_LIMIT = 10;

let reservationsArr = [];
let waitListArr = [];


app.use(express.static(path.join(__dirname, 'assets')));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req, res) {

    res.sendFile(path.join(__dirname, "assets", "html", "index.html"));
});

app.get("/reserve", function(req, res) {

    res.sendFile(path.join(__dirname, "assets", "html", "reserve.html"));
});

// Displays all tables
app.get("/tables", function(req, res) {

    res.sendFile(path.join(__dirname, "assets", "html", "tables.html"));

});

app.post("/api/reserve", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware

    console.log(req.body);
    if (reservationsArr.length < RESERVATION_LIMIT) {

        res.send("reservation");

        reservationsArr.push(req.body);
    } else {

        waitListArr.push(req.body);
    }

    console.log("reservations array:");
    console.log(reservationsArr);
    console.log("waitlist array");
    console.log(waitListArr);
    return;
    // res.json(req.body);
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});