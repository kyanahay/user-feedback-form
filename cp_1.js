const form = document.getElementById("feedback-form");
const feedbackDisplay = document.getElementById("feedback-display");
const tooltip = document.getElementById("tooltip");

const usernameField = document.getElementById("username");
const emailField = document.getElementById("email");
const commentsField = document.getElementById("comments");
const charCount = document.getElementById("char-count");

const usernameError = document.getElementById("username-error");
const emailError = document.getElementById("email-error");
const commentsError = document.getElementById("comments-error");

commentsField.addEventListener("input", function () {
  charCount.textContent = commentsField.value.length;
});

form.addEventListener("mouseover", function (event) {
  if (event.target.matches("input, textarea")) {
    tooltip.textContent = event.target.dataset.tooltip;
    tooltip.classList.remove("hidden");

    const rect = event.target.getBoundingClientRect();
    tooltip.style.left = rect.left + window.scrollX + "px";
    tooltip.style.top = rect.top + window.scrollY - 40 + "px";
  }
});

form.addEventListener("mouseout", function (event) {
  if (event.target.matches("input, textarea")) {
    tooltip.classList.add("hidden");
  }
});

form.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    tooltip.classList.add("hidden");
  }
});

form.addEventListener("click", function (event) {
  event.stopPropagation();
});

document.body.addEventListener("click", function () {
  tooltip.classList.add("hidden");
});

function validateForm() {
  let isValid = true;

  usernameError.textContent = "";
  emailError.textContent = "";
  commentsError.textContent = "";

  if (usernameField.value.trim() === "") {
    usernameError.textContent = "Name is required.";
    isValid = false;
  }

  if (emailField.value.trim() === "") {
    emailError.textContent = "Email is required.";
    isValid = false;
  }

  if (commentsField.value.trim() === "") {
    commentsError.textContent = "Comments are required.";
    isValid = false;
  }

  return isValid;
}

function appendFeedback(name, email, comment) {
  const card = document.createElement("div");
  card.classList.add("feedback-card");

  const title = document.createElement("h3");
  title.textContent = name;

  const emailText = document.createElement("p");
  emailText.classList.add("email-text");
  emailText.textContent = email;

  const commentText = document.createElement("p");
  commentText.classList.add("comment-text");
  commentText.textContent = comment;

  card.appendChild(title);
  card.appendChild(emailText);
  card.appendChild(commentText);

  feedbackDisplay.appendChild(card);
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (!validateForm()) {
    return;
  }

  appendFeedback(
    usernameField.value.trim(),
    emailField.value.trim(),
    commentsField.value.trim()
  );

  form.reset();
  charCount.textContent = "0";
  tooltip.classList.add("hidden");
});