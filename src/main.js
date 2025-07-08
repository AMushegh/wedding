import "./fonts.css";
import "./style.css";

import { TOOLTIP_TRIGGER_CONTENT_MAP } from "./constants";
const documentBody = document.querySelector("body");

// countdown timer start
document.addEventListener("DOMContentLoaded", () => {
  const days = document.getElementById("days");
  const hours = document.getElementById("hours");
  const minutes = document.getElementById("minutes");
  const seconds = document.getElementById("seconds");

  const targetDate = new Date("Aug 30, 2025 16:07:00");

  function updateCountdown() {
    const currentTime = new Date();
    const diff = targetDate - currentTime;

    if (diff <= 0) {
      clearInterval(interval);
      days.innerHTML = "00";
      hours.innerHTML = "00";
      minutes.innerHTML = "00";
      seconds.innerHTML = "00";
      return;
    }

    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;

    days.innerHTML = d < 10 ? "0" + d : d;
    hours.innerHTML = h < 10 ? "0" + h : h;
    minutes.innerHTML = m < 10 ? "0" + m : m;
    seconds.innerHTML = s < 10 ? "0" + s : s;
  }

  updateCountdown();

  const interval = setInterval(updateCountdown, 1000);
});
// countdown timer end

const tooltipTriggers = document.querySelectorAll(".tooltipTrigger");
let popupCloseButton;

const closePopup = () => {
  const popup = document.querySelector(".popup-backdrop");
  documentBody.classList.remove("scroll-lock"); // Prevent body scroll when popup is open

  popupCloseButton.removeEventListener("click", closePopup);

  if (popup) {
    popup.classList.remove("active");
    popup.classList.add("hidden");
  }
};

const openPopup = (title, locations) => {
  const popup = document.querySelector(".popup-backdrop");

  if (popup) {
    documentBody.classList.add("scroll-lock"); // Prevent body scroll when popup is open
    const popupTitle = document.querySelector(".popup-title");
    const popupList = document.querySelector(".popup-list");
    popupList.innerHTML = ""; // Clear previous content

    locations.forEach((location) => {
      const listItem = document.createElement("li");
      listItem.classList.add("popup-list-item");

      const listItemIconWrapper = document.createElement("a");
      const listItemTextWrapper = document.createElement("div");

      listItemIconWrapper.classList.add("popup-list-item-icon-wrapper");
      listItemIconWrapper.href = location.locationUrl;
      listItemIconWrapper.target = "_blank"; // Open in new tab
      listItemTextWrapper.classList.add("popup-list-item-text-wrapper");

      const img = document.createElement("img");
      const p = document.createElement("p");

      img.src = location.imageSrc;
      img.alt = location.name;
      p.textContent = location.name;

      listItemIconWrapper.appendChild(img);
      listItemTextWrapper.appendChild(p);

      listItem.appendChild(listItemIconWrapper);
      listItem.appendChild(listItemTextWrapper);

      popupList.appendChild(listItem);
    });

    popupCloseButton = document.querySelector(".popup-close-btn");

    popupCloseButton.addEventListener("click", closePopup);
    popupTitle.textContent = title;

    popup.classList.remove("hidden");
    popup.classList.add("active");
  }
};

tooltipTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const triggerId = trigger.id;

    const { name, locations } = TOOLTIP_TRIGGER_CONTENT_MAP[triggerId];

    openPopup(name, locations);
  });
});
