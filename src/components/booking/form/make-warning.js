export const makeWarning = (message) => {
   const nameValidationWarning = document.createElement("div");
   nameValidationWarning.classList.add("validation-warning");
   const warningText = document.createElement("p");
   warningText.classList.add("warning-text");
   warningText.textContent = message;
   nameValidationWarning.appendChild(warningText);
   return nameValidationWarning;
}