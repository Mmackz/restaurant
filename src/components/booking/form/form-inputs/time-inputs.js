import iconArrow from "../icons/icon-arrow.svg";
import iconCheck from "../icons/icon-check.svg";
import { makeWarning } from "../make-warning";

export const TimeInputs = () => {
   // create time inputs
   const timeFormGroup = document.createElement("div");
   timeFormGroup.classList.add("form-group", "time-form-group");

   const timeLabel = document.createElement("label");
   timeLabel.classList.add("form-label");
   timeLabel.setAttribute("for", "hour");
   timeLabel.setAttribute("id", "time-label");
   timeLabel.textContent = "Pick a time";

   const inputGroup = document.createElement("div");
   inputGroup.classList.add("input-group");

   // create hour input
   const hourInput = document.createElement("input");
   hourInput.classList.add("booking-input");
   hourInput.setAttribute("id", "hour");
   hourInput.setAttribute("type", "number");
   hourInput.setAttribute("placeholder", "09");
   hourInput.setAttribute("aria-label", "hour");
   hourInput.setAttribute("autocomplete", "off");
   hourInput.setAttribute("min", "1");
   hourInput.setAttribute("max", "12");

   hourInput.addEventListener("input", (e) => {
      e.target.value = /^((0)[1-9]|(1)[0-2]|[0-9])$/.test(e.target.value)
         ? e.target.value
         : e.target.value.slice(0, -1);
      removeWarnings(e.target);
   });

   hourInput.addEventListener("focusout", (e) => {
      if (e.target.value === "0") {
         e.target.value = "01";
      } else if (e.target.value.length === 1) {
         e.target.value = "0" + e.target.value;
      }
   });

   // create minute input
   const minuteInput = document.createElement("input");
   minuteInput.classList.add("booking-input");
   minuteInput.setAttribute("id", "minute");
   minuteInput.setAttribute("type", "number");
   minuteInput.setAttribute("placeholder", "00");
   minuteInput.setAttribute("aria-label", "minute");
   minuteInput.setAttribute("autocomplete", "off");
   minuteInput.setAttribute("min", "00");
   minuteInput.setAttribute("max", "59");

   minuteInput.addEventListener("input", (e) => {
      e.target.value = /^(0[0-9]|[1-5][0-9]|[0-5])$/.test(e.target.value)
         ? e.target.value
         : e.target.value.slice(0, -1);
      removeWarnings(e.target);
   });

   minuteInput.addEventListener("focusout", (e) => {
      if (e.target.value.length === 1) {
         e.target.value = "0" + e.target.value;
      }
   });

   // create am/pm input
   const amPmInput = document.createElement("div");
   amPmInput.classList.add("booking-input", "am-pm-input", "input-l");
   amPmInput.setAttribute("aria-label", "am-pm");
   amPmInput.setAttribute("tabindex", "0");

   const amPm = document.createElement("span");
   amPm.classList.add("am-pm");
   amPm.setAttribute("id", "am-pm");
   amPm.textContent = "AM";

   const arrowContainer = document.createElement("div");
   arrowContainer.classList.add("arrow-container");

   const arrow = document.createElement("img");
   arrow.src = iconArrow;
   arrow.alt = "arrow";
   arrow.classList.add("arrow");

   arrowContainer.appendChild(arrow);

   // create dropdown menu for am/pm
   const amPmDropdown = document.createElement("div");
   amPmDropdown.classList.add("ampm-dropdown", "hidden");
   amPmDropdown.setAttribute("aria-label", "select am-pm");

   amPmDropdown.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
         e.target.click();
      }
   });

   const dropdownList = document.createElement("ul");
   const am = document.createElement("li");
   am.innerHTML = `<div class="icon-container active"><img src=${iconCheck} alt="checkmark"></div>AM`;
   am.setAttribute("aria-label", "am");
   am.setAttribute("tabindex", "0");

   const pm = document.createElement("li");
   pm.innerHTML = `<div class="icon-container"><img src=${iconCheck} alt="checkmark"></div>PM`;
   pm.setAttribute("aria-label", "pm");
   pm.setAttribute("tabindex", "0");

   dropdownList.append(am, pm);
   amPmDropdown.append(dropdownList);

   // append inputs to input group
   amPmInput.append(amPm, arrowContainer, amPmDropdown);
   inputGroup.append(hourInput, minuteInput, amPmInput);
   timeFormGroup.append(timeLabel, inputGroup, makeWarning("This field is incomplete"));

   // event listener for am/pm
   amPmInput.addEventListener("focusin", toggleAmPmMenu);
   amPmInput.addEventListener("focusout", toggleAmPmMenu);

   [am, pm].forEach((item) => {
      item.addEventListener("click", (e) => {
         if (!e.target.children[0].classList.contains("active")) {
            const firstEl = e.target.parentNode.firstChild.children[0];
            const secondEl = e.target.parentNode.lastChild.children[0];

            if (firstEl.classList.contains("active")) {
               firstEl.classList.remove("active");
               secondEl.classList.add("active");
               amPm.textContent = "PM";
            } else {
               firstEl.classList.add("active");
               secondEl.classList.remove("active");
               amPm.textContent = "AM";
            }
         }
      });
   });

   function toggleAmPmMenu() {
      amPmDropdown.classList.toggle("hidden");
      amPmInput.classList.toggle("active");
   }

   function removeWarnings(target) {
      if (target.value.length > 0) {
         target.classList.add("active-input");
         timeLabel.classList.remove("warning");
         hourInput.classList.remove("warning");
         minuteInput.classList.remove("warning");
      } else {
         target.classList.remove("active-input");
      }
   }

   return timeFormGroup;
};
