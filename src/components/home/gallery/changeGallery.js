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

      galleryImage.children[galleryItem].lastElementChild.classList.add("is-active");

      Array.from(galleryImage.children).forEach((image, index) => {
         if (image.lastElementChild.classList.contains("is-active")) {
            image.lastElementChild.classList.remove("is-active");
         }

         if (index == galleryItem) {
            image.lastElementChild.classList.add("is-active");
         }
      });

      if (galleryItem === "0") {
         galleryHeading.textContent = "Family Gathering";
         galleryText.textContent = "We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.";
      }

      if (galleryItem === "1") {
         galleryHeading.textContent = "Special Events";
         galleryText.textContent = "Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.";
      }

      if (galleryItem === "2") {
         galleryHeading.textContent = "Social Events";
         galleryText.textContent = "Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.";
      }
   }
}