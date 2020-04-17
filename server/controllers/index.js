var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {

    }, // a function which handles a get request for all messages
    //like the http handler from asynchronous swim sprint
    //retrieves the messages data that we retrieved from the models/index.js file
    //then writes the information
    post: function (req, res) {} // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    // what information do we need to send back when a get request for a user is sent? : send back all the messages that the user sent
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

// module.exports.router = (req, res, next = () => { }) => {
//   const produceImage = function (err, data) {
//     //console.log('Reached callback');
//     //console.log(data);
//     if (err) {
//       res.writeHead(404, headers);
//       res.end();
//     } else {
//       res.writeHead(200, headers);
//       // res.end();
//       res.end(data, 'binary')
//     }
//   };

//   console.log('Serving request type ' + req.method + ' for url ' + req.url);
//   console.log(req.url);
//   if (req.method === 'OPTIONS') {
//     res.writeHead(200, headers);
//     res.end('');
//   }

//   if (req.method === 'GET') { //GET
//     // if // the designated URL is just the server URL, send a swim command message (like below)
//     if (req.url === '/') { //http://localhost:8080/
//       //     '/' || '/background.jpg'
//       res.writeHead(200, headers);
//       res.end(messageQueue.dequeue());
//     } else if (req.url === '/background.jpg') {
//       fs.readFile(module.exports.backgroundImageFile, produceImage);
//     }
//   }

//   if (req.method === 'POST') {
//     res.writeHead(201, headers);
//     res.end();
//   }
//   next();
// }

