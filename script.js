document.addEventListener('DOMContentLoaded', () => {
    // Menú Lateral Desplegable para Móviles
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('open');
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('open');
            });
        });
    }

    // Funcionalidad interactiva básica de la galería
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.querySelector('.lightbox-viewer');
    const lightboxContent = document.querySelector('.lightbox-content');
    const lightboxClose = document.querySelector('.lightbox-close');

    if (galleryItems.length && lightbox && lightboxContent) {
        galleryItems.forEach(item => {
            item.addEventListener('click', () => {
                const title = item.querySelector('.gallery-card-title').innerText;
                lightboxContent.innerHTML = `
                    <div style="padding: 2.5rem; text-align: center; background: #0f1123; border: 1px solid #ff6a00; border-radius: 8px; max-width: 90%; width: 400px; box-shadow: 0 10px 25px rgba(0,0,0,0.5);">
                        <h3 style="font-size: 1.8rem; margin-bottom: 1rem; color: #ff6a00; text-transform: uppercase; letter-spacing: 1px;">${title}</h3>
                        <p style="color: #a0a0aa; font-size: 1rem; line-height: 1.5;">Concepto visual perteneciente al imaginario de Vochoa.</p>
                    </div>
                `;
                lightbox.style.display = 'flex';
                lightbox.setAttribute('aria-hidden', 'false');
            });
        });

        lightboxClose.addEventListener('click', () => {
            lightbox.style.display = 'none';
            lightbox.setAttribute('aria-hidden', 'true');
        });

        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.style.display = 'none';
                lightbox.setAttribute('aria-hidden', 'true');
            }
        });
    }
});