// Your code goes here

let busPic = document.querySelector(".intro img");

//1
busPic.addEventListener("mouseenter", (e) => {
  busPic.style.transform = "scale(2)";
  busPic.style.transition = "transform 1s";
});

//2
busPic.addEventListener("mouseleave", (e) => {
  busPic.style.transform = "scale(1)";
  busPic.style.transition = "transform 1s";
});

let nav =