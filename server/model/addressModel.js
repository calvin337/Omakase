var request = require('request');

var addressModel = module.exports;

addressModel.convertAddress = function(params, res) {
  var options = {
    method: 'GET',
    url: 'https://maps.googleapis.com/maps/api/geocode/json',
    qs: {
        address: params.address,
        key: 'AIzaSyBKzBInzbbwqbFWDpH5aqy8I73k3j4XiRM'
    }
  };

  //sends back longitude/latitude to front end
  request(options, function(error, response, body) {
    if(error) {
      console.log(error)
      res.status(500).send(error);
    } else {
      var parsed = JSON.parse(body);
      console.log('body inside addressModel.js', parsed.results[0].geometry.location)
      res.send(parsed.results[0].geometry.location);
    }
  });
}
