"use strict";

/* ====== Define JS Constants ====== */
const sidebarToggler = document.getElementById("docs-sidebar-toggler");
const sidebar = document.getElementById("docs-sidebar");
const sidebarLinks = document.querySelectorAll("#docs-sidebar .scrollto");

/* ===== Responsive Sidebar ====== */

window.onload = function () {
  responsiveSidebar();
  let target = "introduction";
  setPreviosNextfun(target);
};

window.onresize = function () {
  responsiveSidebar();
};

function responsiveSidebar() {
  let w = window.innerWidth;
  if (w >= 1200) {
    // if larger
    sidebar.classList.remove("sidebar-hidden");
    sidebar.classList.add("sidebar-visible");
  } else {
    // if smaller
    sidebar.classList.remove("sidebar-visible");
    sidebar.classList.add("sidebar-hidden");
  }
}

sidebarToggler.addEventListener("click", () => {
  if (sidebar.classList.contains("sidebar-visible")) {
    sidebar.classList.remove("sidebar-visible");
    sidebar.classList.add("sidebar-hidden");
  } else {
    sidebar.classList.remove("sidebar-hidden");
    sidebar.classList.add("sidebar-visible");
  }
});

/* ===== Smooth scrolling ====== */
/*  Note: You need to include smoothscroll.min.js (smooth scroll behavior polyfill) on the page to cover some browsers */
/* Ref: https://github.com/iamdustan/smoothscroll */

sidebarLinks.forEach((sidebarLink) => {
  sidebarLink.addEventListener("click", (e) => {
    e.preventDefault();
	if(!sidebarLink.parentElement.id){
		return true
	}
    var target = sidebarLink.getAttribute("href").replace("#", "");
    setPreviosNextfun(target);

    //Collapse sidebar after clicking
    if (
      sidebar.classList.contains("sidebar-visible") &&
      window.innerWidth < 1200
    ) {
      sidebar.classList.remove("sidebar-visible");
      sidebar.classList.add("sidebar-hidden");
    }
  });
});

/* ===== Gumshoe SrollSpy ===== */
/* Ref: https://github.com/cferdinandi/gumshoe  */
// Initialize Gumshoe
var spy = new Gumshoe("#docs-nav a", {
  offset: 69, //sticky header height
});

/* ====== SimpleLightbox Plugin ======= */
/*  Ref: https://github.com/andreknieriem/simplelightbox */

var lightbox = new SimpleLightbox(".simplelightbox-gallery a", {
  /* options */
});

function setData(target) {
  $("#main-content").load(`${target}.html`);
  $(".active").removeClass("active");
  $(`#${target}`).addClass("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function setPreviosAndNext(pre, next, isFirst, isLast) {
  const previosBtn = document.getElementById("previous-btn");
  const nextBtn = document.getElementById("next-btn");
  previosBtn.onclick = () => {
    setPreviosNextfun(pre);
  };
  nextBtn.onclick = () => {
    setPreviosNextfun(next);
  };
  if (isFirst) {
    previosBtn.style.visibility = "hidden";
  } else {
    previosBtn.style.visibility = "visible";
  }
  if (isLast) {
    nextBtn.style.visibility = "hidden";
  } else {
    nextBtn.style.visibility = "visible";
  }
}

function setPreviosNextfun(target) {
  let nextsbiling = document.getElementById(target).nextElementSibling;
  let prviossbiling = document.getElementById(target).previousElementSibling;
  let nextClasslist = Array.from(nextsbiling.classList);
  let previousClasslist = Array.from(prviossbiling.classList);
  if (nextClasslist.includes("section-title")) {
    nextsbiling = nextsbiling.nextElementSibling.id;
  } else {
    nextsbiling = nextsbiling.id;
  }
  if (
    previousClasslist.includes("section-title") &&
    target !== "introduction"
  ) {
    prviossbiling = prviossbiling.previousElementSibling.id;
  } else {
    prviossbiling = prviossbiling.id;
  }
  if (target === "introduction") {
    setPreviosAndNext(target, nextsbiling, true);
  } else if (!nextsbiling) {
    setPreviosAndNext(prviossbiling, target, false, true);
  } else {
    setPreviosAndNext(prviossbiling, nextsbiling);
  }

  setData(target);
}
