//scripts for index.html
const options = {
    year: "numeric"
};
let actualYear = new Date().toLocaleDateString("en-US", options);
document.querySelector('.actualYear').innerHTML = `${actualYear}`;

let lastModified = document.lastModified
document.querySelector('.lasModified').innerHTML = `Last modification: ${lastModified}`;