import "./card.css";
import { patternDivide } from "../../home/images";

// card component
import { makeImage } from "../makeImage";

export const Card = (images, alt, heading, text, divider = true) => {
   // create  card
   const Card = document.createElement("div");
   Card.classList.add("card");

   if (images) {
      // add responsive image for background
      const image = makeImage(images, alt);
      Card.append(image);
   }

   const Content = document.createElement("article");
   Content.classList.add("card-content");
   Content.innerHTML = `
         <h2 class="heading-l card-heading">${heading}</h2>
         <p class="text-lg card-text">${text}</p>
      `;

   if (divider) {
      // add divide pattern
      const divider = document.createElement("div");
      divider.classList.add("divider", "card-divider");
      divider.innerHTML = `<img src="${patternDivide}" alt="Divider" />`;
      Content.prepend(divider);
   }

   Card.append(Content);

   return Card;
};
