// works_List slide
import data from "./items.js";

const left_handleEl = document.getElementsByClassName("left_handle")[0];
const right_handleEl = document.getElementsByClassName("right_handle")[0];
const slateEl = document.getElementsByClassName("slate")[0];
const itemEls = document.querySelectorAll(".item");

// screen에 보여 주기
let item_imgEl = document.getElementsByClassName("item_img")[0];
let detailsEl = document.getElementsByClassName("works_item_details")[0];
let titleEl = document.getElementById("details_title");
let content11 = document.getElementById("contents1");
let content22 = document.getElementById("contents2");
let githubEl = document.getElementById("github");
let siteEl = document.getElementById("site");
itemEls.forEach((e) => {
  e.addEventListener("click", () => {
    let item = data.data.find((a) => a.name == e.children[0].alt);
    item_imgEl.innerHTML = `<img
    src="${item.img}"
    alt="${item.title}"
  />`;
    titleEl.innerHTML = `${item.title}`;
    content11.innerHTML = "";
    for (let i = 0; i < item.detales.length; i++) {
      let liEl = document.createElement("li");
      liEl.innerHTML = `${item.detales[i]}`;
      content11.append(liEl);
    }
    content22.innerHTML = "";
    for (let i = 0; i < item.future.length; i++) {
      let liEl = document.createElement("li");
      liEl.innerHTML = `${item.future[i]}`;
      content22.append(liEl);
    }
    githubEl.setAttribute("href", `${item.github}`);
    siteEl.innerHTML = `${item.siteName}`;
    siteEl.setAttribute("href", `${item.site}`);
  });
});

let winSize = window.innerWidth;
window.addEventListener("resize", () => {
  winSize = window.innerWidth;
  if (winSize > 767) {
    item_imgEl.style.display = "flex";
    num = 0;
    slateEl.style.left = "0";
  } else {
    item_imgEl.style.display = "none";
    num = 0;
    slateEl.style.left = "0";
  }
});

let img_btnEl = document.getElementById("img_view");
let num = 0;
img_btnEl.addEventListener("click", () => {
  if (winSize < 768) {
    item_imgEl.style.display = "flex";
  }
});

item_imgEl.addEventListener("click", () => {
  if (winSize < 768) {
    item_imgEl.style.display = "none";
  }
});

left_handleEl.addEventListener("click", () => {
  if (winSize < 768) {
    if (num > -1) {
      alert("처음입니다.");
    } else {
      num = num + 150;
      slateEl.style.transform = `translateX(${num}px)`;
    }
  } else {
    if (num > -1) {
      alert("처음입니다.");
    } else {
      num = num + 465;
      slateEl.style.transform = `translateX(${num}px)`;
    }
  }
});

right_handleEl.addEventListener("click", () => {
  if (winSize < 768) {
    if (num < -((itemEls.length - 3) * 150)) {
      alert("마지막입니다.");
    } else {
      num = num - 150;
      slateEl.style.transform = `translateX(${num}px)`;
    }
  } else {
    if (num < -((itemEls.length - 3) * 465)) {
      alert("마지막입니다.");
    } else {
      num = num - 465;
      slateEl.style.transform = `translateX(${num}px)`;
    }
  }
});

siteEl.addEventListener("click", (e) => {
  if(e.target.innerText=="다운로드"){
    if (window.confirm("다운로드하시겠습니까?")) {
  } else {
    e.preventDefault();
    window.location.reload();
  }
  }  
});
