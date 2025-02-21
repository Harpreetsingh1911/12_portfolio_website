const span = document.querySelector("#typing span");
const humburger = document.querySelector("#humburger");
const ul = document.querySelector("#ul");
const closeIcon = document.querySelector("#close");

// const wordList = ["Developer", "Designer", "Student"];
const wordList2 = ["Developer", "Designer", "Student", "Trader", "Singer"];

// const word = "Developer";

function autoType(wordList) {
  let wordIndex = 0;
  let characteIndex = 0;
  let reverse = false;
  let skipUpdate = 0;

  setInterval(() => {
    if (skipUpdate) {
      skipUpdate--;
      return;
    }
    if (!reverse) {
      span.innerText += wordList[wordIndex][characteIndex];
      characteIndex++;
      skipUpdate = 2;
    } else {
      span.innerText = span.innerText.slice(0, span.innerText.length - 1);
      characteIndex--;
    }
    if (span.innerText == 0 && reverse) {
      reverse = false;
      // characteIndex = 0;
      wordIndex++;
    }
    if (wordIndex === wordList.length) {
      wordIndex = 0;
    }
    if (characteIndex == wordList[wordIndex].length) {
      skipUpdate = 6;
      reverse = true;
    }
  }, 80);
}
autoType(wordList2);

// dynamic navbar

humburger.addEventListener("click", (e) => {
  e.stopPropagation();
  ul.classList.remove("hidden");
  humburger.classList.remove("block");
  humburger.classList.add("hidden");
  closeIcon.classList.remove("hidden");
});

window.addEventListener("click", () => {
  ul.classList.add("hidden");
  humburger.classList.add("block");
  humburger.classList.remove("hidden");
  closeIcon.classList.add("hidden");
});

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".progress-bar", {
    width: "0%", // Start from 0%
    duration: 1.5, // Animation time
    ease: "power2.out", // Smooth easing effect
    scrollTrigger: {
      trigger: "#skills", // The section to watch
      start: "top 75%", // Animation starts when 75% of the section is visible
      toggleActions: "play none none none", // Play animation once
    },
  });
});

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from("#contact", {
    scrollTrigger: {
      trigger: "#contact",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    y: 50,
    duration: 1.5,
    ease: "power2.out",
  });
});
