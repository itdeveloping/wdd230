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

const menu = document.querySelector('#menu');
const navigation = document.querySelector('.nav-bar');

menu.addEventListener('click', () => {
    navigation.classList.toggle('open');
    menu.classList.toggle('open');
});


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