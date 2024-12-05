exports.Status = (req, res) => {
  const returnPercentage = Number(req.query.returnPercentage);
  const status = returnPercentage > 0 ? 'profit' : 'loss';

  res.send(status);
};
