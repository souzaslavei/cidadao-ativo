// Screen navigation
const screens = document.querySelectorAll('.screen');
const navItems = document.querySelectorAll('.nav-item');

// Map screen IDs to nav item indices
const screenMap = {
  0: 'screen-home',
  1: 'screen-map',
  2: 'screen-report',
  3: 'screen-services',
  4: 'screen-dashboard',
  5: 'screen-profile'
};

// Initialize navigation
navItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    // Remove active class from all screens and nav items
    screens.forEach(screen => screen.classList.remove('active'));
    navItems.forEach(nav => nav.classList.remove('active'));

    // Add active class to selected screen and nav item
    const screenId = screenMap[index];
    document.getElementById(screenId).classList.add('active');
    item.classList.add('active');
  });
});

// Set home screen as active by default
document.getElementById('screen-home').classList.add('active');
navItems[0].classList.add('active');

// Form interactions
const chips = document.querySelectorAll('.chip');
chips.forEach(chip => {
  chip.addEventListener('click', () => {
    chips.forEach(c => c.classList.remove('selected'));
    chip.classList.add('selected');
  });
});

// Category selection
const catItems = document.querySelectorAll('.cat-item');
catItems.forEach(item => {
  item.addEventListener('click', () => {
    catItems.forEach(i => i.classList.remove('selected'));
    item.classList.add('selected');
  });
});

// Filter chips
const filterChips = document.querySelectorAll('.filter-chip');
filterChips.forEach(chip => {
  chip.addEventListener('click', () => {
    filterChips.forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
  });
});

// FAB button - navigate to report screen
const fab = document.querySelector('.fab');
if (fab) {
  fab.addEventListener('click', () => {
    screens.forEach(screen => screen.classList.remove('active'));
    navItems.forEach(nav => nav.classList.remove('active'));
    document.getElementById('screen-report').classList.add('active');
    navItems[2].classList.add('active');
  });
}

// Back buttons
const backButtons = document.querySelectorAll('.back-btn');
backButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    screens.forEach(screen => screen.classList.remove('active'));
    navItems.forEach(nav => nav.classList.remove('active'));
    document.getElementById('screen-home').classList.add('active');
    navItems[0].classList.add('active');
  });
});

// Confirm buttons - add click feedback
const confirmBtns = document.querySelectorAll('.confirm-btn');
confirmBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const count = parseInt(btn.textContent.match(/\d+/)[0]);
    btn.textContent = `👍 ${count + 1}`;
  });
});

// Map my location button
const mapMyLocBtn = document.querySelector('.map-my-loc');
if (mapMyLocBtn) {
  mapMyLocBtn.addEventListener('click', () => {
    console.log('Getting user location...');
    // Location functionality would go here
  });
}

// Photo upload
const photoUpload = document.querySelector('.photo-upload');
if (photoUpload) {
  photoUpload.addEventListener('click', () => {
    console.log('Photo upload clicked');
    // File input would go here
  });
}

// Report submit button
const reportSubmitBtn = document.querySelector('.report-footer .btn-primary');
if (reportSubmitBtn) {
  reportSubmitBtn.addEventListener('click', () => {
    // Show success screen
    screens.forEach(screen => screen.classList.remove('active'));
    navItems.forEach(nav => nav.classList.remove('active'));
    document.getElementById('screen-success').classList.add('active');
  });
}

// Success screen - back to home button
const successBackBtn = document.querySelector('#screen-success .btn-primary');
if (successBackBtn) {
  successBackBtn.addEventListener('click', () => {
    screens.forEach(screen => screen.classList.remove('active'));
    navItems.forEach(nav => nav.classList.remove('active'));
    document.getElementById('screen-home').classList.add('active');
    navItems[0].classList.add('active');
  });
}

// Onboarding continue button
const onboardContinueBtn = document.querySelector('.onboard-footer .btn-primary');
if (onboardContinueBtn) {
  onboardContinueBtn.addEventListener('click', () => {
    screens.forEach(screen => screen.classList.remove('active'));
    navItems.forEach(nav => nav.classList.remove('active'));
    document.getElementById('screen-home').classList.add('active');
    navItems[0].classList.add('active');
  });
}

// Section links - navigate to map
const sectionLinks = document.querySelectorAll('.section-link');
sectionLinks.forEach(link => {
  link.addEventListener('click', () => {
    screens.forEach(screen => screen.classList.remove('active'));
    navItems.forEach(nav => nav.classList.remove('active'));
    document.getElementById('screen-map').classList.add('active');
    navItems[1].classList.add('active');
  });
});

// Responsive touch handling
let touchStartX = 0;
let touchEndX = 0;

function handleSwipe() {
  // Could add swipe navigation here
  if (touchEndX < touchStartX - 50) {
    console.log('Swiped left');
  }
  if (touchEndX > touchStartX + 50) {
    console.log('Swiped right');
  }
}

document.addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
});

// Initialize app
console.log('Cidadão Ativo app initialized');
