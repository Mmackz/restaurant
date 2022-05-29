import { Hero } from "./hero";
import { Info } from "./info";
import { Menu } from "./menu";
import { Gallery } from "./gallery";

export default (() => {
   const main = document.createElement("main");
   main.appendChild(Hero);
   main.appendChild(Info);
   main.appendChild(Menu);
   main.appendChild(Gallery);
   return main;
})();
