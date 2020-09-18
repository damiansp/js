const record = document.querySelector('.record');
const stop = document.querySelector('.stop');
const soundClips = document.querySelector('.sound-clips');
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
      const clipContainer = document.createElement('article');
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
      clipContainer.appendChild(deleteButton);
      soundClips.appendChild(clipContainer);
      audio.controls = true;
      const blob = new Blob(chunks, {'type': 'audio/ogg; codecs=opus'});
      const audioURL = window.URL.createObjectURL(blob);

      chunks = []; /* *** */
      audio.src = audioURL;
      console.log('Recorder stopped');

      deleteButton.onclick = function() {
        let eTarget = e.target;
        // Bug: eTarget.parentNode undefined
        eTarget.parentNode.parentNode.removeChild(eTarget.parentNode);
      };

      clipLabel.onclick = function() {
        const existingName = clipLabel.textContext;
        const newClipName = prompt('Enter new name for clip:');
        if (newClipname === null) clipLabel.textContent = existingName;
        else clipLable.textContent = newClipName;
      };
    };

    mediaRecorder.ondataavailable = function(e) { chunks.push(e.data); }
  }; // onSuccess


  let onError = function(err) { console.log('Error: ' + err); }

  navigator.mediaDevices.getUserMedia(constraints).then(onSuccess, onError);
} else console.log('getUserMedia not supported by your browser!');


function visualize(stream) {
  if (!audioCtx) audioCtx = new AudioContext();

  const source = audioCtx.createMediaStreamSource(stream);
  const analyser = audioCtx.createAnalyser();
  analyser.fftSize = 2048;
  const bufferLength = analyser.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);

  source.connect(analyser);
  draw();


  function draw() {
    const W = canvas.width;
    const H = canvas.height;

    requestAnimationFrame(draw);
    analyser.getByteTimeDomainData(dataArray);
    ctx.fillStyle = 'rgb(200, 200, 220)';
    ctx.fillRect(0, 0, W, H);
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'rgb(0, 0, 0)';
    ctx.beginPath();

    let sliceW = 1.0 * W / bufferLength;
    let x = 0;

    for (let i = 0; i < bufferLength; i++) {
      let v = dataArray[i] / 128.0;
      let y = v * H / 2;

      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
      x += sliceW;
    }
    ctx.lineTo(W, H / 2);
    ctx.stroke();
  }
}


window.onresize = function() { canvas.width = mainSection.offsetWidth; };

window.onresize();
