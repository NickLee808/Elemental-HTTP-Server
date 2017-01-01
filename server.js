//jshint esversion:6

let fs = require('fs');
let http = require('http');

const POST = process.env.PORT || 3000;


const server = http.createServer( (req, res) => {

  let sendContent = (content) => {
    if (res)
    res.setHeader('Content-Type', 'text/html');
    res.write(content);
    res.end();
  };

  let resourceMapping = {
    '': './public/index.html',
    '/': './public/index.html',
    '/index': './public/index.html',
    '/hydrogen': './public/hydrogen.html',
    '/helium': './public/helium.html',
    '/404': './public/404.html',
    '/css/styles': './public/css/styles.css',
  };

  fs.readFile(resourceMapping[req.url], (err, content) => {

    if(err){
      res.statusCode = 404;
      sendContent('Resource not found');
      return;
    }

    sendContent(res, content);

  });  

  let reqBody = '';

  req.setEncoding('utf8');

  req.on();

});