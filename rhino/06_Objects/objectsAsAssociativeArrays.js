function getValue(portfolio) {
  var total = 0.0;
  for (stock in portfolio) {
    var shares = portfolio[stock];
    var price = getQuote(stock);
    total += shares * price;
  }
  return total;
}
