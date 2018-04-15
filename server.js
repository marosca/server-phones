// Cargar modulos y crear nueva aplicacion
var express = require("express"); 
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // soporte para bodies codificados en jsonsupport
//app.use(bodyParser.urlencoded({ extended: true })); // soporte para bodies codificados
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//GET http://localhost:8080/phones
app.get('/phones', function(req, res, next) {
  var mockData = {
    phones: [
      {
        id: 0,
        title: 'Iphone Xs',
        image: 'https://i-cdn.phonearena.com/images/phones/70463-xlarge/Apple-iPhone-Xs-0.jpg',
        description: 'The successor to the iPhone X is rumored to retain the glass-on-metal construction, the 5.8-inch OLED display...',
        color: 'black',
        price: '800€'
      },
      {
        id: 1,
        title: 'Samsung Galaxy S9',
        image: 'https://i-cdn.phonearena.com/images/phones/71479-xlarge/Samsung-Galaxy-Note-9-0.jpg',
        description: 'According to rumors, we could be a few months away from the launch of the next Samsung Galaxy Note smartphone...',
        color: 'silver',
        price: '700€'
      },
      {
        id: 3,
        title: 'Motoriola G5S',
        image: 'https://i-cdn.phonearena.com/images/phones/71039-xlarge/Motorola-Moto-G5S-0.jpg',
        description: 'The Moto G5S sports a 5.2-inch 1080p display (instead of the 5-inch 1080p screen of the regular G5), and ...',
        color: 'blue',
        price: '500'
      },
      {
        id: 0,
        title: 'Iphone Xs',
        image: 'https://i-cdn.phonearena.com/images/phones/70463-xlarge/Apple-iPhone-Xs-0.jpg',
        description: 'The successor to the iPhone X is rumored to retain the glass-on-metal construction, the 5.8-inch OLED display...',
        color: 'black',
        price: '800€'
      },
      {
        id: 1,
        title: 'Samsung Galaxy S9',
        image: 'https://i-cdn.phonearena.com/images/phones/71479-xlarge/Samsung-Galaxy-Note-9-0.jpg',
        description: 'According to rumors, we could be a few months away from the launch of the next Samsung Galaxy Note smartphone...',
        color: 'silver',
        price: '700€'
      },
      {
        id: 3,
        title: 'Motoriola G5S',
        image: 'https://i-cdn.phonearena.com/images/phones/71039-xlarge/Motorola-Moto-G5S-0.jpg',
        description: 'The Moto G5S sports a 5.2-inch 1080p display (instead of the 5-inch 1080p screen of the regular G5), and ...',
        color: 'blue',
        price: '500'
      }
    ]
  };
  setTimeout(function() {
    res.send(mockData);
  }, 1500);
});
 
//Ejemplo: GET http://localhost:8080/items?filter=ABC
app.get('/items', function(req, res) {
  var filter = req.query.filter;
  res.send('Get filter ' + filter);
});
 
//Ejemplo: GET http://localhost:8080/items/10
app.get('/items/:id', function(req, res, next) {
  var itemId = req.params.id;
  res.send('Get ' + req.params.id);
});
 
//Ejemplo: POST http://localhost:8080/items
app.post('/items', function(req, res) {
   var data = req.body.data;
   res.send('Add ' + data);
});
 
//Ejemplo: PUT http://localhost:8080/items
app.put('/items', function(req, res) {
   var itemId = req.body.id;
   var data = req.body.data;
   res.send('Update ' + itemId + ' with ' + data);
});
 
//Ejemplo: DELETE http://localhost:8080/items
app.delete('/items/:id', function(req, res) {
   var itemId = req.params.id;
   res.send('Delete ' + itemId);
});
  
var server = app.listen(8080, function () {
    console.log('Server is running..'); 
});