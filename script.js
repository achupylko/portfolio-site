document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    const messageBox = document.getElementById("form-message");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();

        if (!name || !email || !message) {
            showMessage("Будь ласка, заповніть всі поля.", "red");
            return;
        }

        try {
            showMessage("Надсилаю...", "blue");
            const response = await fetch("https://flask-api-fq0z.onrender.com/api/contact", {
                method: "POST",
                body: JSON.stringify({ name, email, message }),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error?.error || "Помилка при надсиланні.");
            }

            const result = await response.json();
            showMessage(result.message || "Успішно!", "green");
            form.reset();
        } catch (err) {
            showMessage(err.message || "Щось пішло не так...", "red");
        }
    });

    function showMessage(text, color) {
        messageBox.textContent = text;
        messageBox.style.color = color;
        messageBox.style.opacity = 1;

        setTimeout(() => {
            messageBox.style.opacity = 0;
        }, 3000);
    }

});
