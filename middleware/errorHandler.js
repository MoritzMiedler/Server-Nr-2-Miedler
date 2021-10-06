const errorHandler = (err, req, res) => {
  console.log('Error => ', err.message.red);
  res.status(500).json({
    data: 'Server error',
  });
};

const notFoundHandler = (req, res) => {
  console.log('Error => ', req.originalUrl.blue);
  res.status(404).json({
    data: 'The requested page does not exist.',
  });
};
