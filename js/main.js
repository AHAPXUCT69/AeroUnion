document.addEventListener('DOMContentLoaded', () => {

// ----- BURGER MENU --start

  const burgerElem = document.querySelector('.burger');
  const sidebarElem = document.querySelector('.sidebar');
  const contentElem = document.querySelector('.content');
  const scrollElem = document.querySelector('.scroll');

  burgerElem.addEventListener('click', () => {
    burgerElem.classList.toggle('burger--active');
    sidebarElem.classList.toggle('sidebar--active');
    scrollElem.classList.toggle('scroll--hidden');
  });

  contentElem.addEventListener('click', () => {
    if (burgerElem.classList.contains('burger--active')) {
      burgerElem.classList.remove('burger--active');
      sidebarElem.classList.remove('sidebar--active');
    }
  });


// ----- BURGER MENU ---end

// ----- MODAL ---start

let modalButtonElems = document.querySelectorAll('[data-toggle="modal"]');
const modalCloseElem = document.querySelector('.modal__close');
const modalDialogElem = document.querySelector('.modal__dialog');
const modalOverlayElem = document.querySelector('.modal__overlay');

openModal();
closeModal();

function openModal() {
	modalButtonElems.forEach(e => {
		e.addEventListener('click',() => {
			modalOverlayElem.classList.add('modal__overlay--visible');
			modalDialogElem.classList.add('modal__dialog--visible');
		})
	});
}

function closeModal() {
	modalCloseElem.addEventListener('click', () => {
		modalOverlayElem.classList.remove('modal__overlay--visible');
		modalDialogElem.classList.remove('modal__dialog--visible');
	});
	modalOverlayElem.addEventListener('click', () => {
		modalOverlayElem.classList.remove('modal__overlay--visible');
		modalDialogElem.classList.remove('modal__dialog--visible');
	});
};

// ----- MODAL ---end

// -----Full Page ---start

var myFullpage = new fullpage('#fullpage', {
	//Навигация
	menu: '#menu',
	lockAnchors: false,
	anchors:['firstPage', 'secondPage'],
	navigation: false,
	navigationPosition: 'right',
	navigationTooltips: ['firstSlide', 'secondSlide'],
	showActiveTooltip: false,
	slidesNavigation: false,
	slidesNavPosition: 'bottom',

	//Скроллинг
	css3: true,
	scrollingSpeed: 700,
	autoScrolling: true,
	fitToSection: true,
	fitToSectionDelay: 1000,
	scrollBar: false,
	easing: 'easeInOutCubic',
	easingcss3: 'ease',
	loopBottom: false,
	loopTop: false,
	loopHorizontal: true,
	continuousVertical: false,
	continuousHorizontal: false,
	scrollHorizontally: false,
	interlockedSlides: false,
	dragAndMove: false,
	offsetSections: false,
	resetSliders: false,
	fadingEffect: false,
	normalScrollElements: '#element1, .element2',
	scrollOverflow: true,
	scrollOverflowReset: false,
	scrollOverflowOptions: null,
	touchSensitivity: 15,
	bigSectionsDestination: null,

	//Доступ
	keyboardScrolling: true,
	animateAnchor: true,
	recordHistory: true,

	//Дизайн
	controlArrows: true,
	verticalCentered: true,
  fixedElements: '#header, .footer',
	responsiveWidth: 0,
	responsiveHeight: 0,
	responsiveSlides: false,
	parallax: false,
	parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
	dropEffect: false,
	dropEffectOptions: { speed: 2300, color: '#F82F4D', zIndex: 9999},
	cards: false,
	cardsOptions: {perspective: 100, fadeContent: true, fadeBackground: true},

	//Настроить селекторы
	sectionSelector: '.section',
	slideSelector: '.slide',

	lazyLoading: true,

	//события
	onLeave: function(origin, destination, direction){},
	afterLoad: function(origin, destination, direction){},
	afterRender: function(){},
	afterResize: function(width, height){},
	afterReBuild: function(){},
	afterResponsive: function(isResponsive){},
	afterSlideLoad: function(section, origin, destination, direction){},
	onSlideLeave: function(section, origin, destination, direction){}
});

// // -----Full Page ---end


});