import "./gallery.css";
import { makeImage } from "/src/components/shared/picture";
import * as images from "/src/images";

export const Gallery = (() => {
   // create the gallery section
   const section = document.createElement("section");
   section.classList.add("gallery");

   // create a container for the gallery images
   const imageContainer = document.createElement("div");
   imageContainer.setAttribute("id", "gallery-image");
   imageContainer.classList.add("gallery-image-container");

   // set images
   imageContainer.append(
      makeImage(
         [
            images.familyGatheringMobile,
            images.familyGatheringMobile2x,
            images.familyGatheringTablet,
            images.familyGatheringTablet2x,
            images.familyGatheringDesktop,
            images.familyGatheringDesktop2x
         ],
         "Family Gathering",
         ["card-image", "is-active"]
      ),
      makeImage(
         [
            images.specialEventsMobile,
            images.specialEventsMobile2x,
            images.specialEventsTablet,
            images.specialEventsTablet2x,
            images.specialEventsDesktop,
            images.specialEventsDesktop2x
         ],
         "Special Events"
      ),
      makeImage(
         [
            images.socialEventsMobile,
            images.socialEventsMobile2x,
            images.socialEventsTablet,
            images.socialEventsTablet2x,
            images.socialEventsDesktop,
            images.socialEventsDesktop2x
         ],
         "Social Events"
      )
   );

   section.appendChild(imageContainer);

   // create list of choices for gallery images
   const galleryItems = document.createElement("ul");
   galleryItems.classList.add("gallery-items");
   galleryItems.innerHTML = `
      <li class="gallery-item heading-s active" data-item="0">Family Gathering</li>
      <li class="gallery-item heading-s inactive" data-item="1">Special Events</li>
      <li class="gallery-item heading-s inactive" data-item="2">Social Events</li>
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
