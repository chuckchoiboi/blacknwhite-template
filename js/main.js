// window on load
window.onload = setTimeout(function () {
  const heading = document.querySelector('.heading');
  const subheading = document.querySelector('.sub-heading');

  heading.className = 'heading active';
  setTimeout(function () {
    subheading.className = 'sub-heading active';
  }, 750);
}, 500);

// scroll function

//// about paragraph fade in (laptop)

window.onscroll = function () {
  const aboutHeader = document.querySelector('.about h2');
  const aboutBlurb = document.querySelector('.about p');

  if (window.innerWidth < 992 || window.innerWidth > 1300) {
    if (document.body.scrollTop > 500) {
      aboutHeader.className = 'active';
      aboutBlurb.className = 'active';
    } else {
      aboutHeader.className = '';
      aboutBlurb.className = '';
    }
  } else {
    if (document.body.scrollTop > 400) {
      aboutHeader.className = 'active';
      aboutBlurb.className = 'active';
    } else {
      aboutHeader.className = '';
      aboutBlurb.className = '';
    }
  }

  const serviceCard = document.querySelector('.service-card-row');
  const serviceHeader = document.querySelector('.service-header h2');

  if (window.innerWidth < 992 || window.innerWidth > 1300) {
    if (document.body.scrollTop > 1200) {
      serviceCard.className = 'service-card-row active';
      serviceHeader.className = 'active';
    } else {
      serviceCard.className = 'service-card-row';
      serviceHeader.className = '';
    }
  } else {
    if (document.body.scrollTop > 1000) {
      serviceCard.className = 'service-card-row active';
      serviceHeader.className = 'active';
    } else {
      serviceCard.className = 'service-card-row';
      serviceHeader.className = '';
    }
  }

  const contactHeader = document.querySelector('.contact-header h2');
  const contactContent = document.querySelector('.contact');

  if (window.innerWidth < 992 || window.innerWidth > 1300) {
    if (document.body.scrollTop > 2100) {
      contactHeader.className = 'active';
      contactContent.className = 'contact active';
    } else {
      contactHeader.className = '';
      contactContent.className = 'contact';
    }
  } else {
    if (document.body.scrollTop > 1550) {
      contactHeader.className = 'active';
      contactContent.className = 'contact active';
    } else {
      contactHeader.className = '';
      contactContent.className = 'contact';
    }
  }

  //nav-bar highlight (laptop)

  if (document.body.scrollTop > 1350) {
    document.querySelector('#nav4').className = 'active';
    document.querySelector('#nav3').className = '';
    document.querySelector('#nav2').className = '';
    document.querySelector('#nav1').className = '';
  } else if (document.body.scrollTop > 900) {
    document.querySelector('#nav4').className = '';
    document.querySelector('#nav3').className = 'active';
    document.querySelector('#nav2').className = '';
    document.querySelector('#nav1').className = '';
  } else if (document.body.scrollTop > 450) {
    document.querySelector('#nav4').className = '';
    document.querySelector('#nav3').className = '';
    document.querySelector('#nav2').className = 'active';
    document.querySelector('#nav1').className = '';
  } else {
    document.querySelector('#nav4').className = '';
    document.querySelector('#nav3').className = '';
    document.querySelector('#nav2').className = '';
    document.querySelector('#nav1').className = 'active';
  }
};
//// scroll function ends

//// mobile menu function ////
const hambContainer = document.querySelector('.hamb-container');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuItem = document.querySelectorAll('.mobile-menu-item');

hambContainer.addEventListener('click', function () {
  if (hambContainer.className == 'hamb-container open') {
    hambContainer.className = 'hamb-container';
    mobileMenu.className = 'mobile-menu';
  } else {
    hambContainer.className = 'hamb-container open';
    mobileMenu.className = 'mobile-menu slide';
  }
});

mobileMenuItem.forEach((element) =>
  element.addEventListener('click', function () {
    hambContainer.className = 'hamb-container';
    mobileMenu.className = 'mobile-menu';
  })
);

//// mobile menu function ends////
