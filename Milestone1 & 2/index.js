var Show_Hide_Skills = document.getElementById("btn");
var Skills = document.getElementById("Skills");
console.dir(Show_Hide_Skills);
Show_Hide_Skills.addEventListener("click", function () {
    if (Skills.style.display === "none") {
        Skills.style.display = "block";
        Show_Hide_Skills.innerHTML = "Hide Skills";
    }
    else {
        Skills.style.display = "none";
        Show_Hide_Skills.innerHTML = "Show Skills";
    }
});
