document.addEventListener("DOMContentLoaded", function (){
    const icon = document.querySelector(".icon");
    const navList = document.querySelector("nav ul");

    //Toggle the navigation menu wen the hamburger icon is clicked
    icon.addEventListener("click", function () {
        navList.classList.toggle("show");
    });
});