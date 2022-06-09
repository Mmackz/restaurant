import "./form.css";
import { DateInputs } from "./date-inputs";
import { TimeInputs } from "./time-inputs";
import { GuestsInput } from "./guests-input";
import { patternLines } from "../../home/images";
import { makeWarning } from "./make-warning";

export const Form = (() => {
   const form = document.createElement("form");
   form.classList.add("form");

   // create name input
   const nameInputContainer = document.createElement("div");
   nameInputContainer.classList.add("input-container");

   // add validation warning
   const nameInput = document.createElement("input");
   nameInput.classList.add("wide-input");
   nameInput.type = "text";
   nameInput.name = "name";
   nameInput.placeholder = "Name";
   nameInput.setAttribute("autocomplete", "off");
   nameInput.setAttribute("spellcheck", "false");

   nameInputContainer.append(makeWarning("This field is required"), nameInput);
   form.append(nameInputContainer);

   nameInput.addEventListener("input", (e) => {
      if (e.target.value.length > 0) {
         e.target.classList.add("active-input");
      } else {
         e.target.classList.remove("active-input");
      }
   });

   // create email input
   const emailInputContainer = document.createElement("div");
   emailInputContainer.classList.add("input-container");

   const emailInput = document.createElement("input");
   emailInput.classList.add("wide-input");
   emailInput.type = "email";
   emailInput.name = "email";
   emailInput.placeholder = "Email";
   emailInput.setAttribute("autocomplete", "off");
   emailInput.setAttribute("spellcheck", "false");
   emailInputContainer.append(makeWarning("This field is required"), emailInput);
   form.append(emailInputContainer);

   emailInput.addEventListener("input", (e) => {
      if (e.target.value.length > 0) {
         e.target.classList.add("active-input");
      } else {
         e.target.classList.remove("active-input");
      }
   });

   // append date inputs
   form.append(DateInputs);

   // append time inputs
   form.append(TimeInputs);

   // append guests input
   form.append(GuestsInput);

   // create button to submit reservation form
   const submitBtn = document.createElement("button");
   submitBtn.classList.add("button", "button-light", "heading-s");
   submitBtn.textContent = "MAKE RESERVATION";

   form.append(submitBtn);

   // add decoration to form
   const decoration = document.createElement("div");
   decoration.classList.add("decoration");
   const patternLine = document.createElement("img");
   patternLine.src = patternLines;
   patternLine.alt = "Foreground Line Pattern";
   patternLine.classList.add("pattern", "pattern-lines");
   decoration.append(patternLine);
   form.append(decoration);

   form.addEventListener("submit", (e) => {
      e.preventDefault();
      const amPm = document.getElementById("am-pm").textContent;
      const guests = document.getElementById("guests").textContent;
      const name = e.target.name.value;
      const email = e.target.email.value;
      const date = e.target.date.value;
      const year = e.target.year.value;
      const month = e.target.month.value;
      const day = e.target.day.value;
      const hour = e.target.hour.value;
      const minute = e.target.minute.value;

      if (!name) {
         console.log("Name invalid");
      }
      if (!email) {
         console.log("Email invalid");
      }
      if (!date) {
         console.log("FullDate invalid");
      }
      if (!month || !day || !year) {
         console.log("Date invalid");
      }
      if (!hour || !minute) {
         console.log("Time invalid");
      }

   });

   return form;
})();
