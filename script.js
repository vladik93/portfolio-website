console.log('script.js is running');

window.onbeforeunload = function() {
  window.scrollTo(0, 0);
};