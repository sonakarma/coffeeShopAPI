const express = require('express');
const router = express.Router()

router.get('/', function(req, res) {
	// find everything
	res.send('welcome')
})

router.get('/home', function(req, res) {
	// find everything
	res.send('welcome home route')
})

module.exports =  router;