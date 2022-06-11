// global stylesheets
import "./reset.css";
import "./style.css";

// import components
import Home from "./components/home";
import Booking from "./components/booking";

const root = document.getElementById("root");

// build homepage
root.append(Home());
setEventListeners(true);

// set event listeners
function setEventListeners(home) {
   const logos = document.querySelectorAll(".logo");
   logos.forEach((logo) => {
      logo.addEventListener("click", (e) => {
         clearInterval(window.intervalId);
         root.replaceChild(Home(), root.lastChild);
         window.scrollTo(0, 0);
         setEventListeners(true);
      });
   });

   if (home) {
      const buttons = document.querySelectorAll(".button");
      buttons.forEach((button) => {
         button.addEventListener("click", (e) => {
            clearInterval(window.intervalId);
            root.replaceChild(Booking(), root.lastChild);
            window.scrollTo(0, 0);
            setEventListeners(false);
         });
      });
   }
}
