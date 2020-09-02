$(function() {
    // Bad! 11 inserts into DOM!
    let i = 0;
    let uList = $('<ul />').appendTo('body');
    while (i < 10) {
      $('<li />', {'text': i + 1}).appendTo(uList);
      i++;
    }

    // Better
    i = 0;
    let uList2 = $('<ul />');
    while (i < 10) {
      $('<li />', {'text': i + 1}).appendTo(uList2);
      i++;
    }
    uList2.appendTo('body');
});
