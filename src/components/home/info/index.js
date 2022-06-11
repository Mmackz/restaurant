import "./info.css";
import { Card } from "/src/components/shared/card";

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
   patternCurveTopLeft,
   patternCurveTopRight,
   patternLines
} from "../images";

export const Info = () => {
   // create info section
   const section = document.createElement("section");
   section.classList.add("info");

   // add info cards
   const infoCardTop = Card(
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
   infoCardTop.classList.add("info-card");
   section.append(infoCardTop);

   const infoCardBottom = Card(
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

   infoCardBottom.classList.add("info-card");
   const patternLine = document.createElement("img");
   patternLine.src = patternLines;
   patternLine.alt = "Foreground Line Pattern";
   patternLine.classList.add("pattern", "pattern-lines");
   infoCardBottom.append(patternLine);

   section.append(infoCardBottom);

   // add patterns
   const patternTopRight = document.createElement("img");
   patternTopRight.src = patternCurveTopRight;
   patternTopRight.alt = "Background Pattern";
   patternTopRight.classList.add("pattern", "pattern-curve", "pattern-curve-top-right");

   const patternTopLeft = document.createElement("img");
   patternTopLeft.src = patternCurveTopLeft;
   patternTopLeft.alt = "Background Pattern";
   patternTopLeft.classList.add("pattern", "pattern-curve", "pattern-curve-top-left");

   section.append(patternTopRight, patternTopLeft);

   return section;
};
