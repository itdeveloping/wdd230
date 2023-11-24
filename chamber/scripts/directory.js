const baseURL = "data/members.json";

async function getMembers() {
  const response = await fetch(baseURL);
  const data = await response.json();
  displayMembers(data.companies);
}
getMembers();

function displayMembers(data) {
  const directory = document.querySelector(".directory");
  data.forEach((member) => {
    const div = document.createElement("div");
    const img = document.createElement("img");
    const companyNameh2 = document.createElement("h2");
    const companyAddressp = document.createElement("p");
    const companyPhoneNumberp = document.createElement("p");
    const companyPhoneNumbera = document.createElement("a");
    const companyWebSitep = document.createElement("p");
    const companyWebSitea = document.createElement("a");
    const companyMapsURLp = document.createElement("p");
    const companyMapsURLa = document.createElement("a");

    companyNameh2.textContent = member.name;
    companyAddressp.textContent = member.address;
    div.classList.add("directoryDiv");

    img.setAttribute("src", member.image);
    img.setAttribute("alt", `Image of ${member.name}`);
    img.setAttribute("loading", "lazy");
    img.setAttribute("width", "290");
    img.setAttribute("height", "176");
    img.classList.add("fadeIn");

    companyPhoneNumbera.setAttribute("href", `tel:${member.phoneNumber}`);
    companyPhoneNumbera.textContent = member.phoneNumber;
    companyPhoneNumbera.setAttribute("target", "_blank");
    companyPhoneNumbera.setAttribute(
      "title",
      `Click here to call ${member.name}`
    );
    companyPhoneNumberp.textContent = "Phone number: ";
    companyPhoneNumberp.appendChild(companyPhoneNumbera);

    companyWebSitea.setAttribute("href", member.webSite);
    companyWebSitea.textContent = member.webSite;
    companyWebSitea.setAttribute(
      "title",
      `Click here to visit ${member.name} web site`
    );
    companyWebSitea.setAttribute("target", "_blank");
    companyWebSitep.textContent = "Website: ";
    companyWebSitep.appendChild(companyWebSitea);

    companyMapsURLa.setAttribute("href", member.mapsURL);
    companyMapsURLa.textContent = "Google Maps";
    companyMapsURLa.setAttribute(
      "title",
      `Click here to see ${member.name} location on Google Maps`
    );
    companyMapsURLa.setAttribute("target", "_blank");
    companyMapsURLp.textContent = "See location 🗺️ on ";
    companyMapsURLp.appendChild(companyMapsURLa);

    div.appendChild(companyNameh2);
    div.appendChild(img);
    div.appendChild(companyAddressp);
    div.appendChild(companyPhoneNumberp);
    div.appendChild(companyWebSitep);
    div.appendChild(companyMapsURLp);
    directory.appendChild(div);
  });
}
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
  // example using arrow function
  display.classList.add("grid");
  display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
  display.classList.add("list");
  display.classList.remove("grid");
}
