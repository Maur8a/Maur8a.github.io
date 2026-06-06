document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Menú Desplegable Responsivo ---
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            menuToggle.classList.toggle('open');
        });

        // Cerrar menú al hacer click en un enlace (móviles)
        const navLinks = mainNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('active');
                menuToggle.classList.remove('open');
            });
        });
    }

    // --- 2. Reproductor de Audio Real ---

const btnPlay = document.getElementById('btn-play');
const audioPlayer = document.getElementById('audio-player');
const progressSpan = document.querySelector('.progress-bar span');
const currentTimeEl = document.querySelector('.current-time');
const totalDurationEl = document.querySelector('.total-duration');

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

if (audioPlayer && btnPlay) {

    audioPlayer.addEventListener('loadedmetadata', () => {
        totalDurationEl.textContent =
            formatTime(audioPlayer.duration);
    });

    btnPlay.addEventListener('click', () => {

        if (audioPlayer.paused) {
            audioPlayer.play();
            btnPlay.textContent = '⏸';
        } else {
            audioPlayer.pause();
            btnPlay.textContent = '▶';
        }

    });

    audioPlayer.addEventListener('timeupdate', () => {

        const progress =
            (audioPlayer.currentTime / audioPlayer.duration) * 100;

        progressSpan.style.width = progress + '%';

        currentTimeEl.textContent =
            formatTime(audioPlayer.currentTime);
    });

    audioPlayer.addEventListener('ended', () => {

        btnPlay.textContent = '▶';

        progressSpan.style.width = '0%';

        currentTimeEl.textContent = '0:00';
    });
}

    // --- 3. Lightbox de Galería Nativo ---
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxContent = document.querySelector('.lightbox-content');
    const lightboxClose = document.querySelector('.lightbox-close');

    if (galleryItems && lightbox && lightboxContent && lightboxClose) {
        galleryItems.forEach(item => {
            item.addEventListener('click', () => {
                const elementToClone = item.querySelector('.img-fallback');
                if (elementToClone) {
                    lightboxContent.innerHTML = '';
                    const clonedElement = elementToClone.cloneNode(true);
                    lightboxContent.appendChild(clonedElement);
                    lightbox.classList.add('active');
                    lightbox.setAttribute('aria-hidden', 'false');
                    document.body.style.overflow = 'hidden'; // Detener scroll de fondo
                }
            });
        });

        const closeLightbox = () => {
            lightbox.classList.remove('active');
            lightbox.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        };

        lightboxClose.addEventListener('click', closeLightbox);
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
        
        // Cerrar con tecla Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && lightbox.classList.contains('active')) {
                closeLightbox();
            }
        });
    }

    // --- 4. Validación del Formulario de Contacto ---
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;
            const inputs = contactForm.querySelectorAll('input[required], textarea[required]');

            inputs.forEach(input => {
                const formGroup = input.parentElement;
                if (!input.value.trim()) {
                    formGroup.classList.add('invalid');
                    isValid = false;
                } else if (input.type === 'email' && !validateEmail(input.value)) {
                    formGroup.classList.add('invalid');
                    isValid = false;
                } else {
                    formGroup.classList.remove('invalid');
                }
            });

            if (isValid) {
                formStatus.textContent = 'Mensaje enviado con éxito. Me pondré en contacto pronto.';
                formStatus.className = 'form-status success';
                contactForm.reset();
                const progressSpan = document.querySelector('.progress-bar span');
                if (progressSpan) progressSpan.style.width = '35%'; // Reset simulación de ui
            }
        });

        // Limpiar estados de error al escribir
        contactForm.querySelectorAll('input, textarea').forEach(input => {
            input.addEventListener('input', () => {
                const formGroup = input.parentElement;
                if (input.value.trim()) {
                    formGroup.classList.remove('invalid');
                }
            });
        });
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // --- 5. Efecto Header Opaco con Scroll ---
    const header = document.querySelector('.main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '0.75rem 0';
            header.style.background = 'rgba(7, 9, 14, 0.95)';
        } else {
            header.style.padding = '1.25rem 0';
            header.style.background = 'rgba(7, 9, 14, 0.8)';
        }
    });
});
