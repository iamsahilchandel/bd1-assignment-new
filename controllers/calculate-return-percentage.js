exports.CalculateReturnPercentage = (req, res) => {
  const boughtAt = Number(req.query.boughtAt);
  const returns = Number(req.query.returns);

  const returnPercentage = (returns / boughtAt) * 100;

  res.send(returnPercentage.toString());
};
