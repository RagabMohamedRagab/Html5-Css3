let Element = document.getElementsByClassName("Change");
for (var i of Element) {
  i.classList.add("input.Change::placeholder");
}
let Header = document.getElementsByClassName("container_Header")[0],
  Links = document.getElementsByClassName("conatiner_Links")[0].children,
  Head = document.getElementsByClassName("container_head")[0];
console.log(Links);
window.onscroll = function () {
  if (this.scrollY > 50) {
    Header.style.backgroundColor = "#fff";
    Header.style.borderBottom = "1px solid  rgb(190, 189, 189)";
    Head.style.color = "#3377AA";
    for (var item of Links) {
      item.firstElementChild.style.color = "#3377AA";
    }
  } else if (this.scrollY < 50) {
    Header.style.backgroundColor = "transparent";
    Header.style.borderBottom = "none";
    Head.style.color = "#fff";
    for (var item of Links) {
      item.firstElementChild.style.color = "#fff";
    }
  }
};
for (var action of Links) {
  action.onmouseleave = function () {
    this.children[0].style.color = "#3377AA";
  };
}
for (var action of Links) {
  action.onmouseenter = function () {
    this.children[0].style.color = "#fff";
  };
}
