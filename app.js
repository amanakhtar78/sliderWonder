let items = document.querySelectorAll(".slider .list .item");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let thumbnail = document.querySelectorAll(".thumbnail .item");

let countItem = items.length;
let itemActive = 0;

next.onclick = function () {
  itemActive = itemActive + 1;
  if (itemActive >= countItem) {
    itemActive = 0;
  }
  showSlider();
};
prev.onclick = function () {
  itemActive = itemActive - 1;
  if (itemActive < 0) {
    itemActive = countItem - 1;
  }
  showSlider();
};

//auto run
let refreshINterval = setInterval(() => {
  next.click();
}, 3000);
function showSlider() {
  //remove old style of current
  let itemActiveOld = document.querySelector(".slider .list .item.active");
  let thumbNailOld = document.querySelector(".thumbnail .item.active");
  itemActiveOld.classList.remove("active");
  thumbNailOld.classList.remove("active");

  //active new item
  items[itemActive].classList.add("active");
  thumbnail[itemActive].classList.add("active");

  //clear interval
  clearInterval(refreshINterval);
  refreshINterval = setInterval(() => {
    next.click();
  }, 5000);
}

//click on thumbnail
thumbnail.forEach((thumbnail, index) => {
  thumbnail.addEventListener("click", () => {
    itemActive = index;
    showSlider();
  });
});
