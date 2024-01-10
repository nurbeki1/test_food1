const menu = document.querySelector("#menu");
const btn = document.querySelector("#btn_burger");
const btnImg = document.querySelector("#burgerImg");

menu.addEventListener("click", function () {
  console.log("asdfa");

  if (menu.classList.toggle("open")) {
    btnImg.src = "photos/close.png";
  } else {
    btnImg.src = "photos/open.png";
  }
});

function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add("element-show");
    } else {
      change.target.classList.remove("element-show");
    }
  });
}

let options = {
  threshold: [0.5],
};
let observer = new IntersectionObserver(onEntry, options);
let element1 = document.querySelectorAll(".text_b2");
let card1 = document.querySelectorAll(".card1");
let card2 = document.querySelectorAll(".card2");
let card3 = document.querySelectorAll(".card3");

let card1_5 = document.querySelectorAll(".card_5_1");
let card2_5 = document.querySelectorAll(".card_5_2");
let card3_5 = document.querySelectorAll(".card_5_3");
for (let elm of element1) {
  observer.observe(elm);
}
for (let elm of card1) {
  observer.observe(elm);
}

for (let elm of card2) {
  observer.observe(elm);
}
for (let elm of card3) {
  observer.observe(elm);
}
for (let elm of card1_5) {
  observer.observe(elm);
}
for (let elm of card2_5) {
  observer.observe(elm);
}
for (let elm of card3_5) {
  observer.observe(elm);
}
