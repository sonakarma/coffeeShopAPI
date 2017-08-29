1. download node.js and create package.json

* INSTALL NODE JS  `node-v6.3.1-linux-x86.tar.gz` 
* CREATE PACKAGE.JSON   `npm init` 
* RUN NODE - `node <main file name>` for example `node app`

2. Uses a famous Node.js web framework module called express −

* Express.js is a Node js web application server framework, which is specifically designed for building 	   single-page, multi-page, and hybrid web applications.
* The Express.js framework makes it very easy to develop an application which can be used to handle multiple 	types of requests like the GET, PUT, and POST and DELETE requests.
* INSTALL EXPRESS.JS `npm install express`

3. Why Express?

* Unlike its competitors like Rails and Django, which have an opinionated way of building applications.
* Express has no "best way" to do something. It is very flexible and pluggable.

4.Using express

* var app = express()
* app.METHOD(PATH, HANDLER) / app.METHOD(route, callback)
* app - app is an instance of the express module
* METHOD - METHOD is an HTTP request method (GET, POST, PUT or DELETE)
* PATH - PATH is a path on the server.
* HANDLER - HANDLER is the function executed when the route is matched.

** serving static files in express
  -  app.use(express.static('public'))

5. nodemon

* This tool restarts our server as soon as we make a change in any of our files, otherwise we need to restart 	the server manually after each file modification. To install nodemon, use the following command −

* npm install -g nodemon
* run command `nodemon or nodemon app` (instance of `node app`)
 
6. body-parser

* This is used for parse the body of request which have payloads
* INSTALL BODY-PARSER `npm install body-parser --save`
* We will use inside like - app.use(bodyParser) 

7. Connect from DB

* Install mongojs
   - npm install mongojs
* mongojs is easy to use 
   - var mongojs = require('mongojs')
   - var db = mongojs(connectionString, [collections])
* Resources 
   - https://github.com/mafintosh/mongojs   


