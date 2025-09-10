const protectAdmin = (req, res, next) => {
  const secretKey = req.headers['x-admin-secret-key'];

  if (secretKey && secretKey === process.env.ADMIN_SECRET_KEY) {
    next();
  } else {
    res.status(401).json({ success: false, message: 'Unauthorized: Access Denied' });
  }
};

module.exports = { protectAdmin };