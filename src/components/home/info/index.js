import "./info.css";
import { InfoCard } from "./card.js";

import {
   enjoyablePlaceDesktop,
   enjoyablePlaceDesktop2x,
   enjoyablePlaceTablet,
   enjoyablePlaceTablet2x,
   enjoyablePlaceMobile,
   enjoyablePlaceMobile2x,
   locallySourcedDesktop,
   locallySourcedDesktop2x,
   locallySourcedTablet,
   locallySourcedTablet2x,
   locallySourcedMobile,
   locallySourcedMobile2x,
} from "/src/images";

export const info = (() => {
   // create info section
   const section = document.createElement("section");
   section.classList.add("info");

   // add info cards
   const infoCardTop = InfoCard(
      [
         enjoyablePlaceMobile,
         enjoyablePlaceMobile2x,
         enjoyablePlaceTablet,
         enjoyablePlaceTablet2x,
         enjoyablePlaceDesktop,
         enjoyablePlaceDesktop2x
      ],
      "A farm with sheep",
      "Enjoyable place for all the family",
      "Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal."
   );
   section.append(infoCardTop);

   const infoCardBottom = InfoCard(
      [
         locallySourcedMobile,
         locallySourcedMobile2x,
         locallySourcedTablet,
         locallySourcedTablet2x,
         locallySourcedDesktop,
         locallySourcedDesktop2x
      ],
      "A bowl of rice being eaten with a spoon",
      "The most locally sourced food",
      "All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food."
   );
   section.append(infoCardBottom);

   return section;
})();
