let book = {'title': 'JavaScript',
            'sub-title': 'The big one',
            for: 'all',
            author: { firstname: 'Bob', surname: 'Dobolina'}};
let author = book.author;
let name = author.surname;
let title = book['title'];
book.edition = 7;
book['title'] = 'ECMAScript';



// 1. Objects as Associative Arrays
let customer = {name: author,
                address: {0: '123 E Main St',
                          1: 'Farmington',
                          2: 'Pennsylvania',
                          3: '12345'}};
let addr = '';
for (let i = 0; i < 4; ++i) {
  addr += customer.address[i] + '\n';
}
console.log(addr);


function addstock(portfolio, stockname, shares) {
  portfolio[stockname] = shares;
}


function computeValue(portfolio) {
  let total = 0.0;
  for (let stock in portfolio) {
    let shares = portfolio[stock];
    let price = getQuote(stock);
    total += shares * price;
  }
  return total;
}



// 2. Inheritance
let o = {}; // inherits methods from Object.prototype
o.x = 1;
let p = Object.create(o); // p inherits from o and Object.prototype
p.y = 2;
let q = Object.create(p); // q inherits frop p, o, and Object.prototype
q.z = 3;
let f = q.toString();
console.log(f);           // from Object.prototype
console.log(q.x + q.y);   // from o and p

let unitCircle = {r: 1};
let c = Object.create(unitCircle);
c.x = 1;
c.y = 1;
c.r = 2;
console.log(unitCircle.r); // still 1



// 3. Property Access Errors
console.log(book.subtitle); // undef
let surname = undefined;
if (book) {
  if (book.author) { surname = book.author.surname; }
}
