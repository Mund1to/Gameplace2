// ========================================
// NAVEGACIÓN SUAVE (optimizado con delegación)
// ========================================

document.addEventListener('click', function (e) {
  const anchor = e.target.closest('a[href^="#"]');
  if (!anchor) return;

  const href = anchor.getAttribute('href');
  // Ignorar enlaces vacíos o solo '#'
  if (!href || href === '#') return;

  const target = document.querySelector(href);
  if (!target) return;

  e.preventDefault();
  target.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
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
// REGISTRO EN TORNEOS / MEMBRESÍAS (optimizado con delegación)
// ========================================

// Selecciona el contenedor que agrupa las tarjetas de talleres/torneos.
// Ajusta el selector si tu HTML usa otro contenedor (por ejemplo '.talleres' o '#talleres').
const contenedorTalleres = document.querySelector('.talleres') || document.querySelector('.cards-container');

if (contenedorTalleres) {
  contenedorTalleres.addEventListener('click', function (e) {
    const btn = e.target.closest('.taller-card .btn-secondary');
    if (!btn) return;

    const tarjeta = btn.closest('.taller-card');
    if (!tarjeta) return;

    const nombreMembresiaEl = tarjeta.querySelector('h3');
    const precioMembresiaEl = tarjeta.querySelector('.precio');

    const nombreMembresia = nombreMembresiaEl ? nombreMembresiaEl.textContent.trim() : 'Membresía';
    const precioMembresia = precioMembresiaEl ? precioMembresiaEl.textContent.trim() : 'Precio no disponible';

    alert(`🏆 ¡Registro Exitoso!\n\n${nombreMembresia}\nPrecio: ${precioMembresia}\n\nPróximamente te enviaremos los detalles para unirte a la party.`);

    console.log(`Usuario se registró a: ${nombreMembresia}`);
  });
}


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
        this.style.boxShadow = '0 8px 25px rgba(0, 153, 164, 0.4)';
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

console.log('%c🎮 Bienvenido a GameZone', 'color: #0dcbd9; font-size: 16px; font-weight: bold;');
console.log('%cPágina cargada correctamente', 'color: #FF2EFF; font-size: 14px;');
console.log('%cDesarrollado con 🕹️', 'color: #00F0FF; font-size: 12px;');
