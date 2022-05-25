import { Hero } from "./hero";
import { Info } from "./info";
import { Menu } from "./menu";

export default (() => {
   const main = document.createElement("main");
   main.appendChild(Hero);
   main.appendChild(Info);
   main.appendChild(Menu);
   return main;
})();
