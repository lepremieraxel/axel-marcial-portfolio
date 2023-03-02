const header = document.querySelector("header");
const logo = header.children[0].children[0];
const title = header.children[0].children[1];

const nav = document.querySelector("header nav");
const tabAbout = nav.children[0];
const tabWorks = nav.children[1];
const tabContact = nav.children[2];

tabAbout.addEventListener("click", () => {
  tabAbout.classList.add("active-nav");
  tabWorks.classList.remove("active-nav");
  tabContact.classList.remove("active-nav");
});
tabWorks.addEventListener("click", () => {
  tabAbout.classList.remove("active-nav");
  tabWorks.classList.add("active-nav");
  tabContact.classList.remove("active-nav");
});
tabContact.addEventListener("click", () => {
  tabAbout.classList.remove("active-nav");
  tabWorks.classList.remove("active-nav");
  tabContact.classList.add("active-nav");
});

window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  if (window.scrollY >= 50) {
    header.style.padding = "20px 180px";
    header.style.boxShadow = "0 9px 30px rgba(0,0,0,0.3)";
    logo.style.width = "75px";
    title.style.fontSize = "2.5em";
  } if(window.scrollY <= 1) {
    header.style.padding = "50px 180px";
    header.style.boxShadow = "none";
    logo.style.width = "150px";
    title.style.fontSize = "3em";
  }
  if (window.scrollY < 350) {
    tabAbout.classList.add("active-nav");
    tabWorks.classList.remove("active-nav");
    tabContact.classList.remove("active-nav");
  }
  if (window.scrollY > 350) {
    tabAbout.classList.remove("active-nav");
    tabWorks.classList.add("active-nav");
    tabContact.classList.remove("active-nav");
  }
  if (window.scrollY > 1500) {
    tabAbout.classList.remove("active-nav");
    tabWorks.classList.remove("active-nav");
    tabContact.classList.add("active-nav");
  }
});
