import { Footer } from "../shared/footer";

export default (() => {
   const main = document.createElement("main");
   main.appendChild(Footer);
   return main;
})();