const baseURL = "https://itdeveloping.github.io/wdd230/";
const linksURL = "https://itdeveloping.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
    displayLinks(data);

}

getLinks();
const displayLinks = (links) => {
    links.forEach(link => {
        console.log(link.lessons);
    });
}