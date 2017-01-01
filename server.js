//jshint esversion:6

let fs = require('fs');

let http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer( (req, res) => {
  
  console.log("CONNECTED");

  req.setEncoding('utf8');

  let sendContent = (content) => {

    if (req.url.indexOf('css') > -1){
      res.setHeader('Content-Type', 'text/css');
    }else{
      res.setHeader('Content-Type', 'text/html');
    }

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
    console.log(content);
    if(err){
      res.statusCode = 404;
      sendContent('Resource not found');
      return;
    }

    sendContent(content);

  });  

});

server.listen(PORT, () => {
  console.log('Server is running');
});