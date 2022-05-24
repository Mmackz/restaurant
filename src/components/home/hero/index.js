import "./hero.css";
import {
   heroBgDesktop,
   heroBgDesktop2x,
   heroBgTablet,
   heroBgTablet2x,
   heroBgMobile,
   heroBgMobile2x,
   logo
} from "/src/images";

export const Hero = (() => {
   // create hero section
   const section = document.createElement("section");
   section.classList.add("hero");

   // add responsive image for background
   const background = document.createElement("picture");
   background.innerHTML = `
      <source
         media="(max-width: 499.98px)"
         srcset="${heroBgMobile} 1x, ${heroBgMobile2x} 2x"
      />
      <source
         media="(max-width: 767.98px)"
         srcset="${heroBgTablet} 1x, ${heroBgTablet2x} 2x"
      />
      <source
         media="(min-width: 768px)"
         srcset="${heroBgDesktop} 1x, ${heroBgDesktop2x} 2x"
      />
      <img class="hero-image" src="${heroBgDesktop}" alt="Hero image" width="100%" />
   `;
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
      <button id="book-table" class="button button-dark hero-button heading-s">Book A Table</button>
   `;
   section.append(content);

   return section;
})();
