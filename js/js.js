/* ----- booking box ----- */

function openBookBox() {
  var bookBox = document.getElementById("bookBox");
  var openBtn = document.getElementById("openBook");

  if (bookBox.style.height != "400px") {
    bookBox.style.height = "400px";
    openBtn.innerHTML = "hide";
  } else {
    bookBox.style.height = "0";
    openBtn.innerHTML = "book now!";
  }
}

/* ----- newsletter card ----- */
function showName() {
  var printName = document.getElementById("nsName");
  var name = document.getElementById("inputName").value;
  printName.innerHTML = name;
}

function openNsCard() {
  var nsCard = document.getElementById("nsCard");
  var mainCon = document.getElementById("mainContainer");
  var nav = document.getElementById("navTop");
  var body = document.getElementsByTagName("body")[0];
  var html = document.getElementsByTagName("html")[0];

  nsCard.style.display = "block";
  mainCon.style.opacity = "0.2";
  html.style.overflow = "hidden";
  body.style.overflow = "hidden";
  nav.style.opacity = "0.2";

  showName();
}

function closeNsCard() {
  var nsCard = document.getElementById("nsCard");
  var mainCon = document.getElementById("mainContainer");
  var nav = document.getElementById("navTop");
  var body = document.getElementsByTagName("body")[0];
  var html = document.getElementsByTagName("html")[0];

  nsCard.style.display = "none";
  mainCon.style.opacity = "1";
  html.style.overflow = "auto";
  body.style.overflow = "auto";
  nav.style.opacity = "1";
}

/* ----- slider -----*/

var slideIndex = 1;
showSlides(slideIndex);

function plusSlide(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  var slides = document.getElementsByClassName("op-slide");
  var i;

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides[slideIndex - 1].style.display = "block";
  }
}

/* ----- hamburger -----*/
// function openHamburger() {
//   var hamburgerBtn = document.getElementById("hamburger");
//   var menu = document.getElementById("hamburgerMenu");

//   if(menu.style.height !== "180px") {
//     menu.style.height = "180px";
//   }
//   else {
//     menu.style.height = "0";
//   }
// }
const menuIcon = document.querySelector(".nav-icon");
const menuLinks = document.querySelector(".nav-links");
const nav = document.querySelector("nav");
// const introduction = document.querySelector('.introduction-box');
// const arrow = document.querySelector('.arrow-box');

let toggleMenu = () => {
  // introduction.classList.toggle('hide');
  // arrow.classList.toggle('hide');
  menuIcon.classList.toggle("open");
  menuLinks.classList.toggle("show-links");
  nav.classList.toggle("nav-collapse");
  bon.classList.toggle("bon-display");
  // $(".hotel").remove();
};

menuIcon.addEventListener("click", toggleMenu);
menuLinks.addEventListener("click", toggleMenu);
$(".nav-icon span").removeClass("white").addClass("black");

$(".nav-link").removeClass("white-font").addClass("black-font");
$(".nav-container .hotel-show").addClass("black-font");

$(window).scroll(function () {
  if ($(this).scrollTop() > 50) {
    $(".nav-container").addClass("grey");
    $(".nav-link").addClass("white-font").removeClass("black-font");
    $(".nav-container .hotel").css("color", "white");
    $(".icon a").css("color", "white");
    $(".nav-icon span").addClass("white").removeClass("black");
    $(".nav-container .hotel-show").css("color", "white");
    $(".hotel").show();
    $(".dropbtn").css("color", "white");
  } else {
    console.log("there");
    $(".nav-container").removeClass("grey");
    $(".nav-link").removeClass("white-font").addClass("black-font");
    $(".nav-container .hotel").css("color", "black");
    $(".nav-container .hotel-show").css("color", "black");
    $(".nav-icon span").removeClass("white").addClass("black");
    $(".icon a").css("color", "black");
    $(".dropbtn").css("color", "black");

    $(".hotel").show();
  }
});

// $(window).scroll(function() {
//   if ($(this).scrollTop() > 50) {
//       $( ".nav-links" ).addClass('grey');
//   } else {
//       console.log('there');
//       $( ".nav-links" ).removeClass('grey');
//   }
// });

// jQuery(document).ready(function($) {

// }
(function () {
  function Slideshow(element) {
    this.el = document.querySelector(element);
    this.init();
  }

  Slideshow.prototype = {
    init: function () {
      this.wrapper = this.el.querySelector(".slider-wrapper");
      this.slides = this.el.querySelectorAll(".slide");
      this.previous = this.el.querySelector(".slider-previous");
      this.next = this.el.querySelector(".slider-next");
      this.index = 0;
      this.total = this.slides.length;
      this.timer = null;

      this.action();
      this.stopStart();
    },
    _slideTo: function (slide) {
      var currentSlide = this.slides[slide];
      currentSlide.style.opacity = 1;

      for (var i = 0; i < this.slides.length; i++) {
        var slide = this.slides[i];
        if (slide !== currentSlide) {
          slide.style.opacity = 0;
        }
      }
    },
    action: function () {
      var self = this;
      self.timer = setInterval(function () {
        self.index++;
        if (self.index == self.slides.length) {
          self.index = 0;
        }
        self._slideTo(self.index);
      }, 9000);
    },
    stopStart: function () {
      var self = this;
      self.el.addEventListener(
        "mouseover",
        function () {
          clearInterval(self.timer);
          self.timer = null;
        },
        false
      );
      self.el.addEventListener(
        "mouseout",
        function () {
          self.action();
        },
        false
      );
    },
  };

  document.addEventListener("DOMContentLoaded", function () {
    var slider = new Slideshow("#main-slider");
  });
})();

//lesna chata
const slider = document.querySelector(".slider");
const sliderContent = document.querySelector(".item-wrapper");
const sliderItems = sliderContent.querySelectorAll("img");
const itemCount = sliderItems.length;
const prevBtn = document.querySelector("#previous");
const nextBtn = document.querySelector("#next");
const indicatorWrapper = document.querySelector(".indicator-wrapper");

let currentIndex = 0;

const handleButtonClick = (direction) => {
  if (direction === "left") {
    currentIndex++;

    if (currentIndex > itemCount - 1) {
      currentIndex = 0;
    }
  } else {
    currentIndex--;

    if (currentIndex < 0) {
      currentIndex = itemCount - 1;
    }
  }

  moveSlide();
  styleIndicator();
};

const handleIndicatorClick = (e) => {
  if (!e.target.classList.contains("indicator")) return;

  currentIndex = e.target.dataset.index;

  moveSlide();
  styleIndicator();
};

const initIndicators = () => {
  for (let i = 0; i < itemCount; i++) {
    const indicator = document.createElement("div");
    indicator.classList.add("indicator");
    indicator.dataset.index = i;
    indicatorWrapper.appendChild(indicator);
  }

  styleIndicator();
};

const styleIndicator = () => {
  const indicators = indicatorWrapper.querySelectorAll(".indicator");
  indicators.forEach((indicator) => indicator.classList.remove("current"));
  indicators[currentIndex].classList.add("current");
};

const moveSlide = () => {
  const sliderWidth = slider.clientWidth;
  sliderContent.style.transform = `translateX(-${
    currentIndex * sliderWidth
  }px)`;
};

const addEventListeners = () => {
  prevBtn.addEventListener("click", () => handleButtonClick("left"));
  nextBtn.addEventListener("click", () => handleButtonClick("right"));
  indicatorWrapper.addEventListener("click", handleIndicatorClick);
};

const init = () => {
  addEventListeners();
  initIndicators();
};

init();

//niedzwiedzia chata
var slider1 = document.querySelector(".slider1");
var sliderContent1 = document.querySelector(".item-wrapper1");
var sliderItems1 = sliderContent1.querySelectorAll("img");
var itemCount1 = sliderItems1.length;
var prevBtn1 = document.querySelector("#previous1");
var nextBtn1 = document.querySelector("#next1");
var indicatorWrapper1 = document.querySelector(".indicator-wrapper1");

let currentIndex1 = 0;

var handleButtonClick1 = (direction) => {
  if (direction === "left") {
    currentIndex1++;

    if (currentIndex1 > itemCount1 - 1) {
      currentIndex1 = 0;
    }
  } else {
    currentIndex1--;

    if (currentIndex1 < 0) {
      currentIndex1 = itemCount1 - 1;
    }
  }

  moveSlide1();
  styleIndicator1();
};

var handleIndicatorClick1 = (e) => {
  if (!e.target.classList.contains("indicator")) return;

  currentIndex1 = e.target.dataset.index;

  moveSlide1();
  styleIndicator1();
};

var initIndicators1 = () => {
  for (let i = 0; i < itemCount1; i++) {
    var indicator1 = document.createElement("div");
    indicator1.classList.add("indicator");
    indicator1.dataset.index = i;
    indicatorWrapper1.appendChild(indicator1);
  }

  styleIndicator1();
};

var styleIndicator1 = () => {
  var indicators1 = indicatorWrapper1.querySelectorAll(".indicator");
  indicators1.forEach((indicator1) => indicator1.classList.remove("current"));
  indicators1[currentIndex1].classList.add("current");
};

var moveSlide1 = () => {
  var sliderWidth = slider1.clientWidth;
  sliderContent1.style.transform = `translateX(-${
    currentIndex1 * sliderWidth
  }px)`;
};

var addEventListeners1 = () => {
  prevBtn1.addEventListener("click", () => handleButtonClick1("left"));
  nextBtn1.addEventListener("click", () => handleButtonClick1("right"));
  indicatorWrapper1.addEventListener("click", handleIndicatorClick1);
};

var init1 = () => {
  addEventListeners1();
  initIndicators1();
};

init1();

window.onload = () => {
  const downButton = document.querySelector(".down-button");
  const upButton = document.querySelector(".up-button");
  const sidebar = document.querySelector(".sidebar");
  const mainSlide = document.querySelector(".main-slide");
  const slidesCount = mainSlide.querySelectorAll("div").length;
  const container = document.querySelector(".thiscontainer");

  let activeSlideIndex = 0;

  sidebar.style.top = `-${(slidesCount - 1) * 70}vh`;

  function changeSlide(direction) {
    if (direction === "up") {
      activeSlideIndex++;
      if (activeSlideIndex === slidesCount) {
        activeSlideIndex = 0;
      }
    } else if (direction === "down") {
      activeSlideIndex--;
      if (activeSlideIndex < 0) {
        activeSlideIndex = slidesCount - 1;
      }
    }

    const height = container.clientHeight;

    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
  }

  downButton.addEventListener("click", () => {
    changeSlide("down");
  });

  upButton.addEventListener("click", () => {
    changeSlide("up");
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowUp") {
      changeSlide("up");
    } else if (event.key === "ArrowDown") {
      changeSlide("down");
    }
  });
};
