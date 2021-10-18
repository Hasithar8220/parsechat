// Required Modules

const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
var morgan = require("morgan");
const open = require('open');
const config = require('./config.json');
const { PORT,NODE_ENV } = require('./config');

//Calling walletData service 
const ChatService = require('./services/ChatService.js');
var app = express();

var corsOptions = {
    origin: config.origin,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(morgan("dev"));
app.use(express.static("./"));

app.get("/", function (req, res) {
    res.sendFile("./index.html"); //index.html file of your angularjs application
});


app.post("/api/chat/split", async function (req, res) {

    let chatObj= new ChatService();
    let json;
    if (req.body) {
        json = req.body;
        //console.log(json);
    }

    let output = await chatObj.split(json);
    res.json(output);

});


// Start Server
app.listen(PORT, function () {
    console.log("Express server listening... ", PORT, NODE_ENV);
    (async () => {
        await open('http://localhost:'+PORT);

    })();
});