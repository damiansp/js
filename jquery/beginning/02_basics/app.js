$(function() {
    let box = $('#box');
    let p = $('p');
    let i = 0;

    p.text(`Fade toggles: ${i}`);

    
    function toggleBox(i) {
      box.fadeToggle(500, function() {
          if (i++ < 10) {
            p.text(`Fade toggles: ${i}`);
            toggleBox(i);
          }
      });
    };

    toggleBox(i);
});
