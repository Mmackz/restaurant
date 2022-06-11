import "./form.css";
import { DateInputs } from "./form-inputs/date-inputs";
import { TimeInputs } from "./form-inputs/time-inputs";
import { GuestsInput } from "./form-inputs/guests-input";
import { patternLines } from "../../home/images";
import { makeWarning } from "./make-warning";

export const Form = (() => {
   const form = document.createElement("form");
   form.classList.add("form");
   form.setAttribute("id", "form");

   // make container for toast message
   const toastContainer = document.createElement("div");
   toastContainer.classList.add("toast-container");
   toastContainer.setAttribute("id", "toast");
   toastContainer.textContent = "Your booking has been submitted. Please check your email for confirmation.";
   form.append(toastContainer);

   // create name input
   const nameInputContainer = document.createElement("div");
   nameInputContainer.classList.add("input-container");

   // add validation warning
   const nameInput = document.createElement("input");
   nameInput.classList.add("wide-input");
   nameInput.type = "text";
   nameInput.name = "name";
   nameInput.placeholder = "Name";
   nameInput.setAttribute("id", "name");
   nameInput.setAttribute("autocomplete", "off");
   nameInput.setAttribute("spellcheck", "false");

   nameInputContainer.append(nameInput, makeWarning("This field is required"));
   form.append(nameInputContainer);

   nameInput.addEventListener("input", (e) => {
      if (e.target.value.length > 0) {
         e.target.classList.add("active-input");
         e.target.classList.remove("warning");
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
   emailInputContainer.append(emailInput, makeWarning("This field is required"));
   form.append(emailInputContainer);

   emailInput.addEventListener("input", (e) => {
      if (e.target.value.length > 0) {
         e.target.classList.add("active-input");
         e.target.classList.remove("warning");
      } else {
         e.target.classList.remove("active-input");
      }
   });

   // append date inputs
   form.append(DateInputs());

   // append time inputs
   form.append(TimeInputs());

   // append guests input
   form.append(GuestsInput());

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
      submitBtn.blur();
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

      // remove previous warnings before validation
      const warnings = document.querySelectorAll(".warning");
      warnings.forEach((warning) => {
         warning.classList.remove("warning");
      });

      let isValid = true;

      if (!name) {
         nameInput.classList.add("warning");
         isValid = false;
      }
      if (!email) {
         emailInput.classList.add("warning");
         isValid = false;
      }
      if (!month || !day || !year) {
         const month = document.getElementById("month");
         const day = document.getElementById("day");
         const year = document.getElementById("year");
         const dateLabel = document.getElementById("date-label");
         month.classList.add("warning");
         day.classList.add("warning");
         year.classList.add("warning");
         dateLabel.classList.add("warning");
         isValid = false;
      }
      if (!hour || !minute) {
         const hour = document.getElementById("hour");
         const minute = document.getElementById("minute");
         const timeLabel = document.getElementById("time-label");
         hour.classList.add("warning");
         minute.classList.add("warning");
         timeLabel.classList.add("warning");
         isValid = false;
      }

      if (isValid) {
         toastContainer.classList.add("show-toast", "fade");
         setTimeout(() => {
            toastContainer.classList.remove("show-toast", "fade");
         }, 5999);

         // reset form
         form.reset();
      }
   });

   return form;
});

// BUGS/TODO
/* 
  - Fine-tune CSS to look like figma design
  - clamp max-width (1180px, 80vw, 1280px)
*/