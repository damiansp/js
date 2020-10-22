let url = new URL('https://example.com:8000/path/name?q=term#fragment');
console.log(url.href);     // whole shebang
console.log(url.origin);   // https://example.com:8000
console.log(url.protocol); // https:
console.log(url.host);     // example.com:8000
console.log(url.port);     // 8000
console.log(url.pathname); // /path/name
console.log(url.search);   // ?q=term
console.log(url.hash);     // #fragment

url = new URL('ftp://admin:1337!@ftp.example.com/');
console.log(url.href);
console.log(url.origin);   // ftp://ftp.example.com
console.log(url.username); // admin
console.log(url.password); // 1337!

url = new URL('https://example.com');
url.pathname = 'path with spaces';
url.search = 'q=foo#bar';
console.log(url.pathname); // /path%20with%20spaces
console.log(url.search);   // ?q=foo%23bar
console.log(url.href);


