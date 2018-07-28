// Variables
  // white div
const white = document.querySelector('.white');
  // black div
const black = document.querySelector('.black');
  //control row elements
const startTime = document.getElementById('times');
/* const minBtn = document.getElementById('minBtn'); */
const reset = document.getElementById('reset-btn');
  // randoms for functions
var sec;
var min;
var nWhtIntId;
var nBlkIntId;
const whtSideColor = '#BCAAA4';
const blkSideColor = '#5D4037';


// FUNCTIONS
  // picking time control
const setTime = function (event) {
  document.getElementById('blkmin').innerHTML = document.getElementById('times').value;
  document.getElementById('whtmin').innerHTML = document.getElementById('times').value;
};
  // reset button
const resetClick = function (event) {
  whtStop();
  blkStop();
  document.getElementById('blkmin').innerHTML = document.getElementById('times').value;
  document.getElementById('whtmin').innerHTML = document.getElementById('times').value;
  document.getElementById('blksec').innerHTML = "00";
  document.getElementById('whtsec').innerHTML = "00";
  white.style.background = whtSideColor;
  black.style.background = blkSideColor;
  show();
  black.style.pointerEvents = "auto";
  white.style.pointerEvents = "none";
  times.style.pointerEvents = "auto";
};
  // alert: work in progress
const learning = function () {
  alert('Learning how to implement spacebar/keyboard control...check back in!');
};
  // black second countdown
const blkTicker = function() {
  sec = document.getElementById('blksec').innerHTML;
  min = document.getElementById('blkmin').innerHTML;
  if (sec >= 11){
    sec--;
  document.getElementById('blksec').textContent = sec;
  }
  else if (sec >= 1) {
    sec--;
  document.getElementById('blksec').textContent = '0' + sec;
  }
  else if (sec == 0 && min >= 1){
    sec = 59;
    min--;
  document.getElementById('blksec').textContent = sec;
  document.getElementById('blkmin').textContent = min;
  }
 else {
   black.style.background = 'red';
 }
};
 // white second countdown
const whtTicker = function() {
  sec = document.getElementById('whtsec').innerHTML;
  min = document.getElementById('whtmin').innerHTML;
  if (sec >= 11){
    sec--;
  document.getElementById('whtsec').textContent = sec;
  }
  else if (sec >= 1) {
    sec--;    document.getElementById('whtsec').textContent = '0' + sec;
  }
  else if (sec == 0 && min >= 1){
    sec = 59;
    min--;
  document.getElementById('whtsec').textContent = sec;
  document.getElementById('whtmin').textContent = min;
  }
  else {
  white.style.background = "red";
 };
};
  // interval start black countdown
const blkCountdown = function () {
  nBlkIntId = setInterval(blkTicker, 1000);
};
// interval start white countdown
const whtCountdown = function () {
  nWhtIntId = setInterval(whtTicker, 1000);
};
  // end black countdown
const blkStop = function () {
  clearInterval(nBlkIntId);
};
  // end white countdown
const whtStop = function () { clearInterval(nWhtIntId);
};
  // hide instructions at game start
const hide = function () {
  document.getElementById('startInstructions').style.display = "none";
};
  // show instructions at game reset
const show = function () {
  document.getElementById('startInstructions').style.display = "block";
};
  // show mobile instructions
const showMobile = function () {
  document.getElementById('mobileIns').style.display = 'block';
};
  // black's function container function
const blkMaster = function () {
  whtCountdown();
  blkStop();
  hide();
  black.style.pointerEvents = "none";
  white.style.pointerEvents = "auto";
  times.style.pointerEvents = "none";
};
  // white's function container function
const whtMaster = function () {
  blkCountdown();
  whtStop();
  white.style.pointerEvents = "none";
  black.style.pointerEvents = "auto";
};

const keyboardControl = function () {
  if(nWhtIntId == setInterval(whtTicker, 1000)) {
    whtMaster();
  }
  else if(nBlkIntId == setInterval(blkTicker, 1000)) {
    blkMaster();
  }
}



//EVENTS
  // white side 
white.addEventListener('click', whtMaster);
  // black side
black.addEventListener('click', blkMaster);
  // picking time control
startTime.addEventListener('change', setTime);
  // keyboard controls
window.addEventListener('keypress', blkMaster, once=true)
window.addEventListener('keypress', keyboardControl);
  // reset 
reset.addEventListener('click', resetClick);
