import "./menu.css";
import { Card } from "/src/components/shared/card";
import { MenuItem } from "./menu-item";
import {
   beefDesktopTablet,
   beefDesktopTablet2x,
   beefMobile,
   beefMobile2x,
   chocolateDesktopTablet,
   chocolateDesktopTablet2x,
   chocolateMobile,
   chocolateMobile2x,
   salmonDesktopTablet,
   salmonDesktopTablet2x,
   salmonMobile,
   salmonMobile2x
} from "/src/images";

export const Menu = (() => {
   // create menu section
   const section = document.createElement("section");
   section.classList.add("menu");

   const sectionInner = document.createElement("div");
   sectionInner.classList.add("menu-inner");

   // create menu header
   const menuHeader = Card(
      null,
      "",
      "A few highlights from our menu",
      "We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favourites. Our menu is revamped every season."
   );
   menuHeader.classList.add("menu-header");
   sectionInner.append(menuHeader);

   // create menu items
   const menuItems = document.createElement("div");
   menuItems.classList.add("menu-items");

   const menu1 = MenuItem(
      [salmonMobile, salmonMobile2x, salmonDesktopTablet, salmonDesktopTablet2x],
      "A delicious salmon filet",
      "Seared Salmon Fillet",
      "Our locally sourced salmon served with a refreshing buckwheat summer salad.",
      false
   );

   const menu2 = MenuItem(
      [beefMobile, beefMobile2x, beefDesktopTablet, beefDesktopTablet2x],
      "A delicious beef dish",
      "Rosemary Filet Mignon",
      "Our prime beef served to your taste with a delicious choice of seasonal sides.",
      false
   );

   const menu3 = MenuItem(
      [chocolateMobile, chocolateMobile2x, chocolateDesktopTablet, chocolateDesktopTablet2x],
      "A decedant chocolate mousse, topped with cherries",
      "Summer Fruit Chocolate Mousse",
      "Creamy mousse combined with summer fruits and dark chocolate shavings",
      false
   );

   menuItems.append(menu1, menu2, menu3);
   sectionInner.append(menuItems);
   section.append(sectionInner);

   return section;
})();
