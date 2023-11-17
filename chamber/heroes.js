
const baseURL = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

async function getMembers() {
    const response = await fetch(baseURL);
    const data = await response.json();
    displayMembers(data);
}
getMembers();

function displayMembers(data) {
    console.log(data.members[2].powers[1]);

};
