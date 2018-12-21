

/**
 * Define java-like classes
 * @param constructor: A function that sets instance props
 * @param methods: Instance methods; copied to prototype
 * @param statics: Class properties; copied to constructor
 */
function defineClass(constructor, methods, statics) {
  if (methods) extend(constructor.prototype, methods);
  if (statics) extend(constructor.statics);
  return constructor;
}


var SimpleRange = defineClass(
  constructor=function(from, to) {
    this.from = from;
    this.to = to;
  },
  methods={includes: function(x) { return this.from <= x && x <= this.to; },
           toString: function() { return this.from + '...' + this.to; }},
  statics={upto: function(to) { return new SimpleRange(0, to); }});

