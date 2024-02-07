const refs = {
  body: document.querySelector("body"),
  sidebarBtn: document.querySelector(".sidebar__btn"),
  sidebar: document.querySelector(".sidebar"),
};

refs.sidebar.addEventListener("click", (e) => {
  if (e.target.nodeName === "BUTTON" || e.target.nodeName === "A") {
    toggleSidebarClasses();
  }
});

function toggleSidebarClasses() {
  refs.sidebar.classList.toggle("sidebar--closed");
  refs.sidebarBtn.classList.toggle("sidebar__btn--cancil");
  if (refs.sidebar.classList.contains("sidebar--closed")) {
    window.removeEventListener("click", onWindowClick);
  } else {
    window.addEventListener("click", onWindowClick);
  }
}

function onWindowClick(e) {
  if (!e.target.closest(".sidebar")) {
    toggleSidebarClasses();
  }
}
