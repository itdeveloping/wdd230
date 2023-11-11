const baseURL = "https://itdeveloping.github.io/wdd230/";
const linksURL = "https://itdeveloping.github.io/wdd230/data/links.json";
//const linksURL = "data/links.json"; //for local test
async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    //console.log(data);
    displayLinks(data.lessons);

}

getLinks();
const displayLinks = (links) => {
    const LinksList = document.querySelector('#LinksList');

    links.forEach(link => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.setAttribute('href', link.links[0].url); //value for href
        a.setAttribute('target', link.links[0].target); //window target  
        a.textContent = `Lesson ${link.lesson} : ${link.links[0].title}`;//text of the anchor
        li.appendChild(a);
        LinksList.appendChild(li);
    });
}