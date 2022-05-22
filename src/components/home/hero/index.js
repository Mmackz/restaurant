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

export const hero = (() => {
   // create hero section
   const section = document.createElement("section");
   section.classList.add("hero");

   // add responsive image for background
   const background = document.createElement("picture");
   background.innerHTML = `
      <source
         media="(max-width: 540px)"
         srcset="${heroBgMobile} 1x, ${heroBgMobile2x} 2x"
      />
      <source
         media="(max-width: 768px)"
         srcset="${heroBgTablet} 1x, ${heroBgTablet2x} 2x"
      />
      <source
         media="(min-width: 768px)"
         srcset="${heroBgDesktop} 1x, ${heroBgDesktop2x} 2x"
      />
      <img class="hero-image" src="${heroBgDesktop}" alt="Hero image" width="100%" />
   `;
   section.append(background);

   // create div for hero content
   const content = document.createElement("div");
   content.classList.add("hero-content");
   content.innerHTML = `
      <div class="logo">
         <img src="${logo}" alt="Logo" />
      </div>
      <h1 class="heading-xl hero-heading">Exquisite dining since 1989</h1>
   `;
   section.append(content);

   return section;
})();
