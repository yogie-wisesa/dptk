var io   = require('socket.io'),
    url  = require('url'),
    sys  = require('sys'),
    express = require('express'),
    http=require('http');
var path = require('path')

var app = express();
var server = http.createServer(app);

app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');
app.set('views', __dirname);
app.use(express.static(path.join(__dirname)));
app.get('/', function(req, res){
    res.render('index');
});

app.listen(4000);