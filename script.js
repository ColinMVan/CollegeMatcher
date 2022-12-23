// Add event listeners for the tab buttons to switch between forms
const tabButtons = document.querySelectorAll(".tab-button");
tabButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    // Remove the active class from all buttons and forms
    tabButtons.forEach((button) => button.classList.remove("active"));
    const forms = document.querySelectorAll(".form");
    forms.forEach((form) => form.classList.remove("active"));

    // Add the active class to the clicked button and corresponding form
    button.classList.add("active");
    const formId = button.getAttribute("data-form");
    document.getElementById(formId).classList.add("active");
  });
});
