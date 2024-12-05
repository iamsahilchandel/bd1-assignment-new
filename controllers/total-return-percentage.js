exports.TotalReturnPercentage = (req, res) => {
  const stock1 = Number(req.query.stock1);
  const stock2 = Number(req.query.stock2);
  const stock3 = Number(req.query.stock3);
  const stock4 = Number(req.query.stock4);

  const total = stock1 + stock2 + stock3 + stock4;

  res.send(total.toString());
};
