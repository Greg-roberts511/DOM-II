// Your code goes here

//1
let busPic = document.querySelector(".intro img");

busPic.addEventListener("mouseenter", (e) => {
  busPic.style.transform = "scale(2.5)";
  busPic.style.transition = "transform 1s";
});

//2
busPic.addEventListener("mouseleave", (e) => {
  busPic.style.transform = "scale(1)";
  busPic.style.transition = "transform 1s";
});

//3
let nav = document.querySelector(".main-navigation");

nav.addEventListener("click", (e) => {
  nav.style.backgroundColor = "grey";
});

//4
nav.addEventListener("dblclick", (e) => {
  nav.style.backgroundColor = "red";
});

nav.addEventListener("mouseleave", (e) => {
  nav.style.backgroundColor = "white";
});

//5
let contentBody = document.querySelector(".content-destination");

contentBody.addEventListener("contextmenu", (e) => {
  contentBody.style.backgroundColor = "blue";
  e.preventDefault();
});

contentBody.addEventListener("mouseleave", (e) => {
  contentBody.style.backgroundColor = "white";
});

//6
let body = document.querySelector("body");

body.addEventListener("auxclick", (e) => {
  contentBody.style.backgroundColor = "pink";
});

//7
body.addEventListener("keydown", (e) => {
  console.log(e.code);
});

//8
