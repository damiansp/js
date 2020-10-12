(function($) {
  $.fn.tvmaze = {
    getEpisode: function(showID, callback) {
      let req = $.ajax(
        {url: 'http://api.tvmaze.com/shows/' + showID + '/episodes'});
      req.done(callback);
    },

    getShow: function(showName, callback) {
      let req = $.ajax({url: 'http://api.tvmaze.com/search/?q=' + showName});
      req.done(callback);
    }};
})(jQuery);
