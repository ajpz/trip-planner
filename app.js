var express = require('express'),
    swig = require('swig'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    routes = require('./routes');


//GoogleMap API: AIzaSyC9GbDofMpriUZ_YBPv6T2SimS59DnvXc4

var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.engine('html', swig.renderFile);
swig.setDefaults( { cache: false });

app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/jquery', express.static('./node_modules/jquery/'));
app.use('/bootstrap', express.static('./node_modules/bootstrap/'));
app.use(express.static('./public'));


app.use('/', routes);

app.use(function(req, res, next){
	var err = new Error('could not find route');
	err.status = 404;
	next(err);
});

app.use('/', function(err, req, res, next) {
	res.status(err.status || 500)
    res.render('error');
})

app.listen(3000, function(err){
  console.log('Listening to port 3000');
});




