import "./menu-item.css";
import { makeImage } from "/src/components/shared/makeImage";

export const MenuItem = ((images, alt, heading, text) => {
   const menuItem = document.createElement("div");
   menuItem.classList.add("menu-item");

   // create menu item image
   const imageContainer = document.createElement("div");
   imageContainer.classList.add("menu-item-image-container");
   const image = makeImage(images, alt, ["menu-item-image"]);
   imageContainer.append(image);

   // create menu item heading
   const itemHeading = document.createElement("h3");
   itemHeading.classList.add("heading-m", "menu-item-heading");
   itemHeading.textContent = heading;

   // create menu item text
   const itemText = document.createElement("p");
   itemText.classList.add("text-reg", "menu-item-text");
   itemText.textContent = text;

   // create container for content
   const content = document.createElement("div");
   content.classList.add("menu-item-content");
   content.append(itemHeading, itemText);

   menuItem.append(imageContainer, content);

   return menuItem
});