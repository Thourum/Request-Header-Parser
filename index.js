var express = require('express');
var app = express();

app.get('/', function (req, res) {
    var ip = req.headers['x-forwarded-for'] || 
        req.connection.remoteAddress || 
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;
    
    var lang = req.headers['accept-language'].split(",");
    var sysInfo =req.get('User-Agent').split("(")[1].split(")");
    console.log(sysInfo[0]);
    var returnThis = {
  	    "ipaddress":ip,
  	    "language":lang[0],
  	    "software":sysInfo[0]
    }
    res.send(returnThis);
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port '+ process.env.PORT);
});