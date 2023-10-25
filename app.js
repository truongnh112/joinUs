var express = require('express');
var mysql = require('mysql');
var app = express();
var bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Truongnh#123',
    database: 'join_us'
});

app.get('/home', function(req, res) {
    var q = 'SELECT COUNT(*) AS count FROM users;';
    connection.query(q, function(err, results, fields) {
        if (err) throw err;
        var count = results[0].count;
        var message = 'WEBSITE HAVE ' + count + ' USERS ALREADY!';
        //res.send(message);
        res.render("home", { data: count });
    });
});

app.post('/register', function(req, res) {
    var email = req.body.email;
    var person = {
        email: email
    };
    var q = "INSERT INTO users (email) VALUES ('" + email + "');";
    connection.query(q, function(err, results) {
        if (err) throw err;
        //console.log(results);
    });
    res.redirect("/home");
});

app.get('/luckynumber', function(req, res) {
    var number = Math.floor((Math.random() * 10) + 1);
    res.send('Lucky number: ' + number);
});




app.listen(8080, function() {
    //console.log('sever is running')
});

//newwwww commmamammaannanaaanasda/////////////
//////////new line