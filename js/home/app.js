const body = document.querySelector("body");
const sections = document.querySelectorAll("section");
const secNavbar = document.querySelector(".controls");
const secBtns = document.querySelectorAll(".control");

function PageTransition() {
  // Handle control buttons click event
  secBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const activeBtn = document.querySelector(".active-btn");
      if (activeBtn !== btn) {
        activeBtn.classList.toggle("active-btn");
        btn.classList.toggle("active-btn");
      }
    });
  });

  // Handle sections navigation
  // Choose click event on body but not section buttons because we might use other navigations (e.g. footer, links)
  body.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    if (id) {
      const activeSection = document.querySelector(".section.active");
      const thisSection = document.getElementById(id);
      if (thisSection !== activeSection) {
        activeSection.classList.toggle("active");
        thisSection.classList.toggle("active");
      }
    }
  });
}

// Get width of progress from dataset.width
function ProgressBar() {
  const progressList = document.querySelectorAll(".progress");
  progressList.forEach((progress) => {
    progress.style.width = progress.dataset.width;
  });
}

function GenerateAnimation() {
  function sequentialAnimation(elementList, animationList) {
    // time vars are number in seconds
    // animationList: array of [elementList, animationName, duration, timeFunction, delayOffset, delayFactor]*
    for (let i = 0; i < elementList.length; i++) {
      element = elementList[i];
      let animationStr = "";
      let ani = animationList[0];
      animationStr += `${ani[0]} ${ani[1]}s ${ani[2]} both ${
        ani[3] + i * ani[4]
      }s`;
      for (let j = 1; j < animationList.length; j++) {
        ani = animationList[j];
        animationStr += `, ${ani[0]} ${ani[1]}s ${ani[2]} both ${
          ani[3] + i * ani[4]
        }s`;
      }
      elementList[i].style.animation = animationStr;
    }
  }

  // Progress bar
  // delay = 1.5
  const skillList = document.querySelectorAll(".skill");
  sequentialAnimation(skillList, [["fade-in", 0.5, "ease-in-out", 1.5, 0.1]]);

  // delay=1.5
  const progressList = document.querySelectorAll(".progress");
  sequentialAnimation(progressList, [
    ["slide-right", 0.5, "ease-in-out", 1.5, 0.1],
  ]);

  // Portfolio
  const portfolioItems = document.querySelectorAll(".portfolio-item");
  sequentialAnimation(portfolioItems, [
    ["fade-in", 1, "ease-in-out", 1, 0.1],
    ["move-down-2", 0.5, "ease-in-out", 1, 0.1],
  ]);

  //   Contact
  const leftContactElements = document.querySelector(".left-contact").children;
  sequentialAnimation(leftContactElements, [
    ["slide-up-short", .5, "ease-in-out", .5, 0.1], ["fade-in", .5, "ease-in-out", .5, 0.1]
  ]);

  const rightContactElements = document.querySelector(".contact-form").children
  sequentialAnimation(rightContactElements, [
    ["slide-up-short", .5, "ease-in-out", .5, 0.1], ["fade-in", .5, "ease-in-out", .5, 0.1]
  ]);
}

function ThemeChange() {
  const themeBtn = document.querySelector(".theme-btn");
  themeBtn.addEventListener("click", () => {
    body.classList.toggle("light-mode");
  });
}

PageTransition();
ProgressBar();
GenerateAnimation();
ThemeChange();
