// script.js
// Funcionalidades de la landing page Kaiross

const testimonios = [
  {
    texto:
      "Con Kaiross logramos una web profesional que refleja nuestra marca y genera confianza. Pasamos de tener una página estática a recibir contactos de clientes todas las semanas.",
    autor: "Daniela Ruiz",
    cargo: "Arquitecta independiente",
  },
  {
    texto:
      "El servicio de asistencia virtual fue un cambio total. Ahora todo mi correo y agenda están bajo control y puedo dedicarme a mis pacientes sin distracciones.",
    autor: "Dr. Felipe Morales",
    cargo: "Médico especialista",
  },
  {
    texto:
      "Gracias al equipo de Kaiross lanzamos nuestra tienda online y triplicamos las consultas en el primer mes. Su acompañamiento fue clave en cada paso.",
    autor: "Lucía Herrera",
    cargo: "Dueña, Boutique Luma",
  },
  {
    texto:
      "La estrategia de contenido que desarrollaron mejoró nuestro engagement y aumentó las reservas en el restaurante. ¡Por fin vemos resultados medibles!",
    autor: "Andrés Pérez",
    cargo: "Gerente, Sabor & Arte",
  },
  {
    texto:
      "Kaiross me ayudó a profesionalizar mi marca personal. Desde el logo hasta mi web, todo comunica coherencia y estilo. Mis clientes ahora me perciben como experta.",
    autor: "Carolina Vargas",
    cargo: "Coach de bienestar",
  },
  {
    texto:
      "Su gestión de redes y diseño gráfico elevaron completamente nuestra presencia online. Hoy tenemos una comunidad activa y clientes recurrentes.",
    autor: "Miguel Torres",
    cargo: "Fundador, Barbería Urbana",
  },
  {
    texto:
      "La organización y soporte que recibí con su asistencia virtual me permitió lanzar mi curso online sin estrés. Siempre atentos y eficientes.",
    autor: "Patricia Ríos",
    cargo: "Creadora de contenido educativo",
  },
  {
    texto:
      "Nos ayudaron a redefinir nuestra identidad visual y a crear un branding coherente. Ahora nuestra marca transmite profesionalismo en cada detalle.",
    autor: "Diego Sánchez",
    cargo: "Director, Inmobiliaria Nova",
  },
  {
    texto:
      "Después de implementar las estrategias digitales de Kaiross, nuestras campañas publicitarias comenzaron a convertir clientes reales, no solo visitas.",
    autor: "Valentina Castro",
    cargo: "Fundadora, Fit&Smart",
  },
  {
    texto:
      "El mantenimiento web y las mejoras constantes que realizan nos permiten ofrecer una experiencia impecable a nuestros clientes. Son parte de nuestro crecimiento.",
    autor: "Jorge Molina",
    cargo: "CEO, Agencia TravelNow",
  },
  {
    texto:
      "Antes de trabajar con Kaiross sentía que mi marca no transmitía lo que ofrecía. Hoy tengo una identidad clara, una web hermosa y nuevos clientes cada semana.",
    autor: "Laura Jiménez",
    cargo: "Consultora de imagen",
  },
  {
    texto:
      "Siempre quise tener una presencia digital profesional, pero no sabía por dónde empezar. El equipo de Kaiross me acompañó en todo el proceso con paciencia y claridad.",
    autor: "Camilo Torres",
    cargo: "Entrenador personal",
  },
  {
    texto:
      "El servicio de asistencia virtual fue una bendición. Ahora tengo todo organizado y puedo dedicarme a lo que realmente amo: mis pacientes y mi negocio.",
    autor: "Dra. Natalia Gómez",
    cargo: "Psicóloga clínica",
  },
  {
    texto:
      "Gracias a Kaiross pasé de sentirme perdido en redes sociales a tener una estrategia con propósito. Mi comunidad creció y mis ventas también.",
    autor: "Santiago Vélez",
    cargo: "Creador de contenido",
  },
  {
    texto:
      "Con su apoyo logré lanzar mi marca desde cero. Me ayudaron con todo: el logo, la web y la estrategia. Hoy mi negocio tiene una presencia sólida y profesional.",
    autor: "Isabel Duarte",
    cargo: "Fundadora, Bloom Studio",
  },
  {
    texto:
      "Lo que más me impresionó fue su capacidad para entender mi visión. No solo diseñaron mi web, sino que lograron reflejar exactamente quién soy y a quién quiero llegar.",
    autor: "Rodrigo Cabrera",
    cargo: "Fotógrafo profesional",
  },
  {
    texto:
      "La gestión de redes sociales superó mis expectativas. Dejé de publicar sin rumbo y ahora cada contenido tiene sentido. ¡Mi marca nunca se había visto tan bien!",
    autor: "Claudia Rojas",
    cargo: "Dueña, Café Botanika",
  },
  {
    texto:
      "Trabajar con Kaiross fue como tener mi propio departamento digital. Son cercanos, atentos y siempre proponen ideas que funcionan.",
    autor: "Andrés Fajardo",
    cargo: "Director, Academia Creativa",
  },
  {
    texto:
      "Me ayudaron a pasar de tener un negocio local sin presencia online a recibir pedidos desde otras ciudades. Las estrategias realmente generan resultados.",
    autor: "Elena Montoya",
    cargo: "Propietaria, Dulce Encanto",
  },
  {
    texto:
      "Kaiross entendió mi proyecto mejor que nadie. Hoy tengo una marca coherente, un sitio web que me representa y una estrategia que me da resultados constantes.",
    autor: "Luis Ramírez",
    cargo: "Consultor en finanzas personales",
  },
];

function initScrollAnimations() {
  const scrollElements = document.querySelectorAll("[data-scroll]");

  const elementInView = (el) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
      elementTop <=
      (window.innerHeight || document.documentElement.clientHeight) / 1.2
    );
  };

  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (elementInView(el)) el.classList.add("visible");
    });
  };

  window.addEventListener("load", handleScrollAnimation);
  window.addEventListener("scroll", () => {
    requestAnimationFrame(handleScrollAnimation);
  });

  document
    .querySelectorAll(".hero-content [data-scroll]")
    .forEach((el, index) => {
      setTimeout(() => el.classList.add("visible"), index * 200);
    });
}

function obtenerTestimoniosAleatorios(cantidad = 3) {
  return [...testimonios].sort(() => 0.5 - Math.random()).slice(0, cantidad);
}

function crearTestimonioHTML(testimonio) {
  return `<div class="testimonial-card">
    <div class="testimonial-text">"${testimonio.texto}"</div>
    <div class="testimonial-author">
      <div class="author-info">
        <h4>${testimonio.autor}</h4>
        <p>${testimonio.cargo}</p>
      </div>
    </div>
  </div>`;
}

function inicializarAnimacionesScroll() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".testimonial-card").forEach((card) => {
    observer.observe(card);
  });
}

function cargarTestimonios() {
  const contenedor = document.getElementById("testimonials-container");
  if (!contenedor) return;

  contenedor.innerHTML = obtenerTestimoniosAleatorios(3)
    .map(crearTestimonioHTML)
    .join("");
  setTimeout(inicializarAnimacionesScroll, 100);
}

function showToast(message, type = "success") {
  const toast = document.createElement("div");
  toast.classList.add("toast", type);
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => toast.classList.add("show"), 100);
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ===== DESPLAZAMIENTO SUAVE =====
function setupSmoothScroll() {
  // Botón del hero
  const heroBtn = document.querySelector('.hero .btn[href="#contact"]');
  if (heroBtn) {
    heroBtn.addEventListener("click", function (e) {
      e.preventDefault();
      document.getElementById("contact").scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }

  // Flecha scroll-down (si también quieres que no afecte la URL)
  const scrollDown = document.querySelector(".scroll-down");
  if (scrollDown) {
    scrollDown.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      document.getElementById(targetId).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  setupSmoothScroll();
  initScrollAnimations();
  setTimeout(cargarTestimonios, 500);

  const form = document.getElementById("contactForm");
  const loaderOverlay = document.getElementById("loaderOverlay");
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbwqN4pTF0tXwkPtHs2Ol2H4ghFhMq57KFifvey9RtuCnamOmeVSzpMcvEZYQ2cSpVmI/exec";

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    loaderOverlay.classList.add("active");

    const data = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      service: document.getElementById("service").value,
      message: document.getElementById("message").value,
    };

    fetch(scriptURL, {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        loaderOverlay.classList.remove("active");
        showToast("✅ Mensaje enviado correctamente.", "success");
        form.reset();
      })
      .catch((error) => {
        loaderOverlay.classList.remove("active");
        showToast("❌ Ocurrió un error. Intenta nuevamente.", "error");
      });
  });
});
