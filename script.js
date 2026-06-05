document.addEventListener('DOMContentLoaded', () => {

    // MANEJO DE MENÚ DE NAVEGACIÓN MÓVIL
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-item');

    const toggleMenu = () => {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    };

    menuToggle.addEventListener('click', toggleMenu);

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    // SIMULACIÓN DE REPRODUCITOR DE AUDIO premium
    const playBtn = document.getElementById('playBtn');
    const progressBar = document.getElementById('progressBar');
    const progressContainer = document.getElementById('progressContainer');
    const timeDisplay = document.getElementById('timeDisplay');

    let isPlaying = false;
    let currentTime = 0;
    const duration = 222; // 3 minutos y 42 segundos en total
    let audioInterval = null;

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };

    const updatePlayerUI = () => {
        const progressPercent = (currentTime / duration) * 100;
        progressBar.style.width = `${progressPercent}%`;
        timeDisplay.textContent = `${formatTime(currentTime)} / ${formatTime(duration)}`;
    };

    const playTrack = () => {
        isPlaying = true;
        playBtn.classList.add('playing');
        audioInterval = setInterval(() => {
            currentTime++;
            if (currentTime >= duration) {
                pauseTrack();
                currentTime = 0;
            }
            updatePlayerUI();
        }, 1000);
    };

    const pauseTrack = () => {
        isPlaying = false;
        playBtn.classList.remove('playing');
        clearInterval(audioInterval);
    };

    playBtn.addEventListener('click', () => {
        if (isPlaying) {
            pauseTrack();
        } else {
            playTrack();
        }
    });

    progressContainer.addEventListener('click', (e) => {
        const rect = progressContainer.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const width = rect.width;
        const clickPercent = clickX / width;
        currentTime = Math.floor(clickPercent * duration);
        updatePlayerUI();
    });

    // LIGHTBOX NATIVO PARA LA GALERÍA
    const lightbox = document.getElementById('lightbox');
    const lightboxContent = document.getElementById('lightboxContent');
    const lightboxClose = document.getElementById('lightboxClose');
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        const openLightbox = () => {
            const wrapper = item.querySelector('.gallery-img-wrapper');
            const clone = wrapper.cloneNode(true);
            lightboxContent.innerHTML = '';
            lightboxContent.appendChild(clone);
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        };

        item.addEventListener('click', openLightbox);
        item.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') openLightbox();
        });
    });

    const closeLightboxView = () => {
        lightbox.classList.remove('active');
        if (!navMenu.classList.contains('active')) {
            document.body.style.overflow = '';
        }
    };

    lightboxClose.addEventListener('click', closeLightboxView);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightboxView();
    });

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightboxView();
        }
    });

    // VALIDACIÓN DE INTERCEPCIÓN DEL FORMULARIO DE CONTACTO
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        formStatus.className = 'form-status';
        formStatus.textContent = '';

        if (!name || !email || !message) {
            formStatus.classList.add('error');
            formStatus.textContent = 'Por favor, llena todos los campos del formulario.';
            return;
        }

        if (!emailRegex.test(email)) {
            formStatus.classList.add('error');
            formStatus.textContent = 'Ingresa una dirección de correo electrónico válida.';
            return;
        }

        formStatus.classList.add('success');
        formStatus.textContent = 'Enviando mensaje de forma segura...';

        setTimeout(() => {
            formStatus.textContent = '¡Mensaje enviado con éxito! Nos comunicaremos pronto.';
            contactForm.reset();
        }, 1500);
    });
});