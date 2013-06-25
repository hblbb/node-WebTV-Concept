var express = require("express"),
    http = require('http'),
    app = express();
    server = http.createServer(app);
    cons = require('consolidate'),
    swig = require('swig'),
    io = require("socket.io").listen(server);
    
// Settings
swig.init({
    root: '/views',
    allowErrors: true
});

app.engine('.html', cons.swig);
app.set('view engine', 'html');
app.set('views', 'views');

// Routing
app.get('/', function(request, response) {
    
    // Without Template Engine
    response.sendfile(__dirname + '/views/index.html');
    console.log('Rendering WebTV centre page.');
});

app.get('/m', function(request, response) {
    
    // Usage Swig Template Engine and Render the Mobile Page
    response.render('mobile.html', {
        key: request.query.key,
        hello: 'WebTV - Controller'
    });

    console.log('Rendering Mobile device control page.');
});

// Listen for 'connection' for Web
io.sockets.on('connection', function(socket) {
    
    // Listen for 'send' for Mobile
    socket.on('send', function(data) {
       
        console.log('Socket connection in pairs.');
        console.log('Recevive (key, action, src) = (' + data.key + ', ' + data.action, ', ' + data.src + ').');

        // Listen for mobile user's action and dispatch the process
        switch(data.action) {
            case "enter":
                io.sockets.emit('get_response', data);
                console.log("Mobile user connect, and send 'enter' to Web");
                break;
            case "show":
                io.sockets.emit('get_response', data);
                console.log("Mobile user change video, and send 'show' to Web");
                break;
        }
    });

});

server.listen(8080);
console.log("[ The WebTV in Proof-of-Concept ]\n Server is running.");

