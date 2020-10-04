// Your code goes here

let busPic = document.querySelector(".intro img");

//1
busPic.addEventListener("mouseenter", (e) => {
  busPic.style.transform = "scale(2.5)";
  busPic.style.transition = "transform 1s";
});

//2
busPic.addEventListener("mouseleave", (e) => {
  busPic.style.transform = "scale(1)";
  busPic.style.transition = "transform 1s";
});

let nav = document.querySelector(".main-navigation");
//3

nav.addEventListener("click", (e) => {
  nav.style.backgroundColor = "grey";
});

//4
nav.addEventListener("dblclick", (e) => {
  nav.style.backgroundColor = "red";
});

//5
nav.addEventListener("mouseleave", (e) => {
  nav.style.backgroundColor = "white";
});
