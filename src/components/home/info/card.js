import { patternDivide } from "/src/images";

// card component
export const InfoCard = (images, alt, heading, text) => {
   // create info card
   const infoCard = document.createElement("div");
   infoCard.classList.add("info-card");

   const infoImage = document.createElement("picture");
   infoImage.innerHTML = `
         <source
            media="(max-width: 499.98px)"
            srcset="${images[0]} 1x, ${images[1]} 2x"
         />
         <source
            media="(max-width: 767.98px)"
            srcset="${images[2]} 1x, ${images[3]} 2x"
         />
         <source
            media="(min-width: 768px)"
            srcset="${images[4]} 1x, ${images[5]} 2x"
         />
         <img class="info-image" src="${images[0]}" alt="${alt}" width="100%" />
      `;

   infoCard.append(infoImage);

   // add divide pattern
   const divider = document.createElement("div");
   divider.classList.add("divider", "info-divider");
   divider.innerHTML = `<img src="${patternDivide}" alt="Divider" />`;
   infoCard.append(divider);

   const infoContent = document.createElement("article");
   infoContent.classList.add("info-content");
   infoContent.innerHTML = `
         <h2 class="heading-l info-heading">${heading}</h2>
         <p class="text-lg info-text">${text}</p>
      `;
   infoCard.append(infoContent);

   return infoCard;
}