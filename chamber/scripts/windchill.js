let temperature = document.querySelector("#temperature");
let windSpeed = document.querySelector("#windSpeed");
btnCalculate.addEventListener("click", function (event) {
    event.preventDefault()
    let windChill = (35.74 + (0.6215 * temperature.value)) - (35.75 * Math.pow(windSpeed.value, 0.16)) + (0.4275 * temperature.value * Math.pow(windSpeed.value, 0.16));
    document.querySelector("#windChill").value = Math.round(windChill);
})
const banner = document.querySelector(".banner");

const bannerClose = document.querySelector("#bannerClose");
bannerClose.addEventListener("click", function () {
    banner.style.display = "none";
});
const today = new Date();

if (today.getDay() >= 1 && today.getDay() <= 3) {
    banner.style.display = "block";
}
else
    banner.style.display = "none";
