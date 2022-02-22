// window.onload = ()=> {
//     let frameElement = document.querySelector(".comp-display-ifram");
//     let doc = frameElement.contentDocument;
//     doc.body.innerHTML = doc.body.innerHTML +'<style>body::-webkit-scrollbar{width:0;height:0;}</style>';
//   }
let frameElement = document.querySelector(".comp-display-ifram");
let doc = frameElement.contentDocument;

const sideBar = document.querySelector(".nav-main-menu-side-bar")
const menuBtn = document.querySelector(".nav-main-menu")
const mainSpace = document.querySelector(".main-content-space")
const sidebarClose = document.querySelector(".nav-side-bar-close")

menuBtn.addEventListener("click", () => {
    sideBar.style.display = "block";
    mainSpace.style.filter = "opacity(40%)";
})
sidebarClose.addEventListener("click", () => {
    sideBar.style.display = "none";
    mainSpace.style.filter = "opacity(100%)";
});

const navCompItem = document.querySelector(".nav-comp-item");
const navComp = document.querySelector(".nav-comp-head");
const navCompIcn = document.querySelector(".nav-comp-icn");
const navCompClose = document.querySelectorAll(".nav-comp-list-li");

navComp.addEventListener("click", () => {
    if (navCompItem.style.display === "block") {
        navComp.style.color = "black"
        navCompIcn.innerText = "expand_more";
        navCompItem.style.display = "none";
    } else {
        navComp.style.color = "var(--cta1)"
        navCompIcn.innerText = "expand_less";
        navCompItem.style.display = "block";
    }
});

if (window.innerWidth <= 768) {
    navCompClose.forEach((close) => {
        close.addEventListener("click", () => {
            let link = close.dataset.html;
            frameElement.src=link;
            let docc=frameElement.contentDocument
            docc.body.innerHTML = docc.body.innerHTML + '<style>body::-webkit-scrollbar{width:0;height:0;}</style>';
            console.log(docc);
            navCompItem.style.display = "none";
            navComp.style.color = "black"
            navCompIcn.innerText = "expand_more";

        })
    })
}
doc.body.innerHTML = doc.body.innerHTML + '<style>body::-webkit-scrollbar{width:0;height:0;}</style>';