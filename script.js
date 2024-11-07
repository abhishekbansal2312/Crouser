let images = [
  "https://t3.ftcdn.net/jpg/10/06/04/34/240_F_1006043472_ejmXZSScE8Vx4g0aAeQfKfhe6OZw7eeP.jpg",
  "https://t4.ftcdn.net/jpg/10/29/44/27/240_F_1029442722_JclgtOtqZKL4mJC1hyFZ6xqHgQsd5idx.jpg",
  "https://t3.ftcdn.net/jpg/10/54/94/60/240_F_1054946074_z3gUTfmku66s4AtbLVvVCt0CvGzUyUka.jpg",
  "https://t3.ftcdn.net/jpg/09/60/31/78/240_F_960317892_TZ2Dy4STGjiqzvBaCW7ziIhiWR3eTVsC.jpg",
];

let image = document.querySelector(".image");
let left = document.querySelector(".left");
let right = document.querySelector(".right");
let dots = document.querySelector(".dots");
let index = 0;

image.src = images[index];
function updateImageAndDots() {
  image.src = images[index];
  updateDots();
}

function updateDots() {
  dots.querySelectorAll(".dot").forEach((dot, i) => {
    dot.style.width = i === index ? "30px" : "15px";
    dot.style.backgroundColor = i === index ? "black" : "grey";
  });
}

left.addEventListener("click", () => {
  index = (index - 1 + images.length) % images.length;
  updateImageAndDots();
});

right.addEventListener("click", () => {
  index = (index + 1) % images.length;
  updateImageAndDots();
});

for (let i = 0; i < images.length; i++) {
  let dot = document.createElement("div");
  dot.classList.add("dot");
  dot.style.height = "6px";
  dot.style.width = "30px";
  dot.style.backgroundColor = "grey";
  dot.style.margin = "0 2px";
  dot.style.cursor = "pointer";
  dot.style.transition = "width 0.3s";

  dot.addEventListener("click", () => {
    index = i;
    updateImageAndDots();
  });

  dots.appendChild(dot);
}

updateDots();
