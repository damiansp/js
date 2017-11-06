var Tutorial = require('./Tutorial.js');

exports.nodeTutorial = function() {
  console.log('In NodeTutorial!');

  function pTutor() {
    var PTutor = Tutorial;
    PTutor.tutorial();
  }
};
