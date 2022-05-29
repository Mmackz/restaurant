import { makeImage } from "/src/components/shared/picture.js";
import {
   familyGatheringDesktop,
   familyGatheringDesktop2x,
   familyGatheringTablet,
   familyGatheringTablet2x,
   familyGatheringMobile,
   familyGatheringMobile2x,
   specialEventsDesktop,
   specialEventsDesktop2x,
   specialEventsTablet,
   specialEventsTablet2x,
   specialEventsMobile,
   specialEventsMobile2x,
   socialEventsDesktop,
   socialEventsDesktop2x,
   socialEventsTablet,
   socialEventsTablet2x,
   socialEventsMobile,
   socialEventsMobile2x
} from "/src/images";

export function changeGallery(event) {
   if (!event.target.classList.contains("active")) {
      const items = document.querySelectorAll(".gallery-item");
      items.forEach((item) => {
         if (item.classList.contains("active")) {
            item.classList.remove("active");
            item.classList.add("inactive");
         }
      });
      event.target.classList.remove("inactive");
      event.target.classList.add("active");

      const galleryImage = document.querySelector("#gallery-image");
      const galleryHeading = document.querySelector("#gallery-heading");
      const galleryText = document.querySelector("#gallery-text");
      const galleryItem = event.target.dataset.item;

      if (galleryItem === "1") {
         galleryImage.innerHTML = makeImage(
            [
               familyGatheringMobile,
               familyGatheringMobile2x,
               familyGatheringTablet,
               familyGatheringTablet2x,
               familyGatheringDesktop,
               familyGatheringDesktop2x
            ],
            "Family Gathering"
         ).innerHTML;

         galleryHeading.textContent = "Family Gathering";
         galleryText.textContent = "We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.";
      }

      if (galleryItem === "2") {
         galleryImage.innerHTML = makeImage(
            [
               specialEventsMobile,
               specialEventsMobile2x,
               specialEventsTablet,
               specialEventsTablet2x,
               specialEventsDesktop,
               specialEventsDesktop2x
            ],
            "Special Events"
         ).innerHTML;

         galleryHeading.textContent = "Special Events";
         galleryText.textContent = "Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.";
      }

      if (galleryItem === "3") {
         galleryImage.innerHTML = makeImage(
            [
               socialEventsMobile,
               socialEventsMobile2x,
               socialEventsTablet,
               socialEventsTablet2x,
               socialEventsDesktop,
               socialEventsDesktop2x
            ],
            "Social Events"
         ).innerHTML;

         galleryHeading.textContent = "Social Events";
         galleryText.textContent = "Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.";
      }
   }
}