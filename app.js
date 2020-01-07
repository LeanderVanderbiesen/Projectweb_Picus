
//Load HTTP module
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
var token;
const Particle = require('particle-api-js');
const particle = new Particle();
const express = require('express');
const app  = express();

/*app.listen(3000, ()=>console.log('listening on 3000'));
app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    particle.login({username: 'janmoorkens@yahoo.com', password: 'Moorkens2323'}).then(
        function (data) {
            console.log('API call completed on promise resolve: ', data.body.access_token);
            token   =data.body.access_token;
        },

        function (err) {
            console.log('API call completed on promise fail: ', err);
        }
    );
    particle.getVariable({ deviceId: '300040001647373335333438', name: 'moistval', auth: token }).then(function(data) {
        console.log('Device variable retrieved successfully:', data.body.result);
        res.render(__dirname + "/dashboard.html",{data:data.body.result});
    }, function(err) {
        console.log('An error occurred while getting attrs:', err);
    });

});*/
//Create HTTP server and listen on port 3000 for requests
const server = http.createServer((req, res) => {

    //Set the response HTTP header with HTTP status and Content type
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('Hello World\n');
        particle.login({username: 'janmoorkens@yahoo.com', password: 'Moorkens2323'}).then(
            function (data) {
                console.log('API call completed on promise resolve: ', data.body.access_token);
                token   =data.body.access_token;
            },
            function (err) {
                console.log('API call completed on promise fail: ', err);
            }
        );
    particle.getVariable({ deviceId: '300040001647373335333438', name: 'moistval', auth: token }).then(function(data) {
        console.log('Device variable retrieved successfully:', data.body.result);
        //res.render(__dirname + "/dashboard.html",{data:data.body.result});
    }, function(err) {
        console.log('An error occurred while getting attrs:', err);
    });
});
//listen for request on port 3000, and as a callback function have the port listened on logged
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});




