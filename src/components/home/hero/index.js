import "./hero.css";
import { makeImage } from "/src/components/shared/makeImage";
import {
   heroBgDesktop,
   heroBgDesktop2x,
   heroBgTablet,
   heroBgTablet2x,
   heroBgMobile,
   heroBgMobile2x,
   logo
} from "../images";

export const Hero = (() => {
   // create hero section
   const section = document.createElement("section");
   section.classList.add("hero");

   // add responsive image for background
   const background = makeImage(
      [
         heroBgMobile,
         heroBgMobile2x,
         heroBgTablet,
         heroBgTablet2x,
         heroBgDesktop,
         heroBgDesktop2x
      ],
      "Pasta dish",
      ["hero-image"]
   );
   section.append(background);

   // add hero content
   const content = document.createElement("div");
   content.classList.add("hero-content");

   // add logo
   const logoContainer = document.createElement("div");
   logoContainer.classList.add("logo");
   logoContainer.innerHTML = `<img src="${logo}" alt="Logo" />`;
   content.append(logoContainer);

   content.innerHTML += `
      <h1 class="heading-xl hero-heading">Exquisite dining since 1989</h1>
      <p class="text-lg hero-text">
         Experience our seasonal menu in beautiful country surroundings. Eat the freshest
         produce from the comfort of our farmhouse.
      </p>
      <button class="button button-dark hero-button heading-s">Book A Table</button>
   `;
   section.append(content);

   return section;
})();
