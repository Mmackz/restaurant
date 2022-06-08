import iconPlus from "./icons/icon-plus.svg";
import iconMinus from "./icons/icon-minus.svg";

export const GuestsInput = (() => {
      // default number of guests
      let guestsAmount = 4;

      // create input for number of guests
      const guestsInput = document.createElement("div");
      guestsInput.classList.add("booking-input", "guests-input");
      guestsInput.setAttribute("aria-label", "select number of guests");
   
      const guests = document.createElement("div");
      guests.classList.add("guests");
      guests.setAttribute("aria-label", "number of guests");
   
      const guestsNumber = document.createElement("span");
      guestsNumber.setAttribute("id", "guests");
      guestsNumber.innerText = guestsAmount;
   
      const guestsSuffix = document.createElement("span");
      guestsSuffix.innerText = " people";
   
      // buttons to increase/decrease number of guests
      const addBtn = document.createElement("button");
      addBtn.classList.add("guests-input-btn");
      addBtn.setAttribute("type", "button");
      addBtn.setAttribute("aria-label", "add guest");
      addBtn.innerHTML = `<img src=${iconPlus} alt="add guest">`;
   
      const minusBtn = document.createElement("button");
      minusBtn.classList.add("guests-input-btn", "minus");
      minusBtn.setAttribute("type", "button");
      minusBtn.setAttribute("aria-label", "remove guest");
      minusBtn.innerHTML = `<img src=${iconMinus} alt="remove guest">`;

      addBtn.addEventListener("click", () => updateGuestsNumber(1));
      minusBtn.addEventListener("click", () => updateGuestsNumber(-1));
   
      guests.append(guestsNumber, guestsSuffix);
      guestsInput.append(minusBtn, guests, addBtn);
   
      function updateGuestsNumber(amount) {
         if ((amount === -1 && guestsAmount > 1) || (amount === 1 && guestsAmount < 12)) {
            guestsAmount += amount;
            guestsNumber.innerText = guestsAmount;
            guestsSuffix.innerText = guestsAmount === 1 ? " person" : " people";
         }
      }

      return guestsInput;
})();