// 1. Formatting Numbers
let euros = Intl.NumberFormat('fr', {style: 'currency', currency: 'EUR'});
console.log(euros.format(10000));

let pounds = Intl.NumberFormat('en', {style: 'currency', currency: 'GBP'});
console.log(pounds.format(10000));

let data = [0.05, .76, 1];
let formatData = Intl.NumberFormat(undefined,
                                   {style: 'percent',
                                    minimumFractionDigits: 1,
                                    maximumFractionDigits: 2})
  .format;
console.log(data.map(formatData));



