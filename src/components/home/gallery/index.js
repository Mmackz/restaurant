import "./gallery.css";
import { makeImage } from "/src/components/shared/makeImage";
import { changeGallery } from "./changeGallery";
import * as images from "../images";

export const Gallery = (() => {
   // create the gallery section
   const section = document.createElement("section");
   section.classList.add("gallery");

   // create inner container
   const container = document.createElement("div");
   container.classList.add("gallery-inner");

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

   container.appendChild(imageContainer);

   // create list of choices for gallery images
   const galleryItems = document.createElement("ul");
   galleryItems.classList.add("gallery-items");
   galleryItems.innerHTML = `
      <li class="gallery-item heading-s active" data-item="0">Family Gathering</li>
      <li class="gallery-item heading-s inactive" data-item="1">Special Events</li>
      <li class="gallery-item heading-s inactive" data-item="2">Social Events</li>
   `;

   // add event listeners to change gallery items
   galleryItems.childNodes.forEach((item) => {
      item.addEventListener("click", changeGallery);
   });

   // cycle through gallery images
   let count = 0;
   setInterval(() => {
      const item = galleryItems.children[count];
      if (item.classList.contains("active")) {
         if (count === 2) {
            count = 0;
         } else {
            count += 1;
         }
      }
      galleryItems.children[count].click();
      count += 1;
      if (count > 2) count = 0;
   }, 7500);

   // create a container for the gallery text content
   const galleryContent = document.createElement("div");
   galleryContent.classList.add("gallery-content", "card-content");

   galleryContent.innerHTML = `
      <h3 id="gallery-heading" class="heading-l card-heading">Family Gathering</h3>
      <p id="gallery-text" class="text-lg card-text">We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.</p>
      <button class="button button-light hero-button heading-s">Book A Table</button>
   `;

   galleryContent.prepend(galleryItems);
   container.appendChild(galleryContent);

   // insert decoration elements
   const patternTopRight = document.createElement("img");
   patternTopRight.src = images.patternCurveTopRight;
   patternTopRight.alt = "Background Pattern";
   patternTopRight.classList.add("pattern", "pattern-curve", "pattern-curve-top-right", "gallery-pattern-curve");

   const patternLine = document.createElement("img");
   patternLine.src = images.patternLines;
   patternLine.alt = "Foreground Line Pattern";
   patternLine.classList.add("pattern", "pattern-lines","gallery-pattern-lines");
         
   imageContainer.append(patternLine);
   container.append(patternTopRight);
   section.appendChild(container);

   return section;
});
