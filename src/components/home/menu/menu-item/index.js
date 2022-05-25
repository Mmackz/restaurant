import "./menu-item.css";
import { makeImage } from "/src/components/shared/picture.js";

export const MenuItem = ((images, alt, heading, text) => {
   const menuItem = document.createElement("div");
   menuItem.classList.add("menu-item");

   // create menu item image
   const image = makeImage(images, alt);

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

   menuItem.append(image, content);

   return menuItem
});