var http = require ('http');
var fs = require('fs');
var myReadStream = fs.createReadStream(__dirname +'/node.txt','utf8');
var myWriteStream = fs.createWriteStream(__dirname+ '/node1.txt');
myReadStream.pipe(myWriteStream );