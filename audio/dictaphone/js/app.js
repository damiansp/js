const record = document.querySelector('.record');
const stop = document.querySelector('.stop');
const soundClips = document.querySelector('.soundClips');
const canvas = document.querySelector('.visualizer');
const ctx = canvas.getContext('2d');
const mainSection = document.querySelector('.main-controls');
let audioCtx;


stop.disabled = true; // disable while not recording


if (navigator.mediaDevices.getUserMedia) {
  console.log('getUserMedia supported');
  const constraints = {audio: true};
  let chunks = [];

  let onSuccess = function(stream) {
    const mediaRecorder = new MediaRecorder(stream);

    visualize(stream);

    record.onclick = function() {
      mediaRecorder.start();
      console.log(mediaRecorder.state);
      console.log('Recorder started');
      record.style.background = 'red';
      stop.disabled = false;
      record.disabled = true;
    };

    stop.onclick = function() {
      mediaRecorder.stop();
      console.log(mediaRecorder.state);
      console.log('Recorder stopped')
      record.style.background = '';
      record.style.color = '';
      stop.disabled = true;
      record.disabled = false;
    };

    mediaRecorder.onstop = function(e) {
      console.log('Data available after MediaRecorder.stop() called');
      const clipName = prompt('Enter a name for your clip:', 'My clip');
      const clipLabel = document.createElement('p');
      const audio = document.createElement('audio');
      const deleteButton = document.createElement('button');

      clipContainer.classList.add('clip');
      audio.setAttribute('controls', '');
      deleteButton.textContent = 'Delete';
      deleteButton.className = 'delete';
      if (clipName === null) clipLabel.textContent = 'My Clip';
      else clipLabel.textContext = clipName; 
      clipContainer.appendChild(audio);
      clipContainer.appendChild(clipLabel);
      clipContainer.appendChild(deleteButon);
      soundClips.appendChild(clipContainer);
      audio.controls = true;
      const blob = new Blob(chunks, {'type': 'audio/ogg; codecs=opus'});
      const audioURL = window.URL.createObjectURL(blob);

      chunks = []; /* *** */
      audio.src = audioURL;
      console.log('Recorder stopped');

      deleteButton.onclick = function() {
        let eTarget = e.target;

        eTarget.parentNode.parentNode.removeChild(eTarget.parentNode);
      };

      clipLabel.onclick = function() {
        ; 
      };
    };

  }; // onSuccess
}
