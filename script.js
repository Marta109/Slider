const slides = document.querySelectorAll(".slider .slide");
const arrows = document.querySelectorAll(".arrow");
const controllers = document.querySelectorAll(".controller");
const controllersLabel = document.querySelectorAll(
  ".sliderControllerWrapper label"
);

let activeIndex = Math.floor(slides.length / 2);

slides[activeIndex].classList.add("active");
controllers[activeIndex].checked = true;

const removeActiveClass = () => {
  let activeSlide = document.querySelector(".slider .slide.active");
  if (activeSlide) {
    const id = activeSlide.id;
    activeSlide.classList.remove("active");
    controllers[id].checked = false;
    return +id;
  }
};

slides.forEach((slide) => {
  slide.addEventListener("click", (e) => {
    removeActiveClass();
    e.target.classList.add("active");
    const id = e.target.id;
    controllers[id].checked = true;
  });
});

arrows.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    const id = removeActiveClass();
    if (e.target.classList.contains("arrow-right")) {
      if (id + 1 <= slides.length - 1) {
        let index = id + 1;
        slides[index].classList.add("active");
        controllers[index].checked = true;
      } else {
        slides[0].classList.add("active");
        controllers[0].checked = true;
      }
    } else {
      if (id - 1 >= 0) {
        let index = id - 1;
        slides[index].classList.add("active");
        controllers[index].checked = true;
      } else {
        slides[slides.length - 1].classList.add("active");
        controllers[slides.length - 1].checked = true;
      }
    }
  });
});

controllersLabel.forEach((label) => {
  label.addEventListener("click", (e) => {
    removeActiveClass();
    const id = e.target.getAttribute("for");
    slides[id].classList.add("active");
    controllers[id].checked = true;
  });
});

document.addEventListener("keydown", (event) => {
  const id = removeActiveClass();
  if (event.key === "ArrowRight") {
    if (id + 1 <= slides.length - 1) {
      let index = id + 1;
      slides[index].classList.add("active");
      controllers[index].checked = true;
    } else {
      slides[0].classList.add("active");
      controllers[0].checked = true;
    }
  } else if (event.key === "ArrowLeft") {
    if (id - 1 >= 0) {
      let index = id - 1;
      slides[index].classList.add("active");
      controllers[index].checked = true;
    } else {
      slides[slides.length - 1].classList.add("active");
      controllers[slides.length - 1].checked = true;
    }
  }
});
