document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const messageBox = document.getElementById("form-message");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      messageBox.textContent = "Будь ласка, заповніть всі поля.";
      messageBox.style.color = "red";
      return;
    }

    messageBox.textContent = "Повідомлення надіслано! Дякую 😊";
    messageBox.style.color = "green";

    form.reset();
  });
});
