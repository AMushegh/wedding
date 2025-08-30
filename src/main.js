import Swiper from "swiper";
import { EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";

import "./styles/fonts.css";
import "./styles/style.css";

import { POPUP_TRIGGER_CONTENT_MAP } from "./constants";
import { isMobile } from "./helpers";

const setupTimer = () => {
  // Countdown Timer Setup
  const days = document.getElementById("days");
  const hours = document.getElementById("hours");
  const minutes = document.getElementById("minutes");
  const seconds = document.getElementById("seconds");

  const targetDate = new Date("Aug 30, 2025 16:04:00");

  const updateCountdown = () => {
    const now = new Date();
    const diff = targetDate - now;
    let interval;
    if (diff <= 0) {
      if (interval) {
        clearInterval(interval);
      }
      [days, hours, minutes, seconds].forEach((el) => (el.innerHTML = "00"));
      return;
    }

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor(diff / (1000 * 60 * 60)) % 24;
    const m = Math.floor(diff / (1000 * 60)) % 60;
    const s = Math.floor(diff / 1000) % 60;

    days.innerHTML = d.toString().padStart(2, "0");
    hours.innerHTML = h.toString().padStart(2, "0");
    minutes.innerHTML = m.toString().padStart(2, "0");
    seconds.innerHTML = s.toString().padStart(2, "0");
  };

  updateCountdown(); // Initialize once immediately
  const interval = setInterval(updateCountdown, 1000);
};
// === DOM Ready ===
document.addEventListener("DOMContentLoaded", () => {
  setupTimer();

  // Swiper Initialization
  new Swiper(".mySwiper", {
    modules: [EffectCoverflow],
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    initialSlide: isMobile() ? 0 : 3,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
  });
});

// === Popup Logic ===
const documentBody = document.querySelector("body");
let popupCloseButton = null;

const closePopup = () => {
  const popup = document.querySelector(".popup-backdrop");
  if (!popup) return;

  documentBody.classList.remove("scroll-lock");
  popupCloseButton?.removeEventListener("click", closePopup);
  popup.classList.remove("active");
  popup.classList.add("hidden");
};

const isArmVersion = () => {
  return window.location.pathname.includes("hy");
};

const openPopup = (title, locations) => {
  const popup = document.querySelector(".popup-backdrop");
  const popupTitle = document.querySelector(".popup-title");
  const popupList = document.querySelector(".popup-list");

  if (!popup || !popupTitle || !popupList) return;

  documentBody.classList.add("scroll-lock");
  popupList.innerHTML = "";

  console.log(locations);

  locations.forEach((location) => {
    const listItem = document.createElement("li");
    listItem.classList.add("popup-list-item");

    const iconWrapper = document.createElement("a");
    iconWrapper.classList.add("popup-list-item-icon-wrapper");
    iconWrapper.href = location.locationUrl;
    iconWrapper.target = "_blank";

    const img = document.createElement("img");
    img.src = `${isArmVersion() ? "." : ""}${location.imageSrc}`;
    img.alt = location.name;
    iconWrapper.appendChild(img);

    const textWrapper = document.createElement("div");
    textWrapper.classList.add("popup-list-item-text-wrapper");

    const p = document.createElement("p");
    p.textContent = location.name;
    textWrapper.appendChild(p);

    listItem.appendChild(iconWrapper);
    listItem.appendChild(textWrapper);
    popupList.appendChild(listItem);
  });

  popupCloseButton = document.querySelector(".popup-close-btn");
  popupCloseButton?.addEventListener("click", closePopup);
  popupTitle.textContent = title;
  popup.classList.remove("hidden");
  popup.classList.add("active");
};

document.querySelectorAll(".tooltipTrigger").forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const { name, armName, locations } = POPUP_TRIGGER_CONTENT_MAP[trigger.id];
    openPopup(isArmVersion() ? armName : name, locations);
  });
});
