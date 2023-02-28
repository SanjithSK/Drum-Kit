var counter = 0;
document.addEventListener("keypress", function (event) {
  var keywordLetter = event.key;
  switches(keywordLetter);
  buttonAnimation(keywordLetter);
});
while (counter <= 7) {
  document
    .querySelectorAll("button")
    [counter].addEventListener("click", alertUsers);
  counter++;
  function alertUsers() {
    var buttonHTML = this.innerHTML;
    switches(buttonHTML);
    buttonAnimation(buttonHTML);
  }
}
function switches(button) {
  switch (button) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "k":
      var kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;
    case "l":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    default:
      break;
  }
}

function buttonAnimation(key) {
  var activeButton = document.querySelector("." + key);
  activeButton.classList.add("pressed");
  setTimeout(function reverse() {
    activeButton.classList.remove("pressed");
  }, 100);
}
