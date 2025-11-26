
// 1. PRELOADER
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    preloader.style.opacity = '0';
    setTimeout(() => { preloader.style.display = 'none'; }, 800);
    // Init AOS after load
    AOS.init({ duration: 1000, once: true, offset: 80 });
});

// 2. SCROLL NAVBAR
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// 3. LUXURY DARK MODE
const toggle = document.getElementById('themeToggle');
const body = document.body;

// Check Local Storage
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    toggle.classList.remove('bi-moon-stars');
    toggle.classList.add('bi-sun');
    document.documentElement.style.setProperty('--invert-val', '1');
}

toggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        toggle.classList.remove('bi-moon-stars');
        toggle.classList.add('bi-sun');
        document.documentElement.style.setProperty('--invert-val', '1');
    } else {
        localStorage.setItem('theme', 'light');
        toggle.classList.remove('bi-sun');
        toggle.classList.add('bi-moon-stars');
        document.documentElement.style.setProperty('--invert-val', '0');
    }
});

// 4. COLLECTION MODAL LOGIC
const collectionModal = document.getElementById('collectionModal');
collectionModal.addEventListener('show.bs.modal', event => {
    // Button that triggered the modal
    const button = event.relatedTarget;
    // Extract info from data-* attributes
    const title = button.getAttribute('data-title');
    const desc = button.getAttribute('data-desc');
    const price = button.getAttribute('data-price');
    const img = button.getAttribute('data-img');

    // Update the modal's content
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalDesc').textContent = desc;
    document.getElementById('modalPrice').textContent = price;
    document.getElementById('modalImg').src = img;
});
