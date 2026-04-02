/* ============================================
   FUNCIONALIDADES JAVASCRIPT
   ============================================ */

// ============================================
// 1. MENU HAMBURGUESA RESPONSIVO
// ============================================

const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');

// Abre/cierra el menú al hacer click en el hamburguesa
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Cierra el menú cuando se hace click en un link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Cierra el menú cuando se hace click fuera de él
document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar')) {
        navMenu.classList.remove('active');
    }
});

// ============================================
// 2. SMOOTH SCROLL PARA ENLACES INTERNOS
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// 3. ANIMACIÓN DE ENTRADA PARA TARJETAS
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideInLeft 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar elementos con clase 'servicio-card', 'testimonio-card', 'beneficio-item'
document.querySelectorAll('.servicio-card, .testimonio-card, .beneficio-item').forEach(card => {
    card.style.opacity = '0';
    observer.observe(card);
});

// ============================================
// 4. CONTADOR DE BENEFICIOS (ANIMACIÓN)
// ============================================

const countNumbers = document.querySelectorAll('.beneficio-number');
const speed = 200;

const runCounter = (element) => {
    const counter = element;
    counter.style.animation = 'pulse 0.6s ease';
};

// Activar contador cuando se ve en pantalla
const beneficiosObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            runCounter(entry.target);
            beneficiosObserver.unobserve(entry.target);
        }
    });
});

countNumbers.forEach(number => {
    beneficiosObserver.observe(number);
});

// ============================================
// 5. EFECTOS AL HACER SCROLL
// ============================================

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    
    // Agregar sombra más pronunciada cuando se hace scroll
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = 'var(--shadow)';
    }
});

// ============================================
// 6. VERIFICACIÓN DE NÚMEROS DE WHATSAPP
// ============================================

// Este número debe ser reemplazado con el número real de WhatsApp
const WHATSAPP_NUMBER = '573008388246'; // Formato: código país + número
const WHATSAPP_MESSAGE = 'Hola Energía Móvil, necesito una batería para mi carro';

// Validar y actualizar enlaces de WhatsApp
function validateWhatsAppLinks() {
    const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');
    
    whatsappLinks.forEach(link => {
        // Verificar que el link tenga un número válido
        if (link.href.includes(WHATSAPP_NUMBER)) {
            link.addEventListener('click', (e) => {
                // Opcional: Agregar análisis o tracking aquí
                console.log('Click en WhatsApp - Usuario iniciando conversación');
            });
        }
    });
}

validateWhatsAppLinks();

// ============================================
// 7. FUNCIONES UTILITARIAS
// ============================================

// Función para detectar dispositivo móvil
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Función para obtener el tamaño de la pantalla
function getViewportSize() {
    return {
        width: window.innerWidth,
        height: window.innerHeight
    };
}

// ============================================
// 8. EVENTO DE CARGA COMPLETA
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('Página Energía Móvil cargada correctamente');
    console.log('Dispositivo móvil:', isMobileDevice());
    console.log('Tamaño de pantalla:', getViewportSize());
});

// ============================================
// 9. MANEJO DE ERRORES
// ============================================

window.addEventListener('error', (event) => {
    console.error('Error en la página:', event.error);
});

// ============================================
// FIN DE SCRIPT.JS
// ============================================