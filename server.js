require('dotenv').config();
const express = require('express'); //require is a built-in function in Node.js that allows you to include modules (libraries) in your application. 
// express variable will hold the exported functionality of the Express module, which is a web application framework for Node.js.
const bodyParser = require('body-parser'); 
const cors = require('cors');
const path = require('path');

// Route Imports
const authRoutes = require('./routes/auth'); // authRoutes is a router object that contains all the routes defined in the auth.js file. 
// By mounting it on the /api/auth path, we can access those routes using URLs that start with /api/auth. For example, if auth.js defines a route for user registration at /register, we can access it at /api/auth/register. 
// This helps to organize our routes and keep related functionality together.
const itemRoutes = require('./routes/items');
const profileRoutes = require('./routes/profile');
const commentRoutes = require('./routes/comments');
const bookingRoutes = require('./routes/bookings');
const notificationRoutes = require('./routes/notifications');

const app = express(); //function express() creates an Express application, which is an object that has methods for routing HTTP requests, configuring middleware, rendering HTML views, and registering a template engine.

// Middleware
app.use(cors()); // "Allow visitors from different websites"
//.use is a method in Express that allows you to add middleware functions to the application's request handling pipeline.
//  Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application's request-response cycle. 
// They can execute any code, make changes to the request and response objects, end the request-response cycle, or call the next middleware function in the stack. 
// In this case, app.use(cors()) adds the CORS middleware to enable Cross-Origin Resource Sharing, allowing requests from different origins to access resources on your server.

app.use(bodyParser.json()); // "Parse(string to object) incoming JSON requests and make the data available in req.body"
app.use(bodyParser.urlencoded({ extended: true })); 
//decodes html form submissions and parses the data
//extended:true allows for rich(nested) objects and arrays to be encoded into the URL-encoded format, allowing for a JSON-like experience with URL-encoded.

// Serve Static Files
app.use(express.static('public'));  //express.static is a built-in middleware function in Express that serves static files such as images, CSS files, and JavaScript files.
//if we have a file called public/index.html, we can access it by going to http://localhost:3000/index.html.
app.use('/uploads', express.static('public/uploads'));// uploads makes the middleware run only when URL starts with /uploads.

// Health Check
app.get('/', (req, res) => {
  res.send('Uni-Find API is running!');
});
//a route is a way to define how an application responds to a specific HTTP request method (GET, POST, etc.) and URL path.
//a router is a mini Express application that can be used to handle a specific set of routes.
// Mount Routes
app.use('/api/auth', authRoutes); //anything that starts with /api/auth will be handled by the authRoutes router.
//  For example, if authRoutes defines a route for user registration at /register, we can access it at /api/auth/register. 
// This helps to organize our routes and keep related functionality together.
app.use('/api/items', itemRoutes);
app.use('/api', profileRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/notifications', notificationRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
