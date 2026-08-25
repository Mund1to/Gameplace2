// ========================================
// NAVEGACIÓN SUAVE
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========================================
// MANEJO DEL FORMULARIO DE CONTACTO
// ========================================

const formulario = document.querySelector('.formulario');
if (formulario) {
    formulario.addEventListener('submit', function (e) {
        e.preventDefault();

        // Obtener valores del formulario
        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();

        // Validación
        if (nombre === '' || email === '' || mensaje === '') {
            alert('❌ Por favor, completa todos los campos, es necesario');
            return;
        }

        // Validar email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('❌ Por favor, ingresa un email válido');
            return;
        }

        // Mensaje de éxito
        alert(`🎮 ¡Gracias ${nombre}!\n\nHemos recibido tu mensaje.\nTe contactaremos pronto en tu correo : ${email}`);

        // Limpiar formulario
        formulario.reset();

        // Log en consola
        console.log('Formulario enviado correctamente:', { nombre, email, mensaje });
    });
}

// ========================================
// REGISTRO EN TORNEOS / MEMBRESÍAS
// ========================================

document.querySelectorAll('.taller-card .btn-secondary').forEach(btn => {
    btn.addEventListener('click', function () {
        const nombreMembresia = this.closest('.taller-card').querySelector('h3').textContent;
        const precioMembresia = this.closest('.taller-card').querySelector('.precio').textContent;

        alert(`🏆 ¡Registro Exitoso!\n\n${nombreMembresia}\nPrecio: ${precioMembresia}\n\nProximamente te enviaremos los detalles para unirte a la party.`);

        console.log(`Usuario se registró a: ${nombreMembresia}`);
    });
});

// ========================================
// BOTÓN PRINCIPAL HERO
// ========================================

const btnHero = document.querySelector('.hero .btn-primary');
if (btnHero) {
    btnHero.addEventListener('click', function () {
        document.querySelector('#juegos').scrollIntoView({
            behavior: 'smooth'
        });
    });
}

// ========================================
// EFECTOS HOVER EN JUEGOS
// ========================================

document.querySelectorAll('.producto').forEach(producto => {
    producto.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-5px)';
        this.style.boxShadow = '0 8px 25px rgba(0, 240, 255, 0.4)';
    });

    producto.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 3px 10px rgba(0,0,0,0.3)';
    });
});

// ========================================
// ANIMACIÓN AL HACER SCROLL
// ========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar elementos de juegos y torneos
document.querySelectorAll('.producto, .taller-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
});

// ========================================
// CONTADOR DE VISITAS (JUGADORES CONECTADOS)
// ========================================

let visitasSesion = 0;

function actualizarContador() {
    visitasSesion += 1;
    console.log(`👾 Visitas en esta sesión: ${visitasSesion}`);
}

actualizarContador();

// ========================================
// MENSAJES EN CONSOLA
// ========================================

console.log('%c🎮 Bienvenido a GameZone', 'color: #00F0FF; font-size: 16px; font-weight: bold;');
console.log('%cPágina cargada correctamente', 'color: #FF2EFF; font-size: 14px;');
console.log('%cDesarrollado con 🕹️', 'color: #00F0FF; font-size: 12px;');
