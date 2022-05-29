import "./gallery.css";
import { makeImage } from "/src/components/shared/picture";
import {
   familyGatheringDesktop,
   familyGatheringDesktop2x,
   familyGatheringTablet,
   familyGatheringTablet2x,
   familyGatheringMobile,
   familyGatheringMobile2x
} from "/src/images";

export const Gallery = (() => {
   // create the gallery section
   const section = document.createElement("section");
   section.classList.add("gallery");

   // create a container for the gallery images
   const imageContainer = document.createElement("div");
   imageContainer.setAttribute("id", "gallery-image");
   imageContainer.classList.add("gallery-image-container");

   // set default image
   const defaultImage = makeImage(
      [
         familyGatheringMobile,
         familyGatheringMobile2x,
         familyGatheringTablet,
         familyGatheringTablet2x,
         familyGatheringDesktop,
         familyGatheringDesktop2x
      ],
      "Family Gathering"
   )

   imageContainer.appendChild(defaultImage);
   section.appendChild(imageContainer);

   // create list of choices for gallery images
   const galleryItems = document.createElement("ul");
   galleryItems.classList.add("gallery-items");
   galleryItems.innerHTML = `
      <li class="gallery-item heading-s active" data-item="1">Family Gathering</li>
      <li class="gallery-item heading-s inactive" data-item="2">Special Events</li>
      <li class="gallery-item heading-s inactive" data-item="3">Social Events</li>
   `;

   // create a container for the gallery text content
   const galleryContent = document.createElement("div");
   galleryContent.classList.add("gallery-content", "card-content");

   galleryContent.innerHTML = `
      <h3 id="gallery-heading" class="heading-l card-heading">Family Gathering</h3>
      <p id="gallery-text" class="text-lg card-text">We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.</p>
      <button class="button button-light hero-button heading-s">Book A Table</button>
   `;

   galleryContent.prepend(galleryItems);
   section.appendChild(galleryContent);

   return section;
})();
