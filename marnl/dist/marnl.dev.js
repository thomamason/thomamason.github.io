"use strict";

var _words = require("./words.js");

var NUMBER_OF_GUESSES = 6;
var guessesRemaining = NUMBER_OF_GUESSES;
var currentGuess = [];
var nextLetter = 0;

var rightGuessString = _words.WORDS[Math.floor(Math.random() * _words.WORDS.length)];

console.log(rightGuessString);

function initBoard() {
  var board = document.getElementById("game-board");

  for (var i = 0; i < NUMBER_OF_GUESSES; i++) {
    var row = document.createElement("div");
    row.className = "letter-row";

    for (var j = 0; j < 5; j++) {
      var box = document.createElement("div");
      box.className = "letter-box";
      row.appendChild(box);
    }

    board.appendChild(row);
  }
}

initBoard();
document.addEventListener("keyup", function (e) {
  if (guessesRemaining === 0) {
    return;
  }

  var pressedKey = String(e.key);

  if (pressedKey === "Backspace" && nextLetter !== 0) {
    deleteLetter();
    return;
  }

  if (pressedKey === "Enter") {
    checkGuess();
    return;
  }

  var found = pressedKey.match(/[a-z]/gi);

  if (!found || found.length > 1) {
    return;
  } else {
    insertLetter(pressedKey);
  }
});

function insertLetter(pressedKey) {
  if (nextLetter === 5) {
    return;
  }

  pressedKey = pressedKey.toLowerCase();
  var row = document.getElementsByClassName("letter-row")[6 - guessesRemaining];
  var box = row.children[nextLetter];
  animateCSS(box, "pulse");
  box.textContent = pressedKey;
  box.classList.add("filled-box");
  currentGuess.push(pressedKey);
  nextLetter += 1;
}

function deleteLetter() {
  var row = document.getElementsByClassName("letter-row")[6 - guessesRemaining];
  var box = row.children[nextLetter - 1];
  box.textContent = "";
  box.classList.remove("filled-box");
  currentGuess.pop();
  nextLetter -= 1;
}

function checkGuess() {
  var row = document.getElementsByClassName("letter-row")[6 - guessesRemaining];
  var guessString = '';
  var rightGuess = Array.from(rightGuessString);
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = currentGuess[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var val = _step.value;
      guessString += val;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  if (guessString.length != 5) {
    toastr.error("Not enough letters!");
    return;
  }

  if (!_words.WORDS.includes(guessString)) {
    toastr.error("Word not in list!");
    return;
  }

  var _loop = function _loop(i) {
    var letterColor = '';
    var box = row.children[i];
    var letter = currentGuess[i];
    var letterPosition = rightGuess.indexOf(currentGuess[i]); // is letter in the correct guess

    if (letterPosition === -1) {
      letterColor = 'grey';
    } else {
      // now, letter is definitely in word
      // if letter index and right guess index are the same
      // letter is in the right position 
      if (currentGuess[i] === rightGuess[i]) {
        // shade green 
        letterColor = 'green';
      } else {
        // shade box yellow
        letterColor = 'yellow';
      }

      rightGuess[letterPosition] = "#";
    }

    var delay = 250 * i;
    setTimeout(function () {
      //flip box
      animateCSS(box, 'flipInX'); //shade box

      box.style.backgroundColor = letterColor;
      shadeKeyBoard(letter, letterColor);
    }, delay);
  };

  for (var i = 0; i < 5; i++) {
    _loop(i);
  }

  if (guessString === rightGuessString) {
    toastr.success("Great Job! You are so smart and I love you!");
    guessesRemaining = 0;
    return;
  } else {
    guessesRemaining -= 1;
    currentGuess = [];
    nextLetter = 0;

    if (guessesRemaining === 0) {
      toastr.error("You fucked it! Game over!");
      toastr.info("The right word was: \"".concat(rightGuessString, "\""));
    }
  }
}

function shadeKeyBoard(letter, color) {
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = document.getElementsByClassName("keyboard-button")[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var elem = _step2.value;

      if (elem.textContent === letter) {
        var oldColor = elem.style.backgroundColor;

        if (oldColor === 'green') {
          return;
        }

        if (oldColor === 'yellow' && color !== 'green') {
          return;
        }

        elem.style.backgroundColor = color;
        break;
      }
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }
}

document.getElementById("keyboard-cont").addEventListener("click", function (e) {
  var target = e.target;

  if (!target.classList.contains("keyboard-button")) {
    return;
  }

  var key = target.textContent;

  if (key === "Del") {
    key = "Backspace";
  }

  document.dispatchEvent(new KeyboardEvent("keyup", {
    'key': key
  }));
});

var animateCSS = function animateCSS(element, animation) {
  var prefix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'animate__';
  return (// We create a Promise and return it
    new Promise(function (resolve, reject) {
      var animationName = "".concat(prefix).concat(animation); // const node = document.querySelector(element);

      var node = element;
      node.style.setProperty('--animate-duration', '0.3s');
      node.classList.add("".concat(prefix, "animated"), animationName); // When the animation ends, we clean the classes and resolve the Promise

      function handleAnimationEnd(event) {
        event.stopPropagation();
        node.classList.remove("".concat(prefix, "animated"), animationName);
        resolve('Animation ended');
      }

      node.addEventListener('animationend', handleAnimationEnd, {
        once: true
      });
    })
  );
};