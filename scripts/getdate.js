//scripts for index.html
const options = {
    year: "numeric"
};
let actualYear = new Date().toLocaleDateString("en-US", options);
document.querySelector('#actualYear').innerHTML = `${actualYear}`;

let lastModified = document.lastModified
document.querySelector('#lastModified').innerHTML = `Last modification ${lastModified}`;
document.cookie = "username=John Doe; expires=Thu, 18 Dec 2023 12:00:00 UTC";
