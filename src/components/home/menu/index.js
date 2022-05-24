import "./menu.css";
import { Card } from "/src/components/shared/card";

export const Menu = (() => {
   // create menu section
   const section = document.createElement("section");
   section.classList.add("menu");

   // create menu header
   const menuHeader = Card(
      null,
      "",
      "A few highlights from our menu",
      "We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favourites. Our menu is revamped every season."
   );
   menuHeader.classList.add("menu-header");
   section.append(menuHeader);

   // create menu content
   const menuContent = document.createElement("div");

   return section;
})();
