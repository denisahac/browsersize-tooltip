// Globals
var winsizeNotifier = null;

window.onload = init;

function init() {
  winsizeNotifier = document.createElement('span');
  winsizeNotifier.setAttribute('id', 'winsize-notifier');
  winsizeNotifier.style.position = 'fixed';
  winsizeNotifier.style.bottom = '0';
  winsizeNotifier.style.right = '0';
  winsizeNotifier.style.zIndex = '999999';
  winsizeNotifier.style.padding = '8px';
  winsizeNotifier.style.backgroundColor = '#000000';
  winsizeNotifier.style.color = '#FFFFFF';

  updateDimension();

  document.body.appendChild(winsizeNotifier);
}

function getWinWidth() {
  return window.innerWidth;
}

function getWinHeight() {
  return window.innerHeight;
}

function getDimension() {
  return getWinWidth() + ' x ' + getWinHeight() + 'pixels';
}

function updateDimension() {
  winsizeNotifier.innerHTML = getDimension();
}

window.onresize = resize;

function resize() {
  updateDimension();
}