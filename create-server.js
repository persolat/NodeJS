

var fs = require('fs');

var https = require('http');

var server = http.createServer((req , res) => {
    res.writeHead(200, {'Content-type' : 'text/html'});
    
    var responseBody = `
    <html>
    
      <head> </head>
      <body>
      
      <h1> je suis un server HTTP </h1>
      <p> {req.url}</p>
      <p> {req.method}</p>
      </body>

    </html>
    `;

    res.end (responseBody);
    
    
});

server.listen(3000);

console.log('Server on http://localhost:3000');
