/* ----- booking box ----- */

function openBookBox() {
    var bookBox = document.getElementById("bookBox");
    var openBtn = document.getElementById("openBook");
  
    if(bookBox.style.height != "400px") {
      bookBox.style.height = "400px";
      openBtn.innerHTML = "hide";
    }
    else {
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
    showSlides(slideIndex += n);
  }
  
  function showSlides(n) {
    var slides = document.getElementsByClassName("op-slide");
    var i;
  
  
    if(n > slides.length) {
      slideIndex = 1;
    }
    if(n < 1) {
      slideIndex = slides.length;
    }
    for(i=0; i < slides.length; i++) {
      slides[i].style.display = "none";
      slides[slideIndex-1].style.display = "block";
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
const menuIcon = document.querySelector('.nav-icon');
const menuLinks = document.querySelector('.nav-links');
const nav = document.querySelector('nav');
// const introduction = document.querySelector('.introduction-box');
// const arrow = document.querySelector('.arrow-box');

let toggleMenu = () => {
  // introduction.classList.toggle('hide');
  // arrow.classList.toggle('hide');
  menuIcon.classList.toggle('open');
  menuLinks.classList.toggle('show-links');
  nav.classList.toggle('nav-collapse');
};

menuIcon.addEventListener('click', toggleMenu);
menuLinks.addEventListener('click', toggleMenu);

$(window).scroll(function() {
  if ($(this).scrollTop() > 50) {
      $( ".nav-container" ).addClass('grey');
  } else {
      console.log('there');
      $( ".nav-container" ).removeClass('grey');
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
(function() {
	
	function Slideshow( element ) {
		this.el = document.querySelector( element );
		this.init();
	}
	
	Slideshow.prototype = {
		init: function() {
			this.wrapper = this.el.querySelector( ".slider-wrapper" );
			this.slides = this.el.querySelectorAll( ".slide" );
			this.previous = this.el.querySelector( ".slider-previous" );
			this.next = this.el.querySelector( ".slider-next" );
			this.index = 0;
			this.total = this.slides.length;
			this.timer = null;
			
			this.action();
			this.stopStart();	
		},
		_slideTo: function( slide ) {
			var currentSlide = this.slides[slide];
			currentSlide.style.opacity = 1;
			
			for( var i = 0; i < this.slides.length; i++ ) {
				var slide = this.slides[i];
				if( slide !== currentSlide ) {
					slide.style.opacity = 0;
				}
			}
		},
		action: function() {
			var self = this;
			self.timer = setInterval(function() {
				self.index++;
				if( self.index == self.slides.length ) {
					self.index = 0;
				}
				self._slideTo( self.index );
				
			}, 9000);
		},
		stopStart: function() {
			var self = this;
			self.el.addEventListener( "mouseover", function() {
				clearInterval( self.timer );
				self.timer = null;
				
			}, false);
			self.el.addEventListener( "mouseout", function() {
				self.action();
				
			}, false);
		}
		
		
	};
	
	document.addEventListener( "DOMContentLoaded", function() {
		
		var slider = new Slideshow( "#main-slider" );
		
	});
	
	
})();
