//  progress bar
const progressBar = document.getElementById("myProgressBar");
const percentage = 90;
progressBar.style.width = percentage + "%";
progressBar.textContent = percentage + "%";
const progressBar1 = document.getElementById("myProgressBar2");
const percentage1 = 20;
progressBar1.style.width = percentage1 + "%";
progressBar1.textContent = percentage1 + "%";

// footer

const footerLinks = document.querySelectorAll("#footer-links a");

footerLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
  });
});

// facebook
const externalLink = document.getElementById("external-link");
const externalURL = "https://www.facebook.com/adrees.mughal.1420";
externalLink.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = externalURL;
});
// instagram
const externalLink1 = document.getElementById("external-link1");
const externalURL1 = "https://www.instagram.com/strigine123/";
externalLink1.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = externalURL1;
});
// email
const externalLink2 = document.getElementById("external-link2");
const externalURL2 = "https://mail.google.com/mail/u/0/?pli=1";
externalLink2.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = externalURL2;
});
// call
const externalLink3 = document.getElementById("external-link3");
const externalURL3 = "https://web.whatsapp.com/";
externalLink3.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = externalURL3;
});
// location
const externalLink4 = document.getElementById("external-link4");
const externalURL4 = "https://earth.google.com/web/";
externalLink4.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = externalURL4;
});
// lined in
const externalLink5 = document.getElementById("external-link5");
const externalURL5 = "https://www.linkedin.com/in/ilha-adrees-7253a0250/";
externalLink5.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = externalURL5;
});
// pintrest
const externalLink6 = document.getElementById("external-link6");
const externalURL6 = "https://www.pinterest.com/ilhaadrees12/";
externalLink6.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = externalURL6;
});
