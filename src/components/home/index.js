import { hero } from "./hero";
import { info } from "./info"

export default (() => {
   const main = document.createElement("main");
   main.appendChild(hero);
   main.appendChild(info);
   return main;
})();
