const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

  //set header content type
  res.setHeader('Content-Type', 'text/html');
  //path variable
  let path = './views/';
  //switch cases for different routes
  switch(req.url) {
    case '/':
      path += 'index.html'
      res.statusCode = 200;
      break;
    case '/about':
      path += 'about.html';
      res.statusCode = 200;
      break;
    case '/contact-me':
      path += 'contact-me.html'
      res.statusCode = 200;
      break;
    //redirect case  
    case '/about-us':
      res.statusCode = 301;
      res.setHeader('Location', '/about');
      res.end();
      break;
    default:
      path += '404.html'
      res.statusCode = 404;
      break;
  }

  //send an html file
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      //res.write(data);
      res.end(data);
    }
  })
  
})


server.listen(8000, () => {
  console.log('server started');
});
