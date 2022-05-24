import { Hero } from "./hero";
import { Info } from "./info"

export default (() => {
   const main = document.createElement("main");
   main.appendChild(Hero);
   main.appendChild(Info);
   return main;
})();
