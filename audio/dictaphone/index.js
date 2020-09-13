const record = document.querySelector('.record');
const stop = document.querySelector('.stop');
const soundClips = document.querySelector('.soundClips');
const mediaRecorder = new MediaRecorder(stream);


if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
  console.log('getUserMedia supported');
  navigator.mediaDevices.getUserMedia({audio: true})
    .then(function(stream) {

    }).catch(function(err) {
        console.log('The following getUserMedia error occured: ' + err);
    });
                                  
} else console.log('getUserMedia not supported on your browser');


record.onclick = function() {
  mediaRecorder.start();
  console.log(mediaRecorder.state);
  console.log('recorder started');
  record.style.background = 'red';
  record.style.color = 'black';
};


let chunks = [];

mediaRecorder.ondataavailable = function(e) { chunks.push(e.data); };


stop.onclick = function() {
  mediaRecorder.stop();
  console.log(mediaRecorder.state);
  console.log('recorder stopped');
  record.style.background = '';
  record.style.color = '';
};

// Grabbing and using the blob
mediaRecorder.onstop = function(e) {
  console.log('recorder stopped');
  const clipName = prompt('Enter a name for your sound clip');
  const clipContainer = document.createElement('p');
  const audio = document.createElement('audio');
  const deleteButton = document.createElement('button');

  clipContainer.classList.add('clip');
  audio.etAttribute('controls', '');
  deleteButton.innerHTML = 'Delete';
  clipLabel.innerHTML = clipName;
  clipContainer.appendChild(audio);
  clipConatiner.appendChild(clipLabel);
  clipContainer.appendChild(deleteButton);
  clipContainer.appendChild(clipContainer);
  const blob = new Blob(chunks, {'type': 'audio/ogg; codecs=opus'});
  const audioURL = window.URL.createObjectURL(blob);

  audio.src = audioURL;
  chunks = [];

  deleteButton.onclick = function(e) {
    let evtTgt = e.target;
    evtTgt.parentNode.parentNode.removeChild(evtTgt.parentNode);
  }
};

