$(document).ready(function() {
    (function() {
      let fastSin = function(steps) {
        let table = [],
        ang = 0,
        angStep = (Math.PI *2) / steps;
        do {
          table.push(Math.sin(ang));
          ang += angStep;
        } while (ang < Math.PI * 2);
        return table;
      };

      let sinTable = fastSin(4096),
        $drawTarget = $('#draw-target'),
        divs = '',
        i,
        bars,
        x = 0;

      let drawGraph = function(ang, freq, height) {
        let height2 = 2 * height;
        for (i = 0; i < 480; i++) {
          bars[i].style.top = (
            160 - height + sinTable[(ang + i*freq) & 4095] * height + 'px');
          bars[i].style.height = height2 + 'px';
        }
      };

      for (i = 0; i < 480; i++) {
        divs += ('<div style="position: absolute; width: 1px; height: 40px; '
                 + 'background-color: #0d0; top: 0px; left: '
                 + i
                 + 'px;"></div>');
      }
      $drawTarget.append(divs);
      bars = $drawTarget.children();

      setInterval(function() {
          drawGraph(50 * x,
                    32 - (16 * sinTable[(20 * x) & 4095]),
                    50 - (20 * sinTable[(10 * x) & 4095]));
          x++;
      }, 20);
    })();
});


