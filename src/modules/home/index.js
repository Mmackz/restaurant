import { hero } from "./hero";
import heroimg from "./images/hero-bg-desktop.jpg";
import heroimg2x from "./images/hero-bg-desktop@2x.jpg";
import locallySourcedDesktop from "./images/locally-sourced-desktop.jpg";
import locallySourcedDesktop2x from "./images/locally-sourced-desktop@2x.jpg";
import locallySourcedMobile from "./images/locally-sourced-mobile.jpg";
import locallySourcedMobile2x from "./images/locally-sourced-mobile@2x.jpg";

export default (function () {
   return `
      <div class="home">
         <h1>${hero}</h1>
         <picture>
            <source media="(min-width: 768px)" srcset="${locallySourcedDesktop} 1x, ${locallySourcedDesktop2x} 2x" />
            <source media="(max-width: 768px)" srcset="${locallySourcedMobile} 1x, ${locallySourcedMobile2x} 2x" />
            <img src="${heroimg}" alt="Hero image" width="100%" />
         </picture>
      </div>
   `;
})();
