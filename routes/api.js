'use strict';

var express = require('express');
var postsEndpoint = require('./posts');
var repoEndpoint = require('./repo/repo');

var router = express.Router();

//---------------------------------------------------------------
// API Route specification
//---------------------------------------------------------------
router.use('/posts', postsEndpoint);
router.use('/repo', repoEndpoint);

//---------------------------------------------------------------
// Swagger API Specification - swagger-jsdoc
//---------------------------------------------------------------
var swaggerJSDoc = require('swagger-jsdoc');

var options = {
	swaggerDefinition: {
		info: {
			title: 'SSmart App Service API',
			description: 'SSmart App service API is ExpressJS based microservices',
			version: '0.0.1',
			contact: {
				email: '',
				name: ''
			},
			license: {
				name: '',
				url: ''
			}
		},
		schemes: [
			'http',
			'https'
		],
		basePath: '/api',
		tags: [{
			name: 'Posts',
			description: 'Get details of posts'
		}, {
			name: 'Repo',
			description: 'Get details about repositories'
		}, {
			name: 'Images',
			description: 'Get details about images'
		}],
		externalDocs: {
			description: 'More information',
			url: ''
		}
	},
	apis: ['routes/api.js', 'routes/posts.js', 'routes/repo/repo.js', 'routes/repo/images.js'],
};

var swaggerSpec = swaggerJSDoc(options);

//---------------------------------------------------------------
// Expose swagger.json at /api/swagger.json
//---------------------------------------------------------------
router.get('/swagger.json', function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.send(swaggerSpec);
});

module.exports = router;