import { patternDivide } from "/src/images";

// card component
export const Card = (images, alt, heading, text) => {
   // create  card
   const Card = document.createElement("div");
   Card.classList.add("card");

   if (images) {
      const Image = document.createElement("picture");
      Image.innerHTML = `
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
            <img class="card-image" src="${images[0]}" alt="${alt}" width="100%" />
         `;

      Card.append(Image);
   }

   // add divide pattern
   const divider = document.createElement("div");
   divider.classList.add("divider", "card-divider");
   divider.innerHTML = `<img src="${patternDivide}" alt="Divider" />`;

   const Content = document.createElement("article");
   Content.classList.add("card-content");
   Content.innerHTML = `
         <h2 class="heading-l card-heading">${heading}</h2>
         <p class="text-lg card-text">${text}</p>
      `;
   Content.prepend(divider);
   Card.append(Content);

   return Card;
};
