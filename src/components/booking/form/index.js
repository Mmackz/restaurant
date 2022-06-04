import "./form.css";

export const Form = (() => {
   const form = document.createElement("form");
   form.classList.add("booking-form");

   // create name input
   const nameInput = document.createElement("input");
   nameInput.classList.add("booking-input");
   nameInput.type = "text";
   nameInput.name = "name";
   nameInput.placeholder = "Name";
   form.append(nameInput);

   // create email input
   const emailInput = document.createElement("input");
   emailInput.classList.add("booking-input");
   emailInput.type = "email";
   emailInput.name = "email";
   emailInput.placeholder = "Email";
   form.append(emailInput);

   return form;
})();