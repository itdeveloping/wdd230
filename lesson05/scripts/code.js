const favChap = document.querySelector("#favChap");
const addButton = document.querySelector("button");
const list = document.querySelector("#list");

favChap.focus();
favChap.addEventListener("click", function () {
    this.value = "";
});
addButton.addEventListener('click', function () {
    if (favChap.value.trim() != '') {
        const li = document.createElement("li");
        const linkButton = document.createElement("input");
        const deleteButton = document.createElement("button");
        const buttonDiv = document.createElement("div");

        buttonDiv.classList.add("button");

        linkButton.setAttribute("type", "button");
        linkButton.setAttribute("target", "_blank");
        linkButton.value = "🔍";
        deleteButton.textContent = '❌';
        deleteButton.classList.add("button");
        li.textContent = favChap.value;

        let findText = li.textContent.replace(" ", "+");
        let href = "https://www.churchofjesuschrist.org/search?lang=ase&query=" + findText + "&facet=scriptures&page=1";
        linkButton.setAttribute("onCLick", "window.open('" + href + "','_blank')");

        li.appendChild(buttonDiv);
        buttonDiv.appendChild(linkButton);
        buttonDiv.append(deleteButton);
        list.appendChild(li);
        favChap.value = '';

        deleteButton.addEventListener("click", function () {
            list.removeChild(li);
            favChap.focus();
        })
    }
    else {
        alert("Favorite chapter is empty, please provide a book name and chapter.");
        favChap.value = '';
        favChap.focus();
    }



});
