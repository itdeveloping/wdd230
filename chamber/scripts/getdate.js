//scripts for index.html
const options = {
    year: "numeric"
};

let actualYear = new Date().toLocaleDateString("en-US", options);
document.querySelector('.actualYear').innerHTML = `${actualYear}`;

let lastModified = document.lastModified
document.querySelector('.lasModified').innerHTML = `Last modification: ${lastModified}`;


/*If this is the user's first visit, display "Welcome! Let us know if you have any questions.".
If the amount of time between visits is less than a day, display "Back so soon! Awesome!".
Otherwise, display the number of days in a message like this: "You last visited n days ago.", where n is the actual, whole number of days between visits. If the number of days is 1, then change the language to "day" not "days". */

let latestVisit = document.querySelector("#latestVisit");
localStorage.setItem("lastVisit", Date.now())

if (!localStorage.getItem("firstVisit")) {
    latestVisit.textContent = "Welcome! Let us know if you have any questions!";
    localStorage.setItem("firstVisit", Date.now())
}
else {
    let firstVisit = localStorage.getItem("firstVisit");
    let lastVisit = localStorage.getItem("lastVisit");

    let interval = (lastVisit - firstVisit) / 24 / 60 / 60 / 1000;
    interval = Math.round(interval);


    if (interval < 1)
        latestVisit.textContent = "Back so soon! Awesome!";
    else {
        if (interval = 1)
            latestVisit.textContent = `You last visited ${interval} day ago.`;
        else
            latestVisit.textContent = `You last visited ${interval} days ago.`;
    }

}
