const downloadCv = document.getElementById("download-cv");
const copyMail = document.getElementById("copy-email");

downloadCv.addEventListener("click", () => {
  const link = document.createElement("a");
  link.href = "assets/Ishan_Jung_Malla_resume.pdf";
  link.download = "Ishan_Jung_Malla_resume.pdf";
  link.click();
});

copyMail.addEventListener("click", () => {
  const email = "ishanjungmall@gmail.com";
  navigator.clipboard
    .writeText(email)
    .then(() => {
      alert("Email copied to clipboard!");
    })
    .catch((err) => {
      console.error("Failed to copy email: ", err);
    });
});
