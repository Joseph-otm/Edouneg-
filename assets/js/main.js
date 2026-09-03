/**
* Template Name: Medilab
* Template URL: https://bootstrapmade.com/medilab-free-medical-bootstrap-theme/
* Updated: Aug 07 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Frequently Asked Questions Toggle
   */
  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
    faqItem.addEventListener('click', () => {
      faqItem.parentNode.classList.toggle('faq-active');
    });
  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

window.showCategory = function (id, element) {

    document.querySelectorAll('.category-content').forEach(section => {
        section.classList.add('d-none');
    });

    document.getElementById(id).classList.remove('d-none');

    document.querySelectorAll('.category-card').forEach(card => {
        card.classList.remove('active');
    });

    element.classList.add('active');
};


/////////////////

const productModal = document.getElementById('productModal');

productModal.addEventListener('show.bs.modal', function (event) {

    const button = event.relatedTarget;

    document.getElementById("modalTitle").innerHTML =
        button.getAttribute("data-title");

    document.getElementById("modalImage").src =
        button.getAttribute("data-image");

    document.getElementById("modalDescription").innerHTML =
        button.getAttribute("data-description");

    let features =
        button.getAttribute("data-features").split("<br>");

    let html = "";

    features.forEach(function(item){

        item = item.replace("✔","").trim();

        html += `
            <div class="feature">
                <i class="bi bi-check-circle-fill"></i>
                ${item}
            </div>
        `;

    });

    document.getElementById("modalFeatures").innerHTML = html;

});

//////// VIDEO /////////////

const smallVideo = document.getElementById("aboutVideo");
const overlay = document.getElementById("videoOverlay");
const popupVideo = document.getElementById("popupVideo");
const closeBtn = document.querySelector(".close-video");
const playButton = document.getElementById("playButton");

// Ouvrir la vidéo popup
function openVideo() {

    // Cacher le bouton Play
    playButton.classList.add("hide");

    // Arrêter la petite vidéo
    smallVideo.pause();
    smallVideo.currentTime = 0;

    // Afficher le popup
    overlay.classList.add("active");

    // Lancer la grande vidéo
    popupVideo.currentTime = 0;
    popupVideo.play();

}

// Clic sur le bouton Play
playButton.addEventListener("click", openVideo);

// Clic sur la vidéo
smallVideo.addEventListener("click", openVideo);

// Fermer avec la croix
closeBtn.addEventListener("click", function () {

    overlay.classList.remove("active");

    popupVideo.pause();
    popupVideo.currentTime = 0;

    // Réafficher le bouton Play
    playButton.classList.remove("hide");

});

// Fermer en cliquant à l'extérieur
overlay.addEventListener("click", function (e) {

    if (e.target === overlay) {

        overlay.classList.remove("active");

        popupVideo.pause();
        popupVideo.currentTime = 0;

        // Réafficher le bouton Play
        playButton.classList.remove("hide");

    }

});

overlay.addEventListener("click", function (e) {

    if (e.target === overlay) {

        overlay.classList.remove("active");

        popupVideo.pause();
        popupVideo.currentTime = 0;

    }

});
  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

})();