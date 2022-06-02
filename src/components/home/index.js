import { Hero } from "./hero";
import { Info } from "./info";
import { Menu } from "./menu";
import { Gallery } from "./gallery";
import { Cta } from "./cta";
import { Footer } from "../shared/footer";

export default (() => {
   const main = document.createElement("main");
   main.appendChild(Hero);
   main.appendChild(Info);
   main.appendChild(Menu);
   main.appendChild(Gallery);
   main.appendChild(Cta);
   main.appendChild(Footer);
   return main;
})();
