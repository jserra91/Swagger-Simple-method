'use strict';

var util = require('util');
var request = require('request');

module.exports = {
  detalles: detalles
};

function detalles(req, res) {
  var output = "{ 'results' : [ { 'address_components' : [ { 'long_name' : '29', 'short_name' : '29', 'types' : [ 'street_number' ] }, { 'long_name' : 'Carrer de Londres', 'short_name' : 'Carrer de Londres', 'types' : [ 'route' ]},{ 'long_name' : 'Barcelona', 'short_name' : 'Barcelona', 'types' : [ 'locality', 'political' ]},{ 'long_name' : 'Barcelona', 'short_name' : 'Barcelona', 'types' : [ 'administrative_area_level_2', 'political' ]},{ 'long_name' : 'Catalunya', 'short_name' : 'CT', 'types' : [ 'administrative_area_level_1', 'political' ]},{ 'long_name' : 'España', 'short_name' : 'ES', 'types' : [ 'country', 'political' ]},{ 'long_name' : '08029', 'short_name' : '08029', 'types' : [ 'postal_code' ]} ], 'formatted_address' : 'Carrer de Londres, 29, 08029 Barcelona, España', 'geometry' : {'location' : { 'lat' : 41.3895251, 'lng' : 2.1452698},'location_type' : 'ROOFTOP','viewport' : { 'northeast' : {'lat' : 41.3908740802915,'lng' : 2.146618780291502 }, 'southwest' : {'lat' : 41.3881761197085,'lng' : 2.143920819708498 }} }, 'partial_match' : true, 'place_id' : 'ChIJS_uYnIKipBIRFzNM7cNBEPI', 'types' : [ 'street_address' ]},{ 'address_components' : [{ 'long_name' : '29', 'short_name' : '29', 'types' : [ 'street_number' ]},{ 'long_name' : 'Carrer Londres', 'short_name' : 'Carrer Londres', 'types' : [ 'route' ]},{ 'long_name' : 'Rubí', 'short_name' : 'Rubí', 'types' : [ 'locality', 'political' ]},{ 'long_name' : 'Barcelona', 'short_name' : 'Barcelona', 'types' : [ 'administrative_area_level_2', 'political' ]},{ 'long_name' : 'Catalunya', 'short_name' : 'CT', 'types' : [ 'administrative_area_level_1', 'political' ]},{ 'long_name' : 'España', 'short_name' : 'ES', 'types' : [ 'country', 'political' ]},{ 'long_name' : '08191', 'short_name' : '08191', 'types' : [ 'postal_code' ]} ], 'formatted_address' : 'Carrer Londres, 29, 08191 Rubí, Barcelona, España', 'geometry' : {'location' : { 'lat' : 41.4764696, 'lng' : 2.0248504},'location_type' : 'ROOFTOP','viewport' : { 'northeast' : {'lat' : 41.4778185802915,'lng' : 2.026199380291502 }, 'southwest' : {'lat' : 41.47512061970851,'lng' : 2.023501419708498 }} }, 'partial_match' : true, 'place_id' : 'ChIJGwqj_aaRpBIRG5Kq1p_ms78', 'types' : [ 'street_address' ]} ], 'status' : 'OK'}";
  res.json(output);
}
