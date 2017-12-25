console.log("hello world");
const abc = require("express");
const path = require('path');
const bodyParser = require('body-parser');
let start = abc();


//var mongoMorgan = require('mongo-morgan');
var mongoose = require('mongoose');
// Use native Node promises
mongoose.Promise = global.Promise;
// connect to database
mongoose.connect("mongodb://userdev1:12345678@localhost:27017/tutor")
    .then(res => {
        console.log('connection succesful')
    })
    .catch((err) => console.error(err));





start.use(abc.static(path.join(__dirname, '/public')));
start.use(bodyParser.json({ limit: '10mb' }));
start.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

//const users = require('./routes/users');
//start.use("/users",users);

const wallet = require('./routes/wallet');
start.use("/wallet",wallet);



/*start.use('/users', function (req, res, next) {
    console.log(req.body)
    res.json({ text: "response dari user", params: req.body });
});



start.use('/wallet')
    .get(function (req, res, next) {
        res.json({ text: "response dari wallet get", params: req.body });
    })
    .post(function (req, res, next) {
        res.json({ text: "response dari wallet post", params: req.body });
    })
*/

start.use('/', function (req, res, next) {
    console.log("******req**********", req)
    console.log("******res**********", res)
    res.json({ text: "hello world" });
});






const server = start.listen(3000);
console.log(server.address().port);