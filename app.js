//Install express server
const express = require('express');
const path = require('path');
const http = require('http');
const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/demo'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/demo/index.html'));
});

// Start the app by listening on the default Heroku port
const port = process.env.PORT || 8080;
app.set('port', port);
const server = http.createServer(app);
server.listen(port, () => console.log('Running'));

/*https://medium.com/@ervib/deploy-angular-4-app-with-express-to-heroku-6113146915ca
https://dashboard.heroku.com/
https://github.com/anniArrti/office
https://blog.angular-university.io/angular-service-worker*/