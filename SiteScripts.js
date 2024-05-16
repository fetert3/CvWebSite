document.addEventListener("keydown", (e) => {
  // USE THIS TO DISABLE CONTROL AND ALL FUNCTION KEYS
  // if (e.ctrlKey || (e.keyCode>=112 && e.keyCode<=123)) {
  // THIS WILL ONLY DISABLE CONTROL, F1-F12, ALT, ESC
  if (e.ctrlKey || (e.keyCode >= 112 && e.keyCode <= 123) || e.keyCode == 27 || e.keyCode == 18) {
    e.stopPropagation();
    e.preventDefault();
  }
});

//disable Rigth click events
document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
}, false);