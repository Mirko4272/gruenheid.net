const user = "kontakt";
const domain = "gruenheid.net";

const email = `${user}@${domain}`;

document.getElementById("email").textContent = email;
document.getElementById("emailLink").href = `mailto:${email}`;