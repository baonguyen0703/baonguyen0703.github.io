import { portfolioItems, skills, resume_url, techs } from "./data.js";

// ================================================================

function ApplyURLs() {
  const resumeBtns = document.querySelectorAll(".resume-btn");
  resumeBtns.forEach((btn) => {
    btn.href = resume_url;
  });
}

const body = document.querySelector("body");

function PageTransition() {
  const secBtns = document.querySelectorAll(".control");
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
        window.scrollTo({
          top: 0,
        });
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
  function SequentialAnimation(elementList, animationList) {
    // time vars are number in seconds
    // animationList: array of [animationName, duration, timeFunction, delayOffset, delayFactor]*
    for (let i = 0; i < elementList.length; i++) {
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
  // delay = 2
  const skillList = document.querySelectorAll(".skill");
  SequentialAnimation(skillList, [["fade-in", 0.5, "ease-in-out", 2, 0.1]]);

  // delay=2.5
  const progressList = document.querySelectorAll(".progress");
  SequentialAnimation(progressList, [
    ["slide-right", 0.5, "ease-in-out", 2.5, 0.1],
  ]);

  // Portfolio
  // delay=.5
  const portfolioItems = document.querySelectorAll(".portfolio-item");
  SequentialAnimation(portfolioItems, [
    ["fade-in", 1, "ease-in-out", .5, 0.15],
    ["move-down-2", 1, "ease-in-out", .5, 0.15],
  ]);

  // Feedbacks
  // delay=.5
  const feedbackItems = document.querySelectorAll(".feedback-item");
  SequentialAnimation(feedbackItems, [
    ["fade-in", .5, "ease-in-out", .5, 0.1],
    ["slide-left-short", .5, "ease-in-out", .5, 0.1],
  ]);

  // Contact
  // delay=.5
  const leftContactElements = document.querySelector(".left-contact").children;
  SequentialAnimation(leftContactElements, [
    ["slide-up-short", 0.5, "ease-in-out", 0.5, 0.1],
    ["fade-in", 0.5, "ease-in-out", 0.5, 0.1],
  ]);

  const rightContactElements = document.querySelector(".contact-form").children;
  SequentialAnimation(rightContactElements, [
    ["slide-up-short", 0.5, "ease-in-out", 0.5, 0.1],
    ["fade-in", 0.5, "ease-in-out", 0.5, 0.1],
  ]);
}

function ThemeChange() {
  const themeBtn = document.querySelector(".theme-btn");
  themeBtn.addEventListener("click", () => {
    body.classList.toggle("light-mode");
  });
}

function GeneratePortfolioItems() {
  const portfolioItemsCon = document.querySelector(".portfolio-items-con");
  portfolioItems.forEach((item) => {
    const newItem = document.createElement("div");
    newItem.className = "portfolio-item";
    newItem.innerHTML = `
      <div class="item-techs"></div>
      <div class="item-thumbnail">
        <div class="image-con">
          ${
            item.thumbnail
              ? `<img src="${item.thumbnail}" alt="">`
              : `<img src="assets/portfolio/port_bg.png" alt="">`
          }
        </div>
        <div class="hover-item">
            <h3 class="title">Project Source</h3>
            <div class="icons-con">
            ${
              item.github_url
                ? `<a href="${item.github_url}" class="icon" target="_blank" rel="noopener noreferrer">
                <i class="fa-brands fa-github"></i>
              </a>
              `
                : ""
            }
            ${
              item.youtube_url
                ? `<a href="${item.youtube_url}" class="icon" target="_blank" rel="noopener noreferrer">
                <i class="fa-brands fa-youtube"></i>
              </a>
              `
                : ""
            }
            </div>
        </div>
      </div>
      <p class="item-name">${item.name}</p>
      <p class="item-description">${item.description ? item.description : ""}</p>
    `;

    const itemTechs = newItem.querySelector(".item-techs");
    item.techs.forEach((tech) => {
      itemTechs.innerHTML += `
        <img class="tech-logo" src="assets/logos/${tech}.png">
      `;
    });
    portfolioItemsCon.appendChild(newItem);
  });
}

function GenerateTechs() {
  const techsCon = document.querySelector(".techs-con");
  techs.forEach((tech) => {
    techsCon.innerHTML += `
    <div class="tech">
      <img class="tech-logo" src="${tech.icon}">
      <div class="tech-name">
          ${tech.name}
      </div>
    </div>
    `;
  });
}

function GenerateFeedbacks() {
  const youtubeFeedbacks = document.querySelector(
    ".feedbacks-con .youtube .feedbacks-main"
  );
  for (let i = 1; i <= 12; i++) {
    youtubeFeedbacks.innerHTML += `
    <img src="assets/feedbacks/cmt_yt_${i}.jpg" alt="" class=feedback-item>
    `;
  }
  const facebookFeedbacks = document.querySelector(
    ".feedbacks-con .facebook .feedbacks-main"
  );
  for (let i = 1; i <= 9; i++) {
    facebookFeedbacks.innerHTML += `
    <img src="assets/feedbacks/cmt_fb_${i}.jpg" alt="" class=feedback-item>
    `;
  }
  const messengerFeedbacks = document.querySelector(
    ".feedbacks-con .messenger .feedbacks-main"
  );
  for (let i = 1; i <= 11; i++) {
    messengerFeedbacks.innerHTML += `
    <img src="assets/feedbacks/msg_fb_${i}.jpg" alt="" class=feedback-item>
    `;
  }
}

ApplyURLs();
GeneratePortfolioItems();
GenerateTechs();
GenerateFeedbacks();
PageTransition();
ProgressBar();
GenerateAnimation();
ThemeChange();
