const downloadCv = document.getElementById("download-cv");
const copyMail = document.getElementById("copy-email");
const burgerMenu = document.getElementsByClassName("burger-menu")[0];
const mobileNav = document.getElementsByClassName("mobile-nav")[0];

downloadCv.addEventListener("click", () => {
  const link = document.createElement("a");
  link.href = "assets/Ishan_Jung_Malla_resume.pdf";
  link.download = "Ishan_Jung_Malla_resume.pdf";
  link.click();
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
