const favchap = document.querySelector("#favchap");
console.log(favchap.value);
const button = document.querySelector("button");
console.log(button.innerHTML);
const list = document.querySelector("#list");
favchap.focus();
favchap.addEventListener('click', function () {
    this.value = '';
});
button.addEventListener('click', function () {
    if (favchap.value.trim() != '') {
        const newli = document.createElement("li");
        const deleteButton = document.createElement("button");
        deleteButton.textContent = '❌';
        newli.textContent = favchap.value;
        newli.append(deleteButton);
        list.appendChild(newli);
        favchap.value = '';
        deleteButton.addEventListener("click", function () {
            list.removeChild(newli);
            favchap.focus();

        })
    }
    else {
        alert("Favorite chapter is empty, please provide a book name and chapter.");
        favchap.value = '';
        favchap.focus();
    }



});
