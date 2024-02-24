module.exports = function(req, res, next) {
  // Use status code 401 Unauthorized
  if (!req.user) return res.status(401).json('Unauthorized');
  // if authorized
  next();
};