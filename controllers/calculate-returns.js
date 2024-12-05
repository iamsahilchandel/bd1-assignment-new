exports.CalculateReturns = (req, res) => {
  const boughtAt = parseFloat(req.query.boughtAt);
  const marketPrice = parseFloat(req.query.marketPrice);
  const quantity = parseFloat(req.query.quantity);

  const calculatedReturns = (marketPrice - boughtAt) * quantity;

  res.send(calculatedReturns.toString());
};
