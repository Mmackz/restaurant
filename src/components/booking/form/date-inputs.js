import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.css";
import { makeWarning } from "./make-warning";

export const DateInputs = (() => {
   // create date input
   const dateFormGroup = document.createElement("div");
   dateFormGroup.classList.add("form-group", "date-form-group");

   const dateLabel = document.createElement("label");
   dateLabel.classList.add("form-label");
   dateLabel.setAttribute("for", "date");
   dateLabel.textContent = "Pick a date";

   const inputGroup = document.createElement("div");
   inputGroup.classList.add("input-group");

   const monthInput = document.createElement("input");
   monthInput.classList.add("booking-input");
   monthInput.setAttribute("id", "month");
   monthInput.setAttribute("type", "number");
   monthInput.setAttribute("name", "month");
   monthInput.setAttribute("placeholder", "MM");
   monthInput.setAttribute("aria-label", "Month");
   monthInput.setAttribute("autocomplete", "off");
   monthInput.setAttribute("min", "1");
   monthInput.setAttribute("max", "12");

   monthInput.addEventListener("input", (e) => {
      e.target.value = /^((0)[1-9]|(1)[0-2]|[0-9])$/.test(e.target.value)
         ? e.target.value
         : e.target.value.slice(0, -1);
   });

   monthInput.addEventListener("focusout", (e) => {
      if (e.target.value === "0") {
         e.target.value = "01";
      } else if (e.target.value.length === 1) {
         e.target.value = "0" + e.target.value;
      }
   });

   const dayInput = document.createElement("input");
   dayInput.classList.add("booking-input");
   dayInput.setAttribute("id", "day");
   dayInput.setAttribute("type", "number");
   dayInput.setAttribute("name", "day");
   dayInput.setAttribute("placeholder", "DD");
   dayInput.setAttribute("aria-label", "Day");
   dayInput.setAttribute("autocomplete", "off");
   dayInput.setAttribute("min", "1");
   dayInput.setAttribute("max", "31");

   dayInput.addEventListener("input", (e) => {
      e.target.value = /^((0)[1-9]|[1-2][0-9]|(3)[0-1]|[0-9])$/.test(e.target.value)
         ? e.target.value
         : e.target.value.slice(0, -1);
   });

   dayInput.addEventListener("focusout", (e) => {
      if (e.target.value === "0") {
         e.target.value = "01";
      } else if (e.target.value.length === 1) {
         e.target.value = "0" + e.target.value;
      }
   });

   const yearInput = document.createElement("input");
   yearInput.classList.add("booking-input", "input-l");
   yearInput.setAttribute("id", "year");
   yearInput.setAttribute("type", "number");
   yearInput.setAttribute("name", "year");
   yearInput.setAttribute("placeholder", "YYYY");
   yearInput.setAttribute("aria-label", "Year");
   yearInput.setAttribute("autocomplete", "off");
   yearInput.setAttribute("min", "2022");
   yearInput.setAttribute("max", "2025");

   yearInput.addEventListener("input", (e) => {
      e.target.value = /^20?2?[2-5]?$/.test(e.target.value)
         ? e.target.value
         : e.target.value.slice(0, -1);
   });

   yearInput.addEventListener("focusout", (e) => {
      if (e.target.value.length && e.target.value.length < 4) {
         e.target.value = new Date().getFullYear();
      }
   });

   inputGroup.append(monthInput, dayInput, yearInput);

   const dateInput = document.createElement("input");
   dateInput.classList.add("flatpkr");
   dateInput.setAttribute("id", "date");
   dateInput.type = "text";
   dateInput.name = "date";

   dateFormGroup.append(dateLabel, inputGroup, dateInput, makeWarning("This field is incomplete"));

   function changeDate(selectedDates) {
      const date = new Date(selectedDates);
      const monthEl = document.getElementById("month");
      const dayEl = document.getElementById("day");
      const yearEl = document.getElementById("year");

      monthEl.value = `${date.getMonth() + 1}`.padStart(2, "0");
      dayEl.value = `${date.getDate()}`.padStart(2, "0");
      yearEl.value = date.getFullYear();

      monthEl.classList.add("active-input");
      dayEl.classList.add("active-input");
      yearEl.classList.add("active-input");
   }

   function showCalendar() {
      const inputEls = document.querySelectorAll(".date-form-group .booking-input");
      inputEls.forEach((el) => {
         el.addEventListener("click", () => {
            fp.open();
         });

         el.addEventListener("focus", () => {
            fp.open();
         });
      });
   }

   const fp = flatpickr(dateInput, {
      static: true,
      minDate: "today",
      maxDate: new Date().fp_incr(365),
      monthSelectorType: "static",
      appendTo: dateFormGroup,
      position: "auto right",
      positionElement: dateFormGroup,
      onChange: changeDate,
      onReady: function () {
         window.onload = showCalendar;
      }
   });

   return dateFormGroup;
})();
