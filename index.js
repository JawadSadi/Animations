const containerEl = document.querySelector(".container");

const elements = ["Youtuber", "Developer", "Frealancer", "Instructor"];

let elementIndex = 0;

let charIndex = 0;

currentElement();

function currentElement() {
  charIndex++;
  containerEl.innerHTML = `<h1>I am ${
    elements[elementIndex] == "Instructor" ? "an" : "a"
  } ${elements[elementIndex].slice(0, charIndex)}</h1>`;

  if (charIndex === elements[elementIndex].length) {
    elementIndex++;
    charIndex = 0;
  }

  if (elementIndex === elements.length) {
    elementIndex = 0;
  }
  setTimeout(currentElement, 200);
}
