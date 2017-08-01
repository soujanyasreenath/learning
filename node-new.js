// var http = require('http'); // external dependency modules
// var date = require('./first.js')

// http.createServer(function (request, response) {
//   response.writeHead(200, {'Content-Type' : 'text/html'}); // if response == 200 ; content type = text/html
//   response.write("Hello World!! Today is " + date.myDateTime()); // print this
//   response.end();
// }).listen(8000); // port that the server is running on - 8000 here

var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(8000); //the server object listens on port 8080

exports.myDateTime = function () {
  var dt = new Date();
  return dt.toDateString();
};
