let temperature = document.querySelector("#temperature");
let windSpeed = document.querySelector("#windSpeed");
btnCalculate.addEventListener("click", function () {

    let windChill = (35.74 + (0.6215 * temperature.value)) - (35.75 * Math.pow(windSpeed.value, 0.16)) + (0.4275 * temperature.value * Math.pow(windSpeed.value, 0.16));
    document.querySelector("#windChill").value = Math.round(windChill);
})
