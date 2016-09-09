var searchModel = require('../model/search.model.js');

exports.search = {
	getTopRestaurant: getTopRestaurant
}

function getTopRestaurant(req, res) {
	console.log('inside search.controller', req.body)
	searchModel.getTopRestaurant(req.body)
	.then(function(result) {
		res.status(200).send(result)
	})
	.catch(function(err) {
		res.status(500).end('Error in getTopRestaurant', err)
	})
}

function getDish(req, res) {
	searchModel.getAllDishNames()
	.then(function(data) {
		res.status(200).send(data);
	})
	.catch(function(error) {
		res.status(500).send(error)
	})
}

function getRestaurants(req, res) {
	searchModel.getArrayOfResturantNames()
	.then(function(data) {
		res.status(200).send(data);
	})
	.catch(function(error) {
		res.status(500).send(error)
	})
}
