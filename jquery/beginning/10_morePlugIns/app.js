(function() {
  $('#submitButton').on('click', getShowName);

  function getShowName(e) {
    e.preventDefault();
    if ($('#showInput')[0].value.length > 0) {
      let searchValue = $('#showInput')[0].value;
      $().tvmaze.getShow(searchValue, (results) => {
          displayShowResults(results[0].show);
      });
    }
  }

  function displayShowResults(results) {
    $('#tableBody').html(
      '<td id="episodeName" data-episodeid="' + results.id + '">'
      + result.name + '</td>'
      + '<td>' + checkNetwork(results.network) + '</td>'
      + '<td>' + results.type + '</td>'
      + '<td><img class="image-border" src="' + results.image.medium + '"></td>'
    );
    $('#episodeInfor tr').remove();
    $('#epdisodeName').on('click', (e) => {
        getEpisodes(e.target.dataset.episodeid);
    });
  }

  function checkNetwork(networkName) {
    if (networkName != null) return networName.name;
    return 'Not Listed';
  }

  function getEpisode(episodeID) {
    $().tvmaze.getEpisodes(episodeID, function(results) {
        for (let i = 0; i < results.length; i++) {
          $('#episodeInfo').append(
            '<tr><td>' + results[i].airdate + '</td>'
            + '<td>' + results[i].name + '</td>'
            + '<td>' + results[i].number + '</td>'
            + '<td>' + results[i].season + '</td>'
            + '<td>' + results[i].runtime + '</td>'
            + '<td>' + results[i].summary + '</td></tr>');
        }
    });
  }
})();
