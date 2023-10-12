const marineAdmirals1 = getComputedStyle(document.documentElement).getPropertyValue('--Marine-Admirals-1-hex');
const marineAdmirals2 = getComputedStyle(document.documentElement).getPropertyValue('--Marine-Admirals-2-hex');
const marineAdmirals3 = getComputedStyle(document.documentElement).getPropertyValue('--Marine-Admirals-3-hex');
const marineAdmirals4 = getComputedStyle(document.documentElement).getPropertyValue('--Marine-Admirals-4-hex'); const modeButton = document.querySelector("#mode");
const body = document.querySelector("body");
const header = document.querySelector("header");
const galleryHeading = document.querySelector(".gallery h2");
const galleryParagraph = document.querySelector(".gallery p");
const marketingHeading = document.querySelector(".marketing h2");
const marketingParagraph = document.querySelector(".marketing p");
const menu = document.querySelector("#menu");
modeButton.addEventListener("click", function () {
    if (modeButton.textContent.includes("☑️")) {
        body.style.background = "#000";
        body.style.color = "#fff";
        header.style.backgroundColor = "#222";
        header.style.color = "#fff";
        modeButton.textContent = "❎";
        galleryHeading.style.color = "#fff";
        galleryParagraph.style.color = "#fff";
        marketingHeading.style.color = "#fff";
        marketingParagraph.style.color = "#fff";
        menu.style.color = "#fff";
        mode.setAttribute("title", "Switch to light mode");
    } else {
        body.style.background = "#eee";
        body.style.color = "#000";
        modeButton.textContent = "☑️";
        header.style.backgroundColor = marineAdmirals3;
        header.style.color = marineAdmirals4;
        menu.style.color = "#000";
        galleryHeading.style.color = marineAdmirals1;
        galleryParagraph.style.color = marineAdmirals1;
        marketingHeading.style.color = marineAdmirals1;
        marketingParagraph.style.color = marineAdmirals1;
        mode.setAttribute("title", "Switch to dark mode");
    }
});