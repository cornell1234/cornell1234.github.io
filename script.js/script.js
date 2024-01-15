document.addEventListener("DOMContentLoaded", function (){
    const icon = document.querySelector(".icon");
    const navList = document.querySelector("nav ul");

    //Toggle the navigation menu when the hamburger icon is clicked
    icon.addEventListener("click", function () {
        navList.classList.toggle("show");
    });
});

function openForm() {
    document.getElementById("contactForm").style.display = "block";
}