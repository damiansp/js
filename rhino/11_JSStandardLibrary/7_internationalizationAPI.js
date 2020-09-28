// 1. Formatting Numbers (full effects not displayed in terminal)
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


let arabic = Intl.NumberFormat('ar', {useGrouping: false}).format;
console.log(arabic(0123456789));

// Hindi (e.g.) defaults to Arabic (ASCII) numerals by default; to prevent:
let hindi = Intl.NumberFormat('hi-IN-u-nu-deva').format;
console.log(hindi(0123456789));



// 2. Formatting Dates and Times
let d = new Date('2020-01-02T13:14:15Z');
console.log(Intl.DateTimeFormat('en-US').format(d)); // 1/2/2020
console.log(Intl.DateTimeFormat('fr-FR').format(d)); // 02/01/2020

let opts = {weekday: 'long', month: 'long', year: 'numeric', day: 'numeric'};
// Thursday, January 2, 2020
console.log(Intl.DateTimeFormat('en-US', opts).format(d));
// jueves, 2 de enero de 2020
console.log(Intl.DateTimeFormat('es-ES', opts).format(d));

// The time in NY fo a French-speaking Canadian:
opts = {hour: 'numeric', minute: '2-digit', timeZone: 'America/New_York'};
console.log(Intl.DateTimeFormat('fr-CA', opts).format(d)); // 8 h 14
