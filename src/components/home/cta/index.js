import "./cta.css";
import { makeImage } from "/src/components/shared/makeImage";
import {
   readyBgDesktop,
   readyBgDesktop2x,
   readyBgTablet,
   readyBgTablet2x,
   readyBgMobile,
   readyBgMobile2x
} from "../images";

export const Cta = (() => {
   // create the cta section
   const section = document.createElement("section");
   section.classList.add("cta");

   // insert background image
   const background = makeImage(
      [
         readyBgMobile,
         readyBgMobile2x,
         readyBgTablet,
         readyBgTablet2x,
         readyBgDesktop,
         readyBgDesktop2x
      ],
      "Pasta dish",
      ["cta-image"]
   );
   section.append(background);

   // create inner container
   const container = document.createElement("div");
   container.classList.add("cta-inner");

   const heading = document.createElement("h2");
   heading.classList.add("cta-heading", "heading-l");
   heading.textContent = "Ready to make a reservation?";

   const button = document.createElement("button");
   button.classList.add("cta-button", "button", "button-dark", "heading-s");
   button.textContent = "Book A Table";

   container.append(heading, button);
   section.append(container);
   return section;
})();
