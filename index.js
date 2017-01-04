//Modulos y Dependencias
var express = require('express')
var app = express()
var server = require('http').Server(app)

var path = require('path')
var logger = require('morgan')
var favicon  =require('serve-favicon')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var methodOverride = require('method-override')
var session = require('express-session')

// Prevenir error y mostrar primero en la consola
process.on('uncaughtException', function(err) {
	console.log(err)
})


// middlawares
function middleware (req, res, next) {
  return next()
}

// Configuración del servidor
app.set('port', process.env.PORT || 5000)

app.use(express.static(path.join(__dirname, './public')))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieParser())
app.use(methodOverride('_method'))


// Session timer estimate Limite: 30 días
app.use(session({ secret: 'usuarioSession', cookie: { maxAge: 15 * 24 * 60 * 60 * 1000 }}))

// Error 404
app.use(function (req, res) {
	res.statusCode = 404
	res.send('Error 404: Pagina No Encontrada')
})

// Error 500
app.use(function (req, res) {
	res.statusCode = 500
	res.send('Error 500: Error del Servidor, Porfavor intentelo más tarde')
})

//Start server
server.listen(app.set('port'), function (err) {
	if(err) {
		return console.log('Error al iniciar server en el puerto: ' + err)
	}
	console.log('Server iniciado en el puerto: ' + app.set('port'))
})
