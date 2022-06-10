import { Hero } from "./hero";
import { Footer } from "../shared/footer";

export default (() => {
   const main = document.createElement("main");
   main.appendChild(Hero());
   main.appendChild(Footer());

   return main;
});
