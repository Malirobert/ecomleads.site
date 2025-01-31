document.querySelector("form").addEventListener("submit", function(event) {
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (!email.includes("@")) {
        alert("Please enter a valid email address.");
        event.preventDefault();
    }

    if (message.length < 10) {
        alert("Message must be at least 10 characters long.");
        event.preventDefault();
    }
});
