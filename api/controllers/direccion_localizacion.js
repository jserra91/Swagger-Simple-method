'use strict';

var util = require('util');
var request = require('request');

module.exports = {
  detalles: detalles
};

function detalles(req, res) {
  var city = req.swagger.params.direccion.value;
  var url = "https://maps.googleapis.com/maps/api/geocode/json?address="+city;
  /*var url = 'https://maps.googleapis.com/maps/api/geocode/json?address=Joan%20Maragall,40,tordera';*/
  request.get(url).pipe(res);
}
