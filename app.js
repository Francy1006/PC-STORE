const categories = [
  {
    id: 0,
    name: "Todos",
    icon: "fa-border-all"
  },
  {
    id: 1,
    name: "Atención Médica",
    icon: "fa-stethoscope"
  },
  {
    id: 2,
    name: "Salud Dental",
    icon: "fa-tooth"
  },
  {
    id: 3,
    name: "Salud Visual",
    icon: "fa-eye"
  },
  {
    id: 4,
    name: "Rehabilitación y Kinesiología",
    icon: "fa-person-walking"
  },
  {
    id: 5,
    name: "Actividad Física",
    icon: "fa-dumbbell"
  },
  {
    id: 6,
    name: "Nutrición y Bienestar",
    icon: "fa-apple-whole"
  }
];

const providers = [
  {
    id: 1,
    name: "Centro Clínico Santiago",
    services: [1, 2, 3, 4],
    address: "Santa Rosa 1300, Santiago, Región Metropolitana",
    website: "https://www.centroclinicosantiago.cl/",
    email: "aromerohodge@gmail.com",
    phone: "+56 9 6844 4304",
    prevision: "Fonasa - Particular",
    logo: "assets/providers/centro_clinico_santiago/logo_ccsgto.png",
    cover: "assets/providers/centro_clinico_santiago/portada_1.png"
  },
  {
    id: 2,
    name: "Soroa Salud",
    services: [6],
    address: "Av. Los Leones 2255, Oficina 204, Providencia, Santiago",
    website: "https://www.soroa.cl/",
    email: "admin@soroa.cl",
    phone: "+56 9 3221 8393",
    prevision: "Particular - Boleta para reembolso",
    logo: "assets/providers/soroa/logo_soroa.png",
    cover: "assets/providers/soroa/cover_soroa.png"
  },
  {
    id: 3,
    name: "Novovision",
    services: [5],
    address: "Coronel Pereira 85, Las Condes, Santiago",
    website: "https://www.novovision.cl/",
    email: "katherine.pardo@novovision.cl",
    phone: "+56 9 5234 8829",
    prevision: "Atención gratuita con derivación",
    logo: "assets/providers/novovision/logo_novovision.png",
    cover: "assets/providers/novovision/cover_novovision.png"
  },
  {
    id: 4,
    name: "NutriBelife",
    services: [7, 8],
    address: "San Pío X 2460, Oficina 311, Providencia, Santiago",
    website: "https://www.centrobelife.cl/",
    email: "nutribelife@gmail.com",
    phone: "+56 9 3221 8910",
    prevision: "Fonasa - Particular",
    logo: "assets/providers/nutribelife/nutribelife_logo.png",
    cover: "assets/providers/nutribelife/cover_nutribelife.png"
  },
  {
    id: 5,
    name: "Clínica Nómade, Grupo Santa Blanca",
    services: [9],
    address: "Ebro 2743, Las Condes, Santiago",
    website: "https://www.gruposantablanca.cl/",
    email: "munir@clinicanomade.cl",
    phone: "+56 9 7631 5819",
    prevision: "",
    logo: "assets/providers/santablanca/santa_blanca_logo.png",
    cover: "assets/providers/santablanca/santablanca_cover.jpg"
  }
];

const services = [
  {
    id: 1,
    categoryId: 1,
    providerIds: [1],
    name: "Evaluación Médica Preventiva",
    shortDescription: "Evaluación médica con exámenes básicos y orientación preventiva de salud.",
    description: "Evaluación preventiva de salud que considera medición de peso, talla, índice de masa corporal y perímetro abdominal. El servicio cuenta con alternativas de atención mediante Fonasa y modalidad particular, con emisión de documentación para procesos de reembolso cuando corresponda.",
    modality: "empresa"
  },
  {
    id: 2,
    categoryId: 1,
    providerIds: [1],
    name: "Perfil Lipídico",
    shortDescription: "Evaluación preventiva de los niveles de colesterol y triglicéridos.",
    description: "Examen de perfil lipídico orientado a evaluar los niveles de colesterol y triglicéridos como apoyo en la prevención y detección temprana de factores de riesgo asociados a la salud cardiovascular. Disponible mediante atención Fonasa según corresponda.",
    modality: "empresa"
  },
  {
    id: 3,
    categoryId: 1,
    providerIds: [1],
    name: "Glicemia",
    shortDescription: "Examen para la detección precoz de alteraciones metabólicas.",
    description: "Examen de glicemia orientado a detectar tempranamente alteraciones metabólicas relacionadas con los niveles de glucosa en la sangre, apoyando el cuidado preventivo de la salud de los trabajadores. Disponible mediante atención Fonasa según corresponda.",
    modality: "empresa"
  },
  {
    id: 4,
    categoryId: 1,
    providerIds: [1],
    name: "Electrocardiograma",
    shortDescription: "Evaluación de la actividad eléctrica del corazón mediante electrocardiograma.",
    description: "Examen de electrocardiograma, también denominado ECG, orientado a registrar y evaluar la actividad eléctrica del corazón como apoyo en controles preventivos y evaluaciones de salud cardiovascular.",
    modality: "empresa"
  },
  {
    id: 5,
    categoryId: 3,
    providerIds: [3],
    name: "Chequeo Oftalmológico Gratuito para el Trabajador",
    shortDescription: "Evaluación visual preventiva gratuita para trabajadores.",
    description: "Chequeo oftalmológico que considera medición de agudeza visual, evaluación de refracción y toma de presión intraocular. Cuando el paciente requiere atención adicional, puede ser derivado a una óptica o a una consulta clínica para continuar su evaluación.",
    modality: "empresa"
  },
  {
    id: 6,
    categoryId: 6,
    providerIds: [2],
    name: "Evaluación Nutricional Integral",
    shortDescription: "Evaluación nutricional integral para grupos de entre 10 y 30 personas.",
    description: "Evaluación nutricional integral para grupos de entre 10 y 30 personas. Incluye análisis de composición visceral, evaluación de riesgo cardiovascular, escáner antioxidante, informe personalizado y recomendaciones nutricionales. El prestador emite documentación para procesos de reembolso cuando corresponda.",
    modality: "empresa"
  },
  {
    id: 7,
    categoryId: 6,
    providerIds: [4],
    name: "Evaluación Nutricional Modalidad Básica",
    shortDescription: "Evaluación nutricional preventiva para grupos de al menos 20 personas.",
    description: "Evaluación nutricional para grupos de al menos 20 personas. Considera medición de peso, talla, porcentaje de grasa y masa muscular, cálculo del índice de masa corporal, revisión de resultados y entrega de orientación alimentaria. Cuenta con alternativas de atención mediante Fonasa y modalidad particular, con documentación para reembolso cuando corresponda.",
    modality: "empresa"
  },
  {
    id: 8,
    categoryId: 6,
    providerIds: [4],
    name: "Evaluación Nutricional Modalidad Integral",
    shortDescription: "Programa nutricional personalizado para grupos de al menos 20 personas.",
    description: "Programa nutricional integral para grupos de al menos 20 personas. Incluye una pauta de alimentación personalizada para pacientes vegetarianos y personas con intolerancias, alergias o condiciones médicas. Considera mediciones, controles cada dos semanas durante dos meses, seguimiento profesional, ajustes de la pauta alimentaria y acompañamiento durante el proceso. Cuenta con alternativas de atención mediante Fonasa y modalidad particular, con documentación para reembolso cuando corresponda.",
    modality: "empresa"
  },
  {
    id: 9,
    categoryId: 2,
    providerIds: [5],
    name: "Evaluación Clínica y Procedimientos Dentales Básicos",
    shortDescription: "Evaluación dental preventiva con limpieza y procedimientos básicos.",
    description: "Evaluación clínica dental que incluye limpieza dental mediante profilaxis y destartraje simple, instrucción de higiene oral, aplicación de flúor barniz y entrega de un kit de higiene. Cuando corresponde, contempla derivación a interconsulta de ortodoncia y acceso a beneficios sobre el arancel de Grupo Santa Blanca. No incluye laboratorio, radiografías ni productos de estética facial.",
    modality: "empresa"
  }
];

const categoriesContainer = document.getElementById("categories");
const servicesGrid = document.getElementById("servicesGrid");
const searchInput = document.getElementById("searchInput");
const providersCarousel = document.getElementById("providersCarousel");
const providerDetail = document.getElementById("providerDetail");
const providersArea = document.getElementById("providersArea");

let selectedCategory = 0;

const fuse = new Fuse(services, {
  keys: ["name", "shortDescription", "description"],
  threshold: 0.35
});

function getProviderById(id) {
  return providers.find(provider => provider.id === id);
}

function getServiceProviders(service) {
  return service.providerIds
    .map(id => getProviderById(id))
    .filter(Boolean);
}

function getProviderServices(provider) {
  return services.filter(service =>
    provider.services.includes(service.id)
  );
}

function renderCategories() {
  categoriesContainer.innerHTML = "";

  categories.forEach(category => {
    categoriesContainer.innerHTML += `
      <button
        class="category-btn ${selectedCategory === category.id ? "active" : ""}"
        data-id="${category.id}"
        type="button"
      >
        <i class="fa-solid ${category.icon}"></i>
        <span>${category.name}</span>
      </button>
    `;
  });

  bindCategoryEvents();
}

function getServices() {
  let result = services;
  const text = searchInput.value.trim();

  if (selectedCategory !== 0) {
    result = result.filter(service => service.categoryId === selectedCategory);
  }

  if (text) {
    const search = fuse.search(text);
    const ids = search.map(x => x.item.id);

    result = result.filter(service => ids.includes(service.id));
  }

  return result;
}

function renderServices() {
  const result = getServices();

  servicesGrid.innerHTML = "";

  if (!result.length) {
    servicesGrid.innerHTML = `
      <div class="empty">
        No se encontraron servicios.
      </div>
    `;
    return;
  }

  result.forEach(service => {
    const category = categories.find(item => item.id === service.categoryId);
    const serviceProviders = getServiceProviders(service);

    servicesGrid.innerHTML += `
      <article class="service-card">

        <div class="service-card-top">
          <i class="fa-solid ${category.icon}"></i>
          <span>${category.name}</span>
        </div>

        <div class="service-card-body">

          <h3>${service.name}</h3>

          <p class="short-description">
            ${service.shortDescription}
          </p>

          <button
            class="toggle-btn"
            type="button"
            aria-expanded="false"
          >
            Ver más
            <i class="fa-solid fa-chevron-down"></i>
          </button>

          <div class="service-detail">

            <p>${service.description}</p>

            <div class="service-providers">

              <h4>Proveedor del servicio</h4>

              ${serviceProviders.map(provider => `
                <div class="provider-mini-card">

                  <img
                    src="${provider.logo}"
                    alt="${provider.name}"
                    loading="lazy">

                  <div class="provider-mini-info">

                    <strong>${provider.name}</strong>

                    <span>
                      <i class="fa-solid fa-location-dot"></i>
                      ${provider.address}
                    </span>

                    <a href="${provider.website}" target="_blank" rel="noopener">
                      <i class="fa-solid fa-globe"></i>
                      Sitio web
                    </a>

                    <a href="mailto:${provider.email}">
                      <i class="fa-solid fa-envelope"></i>
                      ${provider.email}
                    </a>

                    <a href="tel:${provider.phone.replaceAll(" ", "")}">
                      <i class="fa-solid fa-phone"></i>
                      ${provider.phone}
                    </a>

                    <span>
                        <i class="fa-solid fa-id-card"></i>
                        ${provider.prevision}
                    </span>

                  </div>

                </div>
              `).join("")}

            </div>

          </div>

        </div>

      </article>
    `;
  });

  bindCollapseEvents();
}

function renderProvidersCarousel() {
  providersCarousel.innerHTML = "";

  providers.forEach(provider => {
    providersCarousel.innerHTML += `
      <article
        class="provider-circle-card"
        data-provider-id="${provider.id}"
      >
        <div class="provider-circle">
          <img
            src="${provider.logo}"
            alt="${provider.name}"
            loading="lazy">
        </div>

        <h3>${provider.name}</h3>
      </article>
    `;
  });

  bindProviderEvents();
}

function renderProviderDetail(providerId) {
  const provider = providers.find(item => item.id === providerId);

  if (!provider) return;

  const providerServices = getProviderServices(provider);

  providerDetail.innerHTML = `
    <article class="provider-detail-inner-card">

      <button
        type="button"
        class="provider-close-btn"
        id="closeProviderDetail"
        aria-label="Cerrar detalle de proveedor"
      >
        <i class="fa-solid fa-xmark"></i>
      </button>

      <div
        class="provider-detail-logo ${provider.cover ? "has-cover" : ""}"
        ${provider.cover
      ? `style="background-image: url('${provider.cover}');"`
      : ""}
      >
        <img
          src="${provider.logo}"
          alt="${provider.name}">
      </div>

      <div class="provider-detail-content">

        <h3>${provider.name}</h3>

        <div class="provider-detail-info">

          <p>
            <i class="fa-solid fa-location-dot"></i>
            ${provider.address}
          </p>

          <a href="${provider.website}" target="_blank" rel="noopener">
            <i class="fa-solid fa-globe"></i>
            Sitio web
          </a>

          <a href="mailto:${provider.email}">
            <i class="fa-solid fa-envelope"></i>
            ${provider.email}
          </a>

          <a href="tel:${provider.phone.replaceAll(" ", "")}">
            <i class="fa-solid fa-phone"></i>
            ${provider.phone}
          </a>

          <p>
            <i class="fa-solid fa-id-card"></i>
            ${provider.prevision}
          </p>

        </div>

        <div class="provider-services-table">
          <table>
            <thead>
              <tr>
                <th>Servicios disponibles</th>
              </tr>
            </thead>

            <tbody>
              ${providerServices.map(service => `
                <tr>
                  <td>${service.name}</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>

      </div>

    </article>
  `;

  providerDetail.classList.add("show");
  providersArea.classList.add("provider-selected");

  document
    .getElementById("closeProviderDetail")
    .addEventListener("click", closeProviderDetail);

  if (window.innerWidth <= 600) {
    providerDetail.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
}

function closeProviderDetail() {
  providerDetail.classList.remove("show");
  providersArea.classList.remove("provider-selected");
  providerDetail.innerHTML = "";
}

function bindProviderEvents() {
  document.querySelectorAll(".provider-circle-card").forEach(card => {
    card.addEventListener("click", () => {
      renderProviderDetail(Number(card.dataset.providerId));
    });
  });
}

function bindCategoryEvents() {
  document.querySelectorAll(".category-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      selectedCategory = Number(btn.dataset.id);
      renderCategories();
      renderServices();
    });
  });
}

function bindCollapseEvents() {
  document.querySelectorAll(".toggle-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".service-card");
      const isOpen = card.classList.toggle("open");

      btn.setAttribute("aria-expanded", isOpen);

      btn.innerHTML = isOpen
        ? `Ver menos <i class="fa-solid fa-chevron-up"></i>`
        : `Ver más <i class="fa-solid fa-chevron-down"></i>`;
    });
  });
}

searchInput.addEventListener("input", renderServices);

renderCategories();
renderServices();
renderProvidersCarousel();

const slides = document.querySelectorAll(".hero-slide");
const indicators = document.querySelectorAll(".hero-indicator");

let currentSlide = 0;
let carouselInterval;

function changeSlide(nextIndex) {
  if (nextIndex === currentSlide) return;

  const current = slides[currentSlide];
  const next = slides[nextIndex];

  const movingForward =
    nextIndex > currentSlide ||
    (currentSlide === slides.length - 1 && nextIndex === 0);

  slides.forEach((slide, index) => {
    slide.classList.remove(
      "active",
      "move-left",
      "move-right"
    );

    if (index !== currentSlide && index !== nextIndex) {
      slide.style.transition = "none";
      slide.style.transform = movingForward
        ? "translateX(100%)"
        : "translateX(-100%)";
    }
  });

  current.style.transition = "transform .7s ease";
  next.style.transition = "none";

  current.style.transform = "translateX(0)";
  next.style.transform = movingForward
    ? "translateX(100%)"
    : "translateX(-100%)";

  next.offsetHeight;

  next.style.transition = "transform .7s ease";

  requestAnimationFrame(() => {
    current.style.transform = movingForward
      ? "translateX(-100%)"
      : "translateX(100%)";

    next.style.transform = "translateX(0)";
    next.classList.add("active");
  });

  indicators[currentSlide].classList.remove("active");
  indicators[nextIndex].classList.add("active");

  currentSlide = nextIndex;
}

function nextSlide() {
  const nextIndex = (currentSlide + 1) % slides.length;
  changeSlide(nextIndex);
}

function restartCarousel() {
  clearInterval(carouselInterval);
  carouselInterval = setInterval(nextSlide, 5000);
}

indicators.forEach(indicator => {
  indicator.addEventListener("click", () => {
    const nextIndex = Number(indicator.dataset.index);

    changeSlide(nextIndex);
    restartCarousel();
  });
});

carouselInterval = setInterval(nextSlide, 5000);