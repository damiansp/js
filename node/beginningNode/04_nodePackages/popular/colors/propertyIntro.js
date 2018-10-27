var foo = {};

foo.__defineGetter__('bar', function() { console.log('get bar called'); });
foo.__defineSetter__('bar', function(val) { console.log('set bar to:', val); });

foo.bar;
foo.bar = 'raised bar';
foo.bar;
