// import Express Router from express
const { Router } = require('express');

// import our productsController
const authController = require('../controllers/auth');

// create an instance of Express Router.
const authRouter = Router();

// whenever we receive a POST request on auth route '/signup',
// we will invoke the postUser method in the auth controller.
authRouter.post('/signup', authController.postUser);

// whenever we receive a POST request on auth route '/signin',
// we will invoke the postLogin method in the auth controller.
authRouter.post('/signin', authController.postLogin);

// export the router instance we created.
module.exports = authRouter;
