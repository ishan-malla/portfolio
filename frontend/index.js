const downloadCv = document.getElementById("download-cv");
const copyMail = document.getElementById("copy-email");
const burgerMenu = document.getElementsByClassName("burger-menu")[0];
const mobileNav = document.getElementsByClassName("mobile-nav")[0];
const contactForm = document.getElementsByClassName("contact-form")[0];

downloadCv.addEventListener("click", async () => {
  window.location.href = "http://localhost:3000/api/downloads/resume";
});

copyMail.addEventListener("click", () => {
  const email = "ishanjungmalla@gmail.com";
  navigator.clipboard
    .writeText(email)
    .then(() => {
      alert("Email copied to clipboard!");
    })
    .catch((err) => {
      console.error("Failed to copy email: ", err);
    });
});

burgerMenu.addEventListener("click", () => {
  mobileNav.classList.toggle("toggle");
});

contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = {
    name: contactForm.name.value,
    email: contactForm.email.value,
    message: contactForm.message.value,
  };

  try {
    const response = await fetch("http://localhost:3000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    contactForm.reset();
    const data = await response.json();
    console.log("Success:", data);
    alert("Message sent!");
  } catch (error) {
    console.error("Error:", error);
    alert("Something went wrong.");
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    mobileNav.classList.remove("toggle");
  }
});
