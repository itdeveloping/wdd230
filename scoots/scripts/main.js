const url = window.location.pathname;
const filename = url.substring(url.lastIndexOf('/') + 1);

if (filename == 'rentals.html') {
    //code for rentals table
    const baseURL = "https://itdeveloping.github.io/wdd230/";
    const RentalsURL = "https://itdeveloping.github.io/wdd230/scoots/data/rentals.json";
    //const RentalsURL = "data/rentals.json"; //for local test
    async function getRentals() {
        const response = await fetch(RentalsURL);
        const data = await response.json();
        displayRentals(data.RentalType);
    }

    getRentals();
    const displayRentals = (Rentals) => {
        const table = document.querySelector("#rentals");

        //console.log(data.RentalType[0].Type);
        //console.log(Rentals);

        Rentals.forEach(item => {

            const tr = document.createElement('tr');

            const td1 = document.createElement('td');
            td1.textContent = item.Type;
            tr.appendChild(td1);

            const td2 = document.createElement('td');
            td2.textContent = item.Max;
            tr.appendChild(td2);

            const td3 = document.createElement('td');
            td3.textContent = item.Res3hr;
            tr.appendChild(td3);

            const td4 = document.createElement('td');
            td4.textContent = item.Resfullday;
            tr.appendChild(td4);

            const td5 = document.createElement('td');
            td5.textContent = item.Wi3hr;
            tr.appendChild(td5);

            const td6 = document.createElement('td');
            td6.textContent = item.Wifullday;
            tr.appendChild(td6);

            table.appendChild(tr);

        });
    }
}


//code for responsive menu
const menu = document.querySelector('#menu');
const navigation = document.querySelector('.nav-bar');

menu.addEventListener('click', () => {
    navigation.classList.toggle('open');
    menu.classList.toggle('open');
});

//code for dark/light mode
const modeButton = document.querySelector("#mode");
const body = document.querySelector("body");

modeButton.addEventListener("click", function () {
    if (modeButton.textContent.includes("🌙")) {
        modeButton.textContent = "☀️";
        mode.setAttribute("title", "Switch to light mode");
        document.querySelector("link[href='styles/main.css']").href = "styles/main-dark.css";

    } else {
        modeButton.textContent = "🌙";
        mode.setAttribute("title", "Switch to dark mode");
        document.querySelector("link[href='styles/main-dark.css']").href = "styles/main.css";

    }
});

//code for weather and forecast
async function getCurrentWeather() {
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat=20.4255199&lon=-87.0284159&tz=-06&appid=4381b2da6ac807913d2efec6ef1c1d4f&units=metric';
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayCurrentWeather(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}
async function getForecast() {
    const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=20.4255199&lon=-87.0284159&tz=-06&appid=4381b2da6ac807913d2efec6ef1c1d4f&units=metric';
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayForecast(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}


function displayCurrentWeather(data) {
    //console.log();

    const weatherAd = document.querySelector('.weather-ad');
    if (filename == 'index.html') {
        weatherAd.style.display = "block";
        const tempMax = data.main['temp_max'];
        const weatherAdP = document.querySelector('.weather-ad p');
        weatherAdP.textContent = `Cozumel's high temperature for today is ${tempMax}°C`;
        const btnClose = document.querySelector('.close-weather-ad');
        btnClose.addEventListener("click", function () {
            weatherAd.style.display = "none";
            btnClose.setAttribute("title", "Click to close");
        });
    }
    else {
        weatherAd.style.display = "none";
    }
    const weatherDiv = document.querySelector('.local-weather');
    const currentTemp = document.createElement('p');
    const image = document.createElement('img');
    const element = data;
    let desc = `${element.weather[0].description} | humidity: ${element.main['humidity']}% `;
    const iconsrc = `https://openweathermap.org/img/w/${element.weather[0].icon}.png`;
    image.setAttribute('src', iconsrc);
    image.setAttribute('alt', element.weather[0].description);
    currentTemp.innerHTML = `Temp: ${element.main.temp}&deg;C | ${desc.toUpperCase()} <br>`;

    currentTemp.appendChild(image);
    weatherDiv.appendChild(currentTemp);

}
function displayForecast(data) {

    //console.log(data);
    const forecastDiv = document.querySelector('.local-forecast');
    const forecastTemp = document.createElement('p');
    const forecastImage = document.createElement('img');
    const forecastElement = data.list[7];

    //console.log(); // testing only
    //console.log(new Date(element.dt));
    //console.log(element.dt_txt); // testing only
    let forecastDesc = `${forecastElement.weather[0].description} | humidity: ${forecastElement.main['humidity']}% `;
    const forecastIconsrc = `https://openweathermap.org/img/w/${forecastElement.weather[0].icon}.png`;
    forecastImage.setAttribute('src', forecastIconsrc);
    forecastImage.setAttribute('alt', forecastElement.weather[0].description);
    var options = { weekday: 'long' };
    forecastTemp.innerHTML = new Date(forecastElement.dt_txt).toLocaleDateString("en-US", options) + ` | Temp: ${forecastElement.main.temp}&deg;C ${forecastDesc.toUpperCase()} <br>`;

    forecastTemp.appendChild(forecastImage);
    forecastDiv.appendChild(forecastTemp);

}
getCurrentWeather();
getForecast();


