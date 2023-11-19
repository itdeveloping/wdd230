//const currentTemp = document.querySelector('#current-temp');
//const weatherIcon = document.querySelector('#weather-icon');

async function apiFetch() {
    const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=23.73790582926228&lon=-99.1365379181217&date=2023-04-17&tz=-06&exclude=current,minutely,hourly&appid=4381b2da6ac807913d2efec6ef1c1d4f&units=metric';
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}
function displayResults(data) {
    //console.log(data);
    const weatherDiv = document.querySelector('.weatherAPI');
    for (let index = 0; index < 32; index += 8) {
        const div = document.createElement('div');
        const currentTemp = document.createElement('p');
        const image = document.createElement('img');
        const element = data.list[index];
        /*
        <p>
        <img id="weather-icon" src="" alt=""><span id="current-temp"></span>
        </p>
        */
        console.log(); // testing only
        //console.log(new Date(element.dt));
        //console.log(element.dt_txt); // testing only
        let desc = element.weather[0].description;
        const iconsrc = `https://openweathermap.org/img/w/${element.weather[0].icon}.png`;
        image.setAttribute('src', iconsrc);
        image.setAttribute('alt', element.weather);
        currentTemp.innerHTML = new Date(element.dt_txt).toDateString() + ` / ${element.main.temp}&deg;C - ${desc.toUpperCase()}`;

        div.appendChild(currentTemp);
        div.appendChild(image);
        weatherDiv.appendChild(div);
    }


    //console.log(data.weather[0].description);


}
apiFetch();


