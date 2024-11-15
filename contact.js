document.getElementById("contact-form").addEventListener("submit", async function (e) {
  e.preventDefault();

  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  try {
    const response = await fetch("https://0ib2x3isz4.execute-api.us-east-1.amazonaws.com/prod/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const statusMessage = document.getElementById("status-message");
    if (response.ok) {
      statusMessage.className = "alert alert-success";
      statusMessage.textContent = "Message sent successfully!";
      document.getElementById("contact-form").reset();
    } else {
      statusMessage.className = "alert alert-danger";
      statusMessage.textContent = "Failed to send message. Please try again.";
    }
  } catch (error) {
    console.error("Error:", error);
    const statusMessage = document.getElementById("status-message");
    statusMessage.className = "alert alert-danger";
    statusMessage.textContent = "An error occurred. Please try again.";
  }
});
