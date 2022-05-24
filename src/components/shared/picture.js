export const makeImage = (images, alt, className = "card-image") => {
   const picture = document.createElement("picture");
   picture.innerHTML = `
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
      <img class=${className} src="${images[0]}" alt="${alt}" width="100%" />
   `;
   return picture;
};
