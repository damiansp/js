function Forces() {}


// Static
Forces.zeroForce = function() { return new Vector2D(0, 0); };


Forces.constantGravity = function(m, g) { return new Vector2D(0, m * g); };


Forces.linearDrag = function(k, vel) {
  let force;
  let velMag = vel.length();
  if (velMag > 0) force = vel.multiply(-k);
  else force = new Vector2D(0, 0);
  return force;
};


Forces.add = function(arr) {
  let forceSum = new Vector2D(0, 0);
  for (let force of arr) forceSum.incrementBy(force);
  return forceSum;
};
