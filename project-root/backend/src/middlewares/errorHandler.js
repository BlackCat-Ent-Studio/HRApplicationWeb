const errorHandler = (err, req, res, next) => {
  // Error handling logic
  res.status(500).json({ error: 'Internal server error' });
};

module.exports = errorHandler; 