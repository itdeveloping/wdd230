const visitPara = document.querySelector("#visitNumber");
if (localStorage.getItem("homePageVisit")) {
    let visit = parseInt(localStorage.getItem("homePageVisit"))
    visit += 1;
    visitPara.innerHTML = "<strong>Welcome back! <br>This is your visit number " + visit + "</strong>";
    localStorage.setItem("homePageVisit", visit);
}
else {
    visitPara.innerHTML = "<strong>Welcome!  <br>This is your first visit.</strong>";
    localStorage.setItem("homePageVisit", 1);
}
