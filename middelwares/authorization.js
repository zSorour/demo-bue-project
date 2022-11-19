const AuthService = require('../services/auth');

module.exports.auth = async (req, res, next) => {
  // remember that the standard is to send the JWT in the authorization header
  // it should be something like "BEARER token_here"
  // so we need to extract the second word in our authorization header because it is our JWT.
  // split the authorization header words by space, and let the token be the second word.

  try {
    const token = req.headers.authorization.split(' ')[1];

    if (!token) {
      throw new Error('Unauthorized.');
    }

    const tokenPayload = await AuthService.auth(token);

    // modify the request object to contain the token payload
    // this allows you to easily access it whenever needed.
    req.jwtPayload = tokenPayload;

    // invoke the next middleware
    next();
  } catch (err) {
    res.status(403).send({
      error: 'Unauthorized'
    });
  }
};
