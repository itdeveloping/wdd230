const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');



async function apiFetch() {
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat=23.73790582926228&lon=-99.1365379181217&appid=4381b2da6ac807913d2efec6ef1c1d4f&units=metric';
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            //console.log(data); // testing only
            displayResults(data); // uncomment when ready
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}
function displayResults(data) {
    //console.log(data.weather[0].description);

    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', data.weather);
    captionDesc.textContent = `${desc.toUpperCase()}`;
}
apiFetch();


