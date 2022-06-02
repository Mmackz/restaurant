// global stylesheets
import "./reset.css";
import "./style.css";

import { changeGallery } from "./components/home/gallery/changeGallery";

// import components
import Home from "./components/home";
import Booking from "./components/booking";

// build homepage
document.getElementById("root").append(Home);

// event listeners
document.querySelectorAll(".gallery-item").forEach((item) => {
   item.addEventListener("click", changeGallery);
});