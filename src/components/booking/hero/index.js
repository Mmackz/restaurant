import "./hero.css";
import { makeImage } from "/src/components/shared/makeImage";
import { Form } from "../form";
import { logo, patternCurveBottomRight } from "../../home/images";
import {
   BgDesktop,
   BgDesktop2x,
   BgTablet,
   BgTablet2x,
   BgMobile,
   BgMobile2x
} from "../images";

export const Hero = () => {
   // create hero section
   const section = document.createElement("section");
   section.classList.add("booking-hero");

   // add responsive image for background
   const container = document.createElement("div");
   container.classList.add("booking-image-container");

   const background = makeImage(
      [BgMobile, BgMobile2x, BgTablet, BgTablet2x, BgDesktop, BgDesktop2x],
      "Pasta dish",
      ["booking-image"]
   );
   container.append(background);

   // add hero content
   const content = document.createElement("div");
   content.classList.add("hero-content");

   // add logo
   const logoContainer = document.createElement("div");
   logoContainer.classList.add("logo");
   logoContainer.innerHTML = `<img src="${logo}" alt="Logo" />`;
   content.append(logoContainer);

   content.innerHTML += `
      <h1 class="heading-xl hero-heading">Reservations</h1>
      <p class="text-lg hero-text">
         We can’t wait to host you. If you have any special requirements please feel free to call on the phone number below. We’ll be happy to accommodate you.
      </p>
   `;

   const reserveButton = document.createElement("button");
   reserveButton.classList.add("button", "button-dark", "booking-button", "heading-s");
   reserveButton.setAttribute("aria-label", "jump to form");
   reserveButton.innerText = "Reserve Place";

   // scroll to form and focus on input when button is clicked
   reserveButton.onclick = () => {
      const name = document.getElementById("name");
      window.scrollTo({
         top: 400,
         behavior: "smooth"
      });
      setTimeout(() => {
         name.focus();
      }, 500);
   };

   content.append(reserveButton);

   container.append(content);
   section.append(container);

   // attach blank white area
   const whiteArea = document.createElement("div");
   whiteArea.classList.add("booking-white-area");
   whiteArea.append(Form());
   section.append(whiteArea);

   // add curve pattern
   const patternBottomRight = document.createElement("img");
   patternBottomRight.src = patternCurveBottomRight;
   patternBottomRight.alt = "Background Pattern";
   patternBottomRight.classList.add(
      "pattern",
      "pattern-curve",
      "pattern-curve-bottom-right"
   );
   whiteArea.append(patternBottomRight);

   return section;
};
