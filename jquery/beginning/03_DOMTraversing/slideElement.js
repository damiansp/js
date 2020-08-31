$(function() {
    let i = 0;
    while (i < 10) {
      $('#box').slideToggle((i + 1) * 100);
      i++;
    }
});
