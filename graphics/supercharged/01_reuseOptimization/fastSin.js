$(document).ready(function() {
    (function() {
      const fastSin = function(steps) {
        let table = [],
        ang = 0,
        angStep = (Math.PI *2) / steps;
        do {
          table.push(Math.sin(ang));
          ang += angStep;
        } while (ang < Math.Pi * 2);
        return table;
      };
    })
});


