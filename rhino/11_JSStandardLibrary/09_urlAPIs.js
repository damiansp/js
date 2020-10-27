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

url = new URL('https://example.com/search');
console.log(url.search); // '' (no query yet)
url.searchParams.append('q', 'term');
console.log(url.search); // '?q=term'
url.searchParams.set('q', 'x');
console.log(url.search); // '?q=x'
console.log(url.searchParams.get('q')); // x
console.log(url.searchParams.has('q')); // true
console.log(url.searchParams.has('p')); // false
url.searchParams.append('opts', '1');
console.log(url.search);                // '?q=x&opts=1'
url.searchParams.append('opts', '&');
console.log(url.search);                // '?q=x&opts=1&opts=%26'
console.log(url.searchParams.get('opts'));    // 1
console.log(url.searchParams.getAll('opts')); // [1 &]
url.searchParams.sort();
console.log(url.search);                      // '?opts=1&opts=%26&q=x'
url.searchParams.set('opts', 'y');
console.log(url.search);                      // '?opts=y&q=x'
console.log([...url.searchParams]);           // [[opts y], [q x]]
url.searchParams.delete('opts');
console.log(url.search);                      // '?q=x'
console.log(url.href);                        // https://example.com/search?q=x

url = new URL('http://example.com');
let params = new URLSearchParams();
params.append('q', 'term');
params.append('opts', 'exact');
console.log(params.toString()); // 'q=term&opts=exact'
url.search = params;
console.log(url.href);          // http://example.com/?q=term&opts=exact
