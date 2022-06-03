import "./footer.css";
import { logo } from "../../home/images";

export const Footer = () => {
   const footer = document.createElement("footer");
   footer.classList.add("footer");

   // create inner container
   const inner = document.createElement("div");
   inner.classList.add("footer-inner");
   footer.append(inner);

   // add logo
   const logoContainer = document.createElement("div");
   logoContainer.classList.add("logo", "footer-logo");
   logoContainer.innerHTML = `<img src="${logo}" alt="Logo" />`;
   inner.append(logoContainer);

   // add container for text content
   const content = document.createElement("div");
   content.classList.add("footer-content");

   // add element for address and phone number
   const address = document.createElement("address");
   address.classList.add("footer-address");
   address.innerHTML = `
      <p>Marthwaite, Sedbergh</p>
      <p>Cumbria</p>
      <p>+00 44 123 4567</p>
   `;

   // add element for opening times
   const openingTimes = document.createElement("div");
   openingTimes.classList.add("footer-opening-times");
   openingTimes.innerHTML = `
      <p>OPEN TIMES</p>
      <p>MON - FRI: 09:00 AM - 10:00 PM</p>
      <p>SAT - SUN: 09:00 AM - 11:30 PM</p>
   `;

   content.append(address, openingTimes);
   inner.append(content);

   return footer;
};
