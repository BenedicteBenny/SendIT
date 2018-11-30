const jwt = require('jsonwebtoken');
const RESOURCES = {
  FETCH_USERS: ['ed32f240-f400-11e8-9812-af0f56bcf801']
};
const accessControl = (req, res, next) => {
  const token = req.headers['x-auth-token'];
  const JWT_SECRET = process.env.JWT_SECRET;

  try {
    const valid = jwt.verify(token || ' ', JWT_SECRET);
    if (valid) {
      const { user_id: userId } = jwt.decode(token);
      if (RESOURCES.FETCH_USERS.includes(userId)) {
        req.userId = userId;
        return next();
      }
      return res.status(403).send({
        success: false,
        message: 'Not authorized to perform this action'
      });
    }

    throw Object.assign({}, { message: 'No valid token' });
  } catch (e) {
    return res.status(400).send({
      success: false,
      message: e.message || 'Not a valid token'
    });
  }
};

module.exports = {
  accessControl
};
