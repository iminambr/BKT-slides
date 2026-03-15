const deck = new Reveal({
  controls: false,
  progress: false,
  center: false,
  hash: true,
  history: false,
  transition: "none",
  backgroundTransition: "none",
  navigationMode: "linear",
  mouseWheel: false,
  width: 1440,
  height: 900,
  margin: 0.04,
});
const TIMELINE_MOTION_DELAY_MS = 0;
const TIMELINE_MOTION_TRANSITION = "980ms cubic-bezier(0.16, 1, 0.3, 1)";

const TIMELINE_DATA = [
  {
    id: "s02-timeline-2024q4",
    slug: "2024q4",
    label: "2024 Q4",
    summary: "Solicitud del primer proceso",
    caption:
      "Primera solicitud de orden de magnitud para un proceso del area de riesgos financieros. Hasta el momento inversion en evolutivos.",
    requesters: [
      {
        domain: "Arquitectura",
        owner: "Santi Villar",
        leads: ["Pablo Palacios"],
      },
    ],
    business: ["Riesgos Financieros"],
    metrics: {
      proposals: 1,
      production: 0,
      development: 1,
      team: 1,
      revenue: "8.000 EUR",
    },
    processes: ["Requerimientos Judiciales"],
  },
  {
    id: "s02-timeline-2025q1",
    slug: "2025q1",
    label: "2025 Q1",
    summary: "3 procesos lanzados",
    caption: "La demanda deja de venir de un solo punto y empieza a circular por varias areas.",
    requesters: [
      {
        domain: "Arquitectura",
        owner: "Santi Villar",
        leads: ["Pablo Palacios"],
      },
      {
        domain: "Nuevos Desarrollos",
        owner: "Jorge Rey",
        leads: ["Maria Sarang Lee"],
      },
    ],
    business: ["Riesgos Financieros", "Operaciones", "Seguros"],
    metrics: {
      proposals: 3,
      production: 1,
      development: 2,
      team: 2,
      revenue: "19.000 EUR",
    },
    processes: ["Requerimientos Judiciales", "Seguros Vida Ahorro", "Luxemburgo"],
  },
  {
    id: "s02-timeline-2025q2",
    slug: "2025q2",
    label: "2025 Q2",
    summary: "4 frentes en paralelo",
    caption: "La llegada se diversifica y aparecen varias lineas activas al mismo tiempo.",
    requesters: [
      {
        domain: "Arquitectura",
        owner: "Santi Villar",
        leads: ["Pablo Palacios"],
      },
      {
        domain: "Nuevos Desarrollos",
        owner: "Jorge Rey",
        leads: ["Maria Sarang Lee"],
      },
    ],
    business: ["Riesgos Financieros", "Operaciones", "Seguros", "Leasing", "Arquitectura"],
    metrics: {
      proposals: 4,
      production: 3,
      development: 3,
      team: 4,
      revenue: "40.000 EUR",
    },
    processes: [
      "Requerimientos Judiciales",
      "Seguros Vida Ahorro",
      "Luxemburgo",
      "Leasing alta disposiciones",
      "Cuentas tesoreras",
    ],
  },
  {
    id: "s02-timeline-2025q3",
    slug: "2025q3",
    label: "2025 Q3",
    summary: "Primer Proceso Appian + IA",
    caption: "Sumamos a la ultima direccion de Transformacion Digital",
    requesters: [
      {
        domain: "Arquitectura",
        owner: "Santi Villar",
        leads: ["Pablo Palacios"],
      },
      {
        domain: "Nuevos Desarrollos",
        owner: "Jorge Rey",
        leads: ["Maria Sarang Lee"],
      },
      {
        domain: "Procesos & IA Gen",
        owner: "Antonio Caballero",
        leads: ["Daniel Guzman"],
      },
    ],
    business: [
      "Riesgos Financieros",
      "Operaciones",
      "Seguros",
      "Leasing",
      "Arquitectura",
      "Asesoria Juridica",
      "Financiero",
    ],
    metrics: {
      proposals: 5,
      production: 4,
      development: 5,
      team: 4,
      revenue: "45.000 EUR",
    },
    processes: [
      "Requerimientos Judiciales",
      "Seguros Vida Ahorro",
      "Luxemburgo",
      "Leasing alta disposiciones",
      "Cuentas tesoreras",
      "Recibos y domiciliaciones",
      "Emision de cheques",
      "Bastanteos",
    ],
  },
  {
    id: "s02-timeline-2025q4",
    slug: "2025q4",
    label: "2025 Q4",
    summary: "Proveedor Appian Reconocido",
    caption:
      "El cierre refleja una capacidad instalada y un backlog compartido entre areas. Apostamos por ampliar en prevision de nuevo negocio.",
    requesters: [
      {
        domain: "Arquitectura",
        owner: "Santi Villar",
        leads: ["Pablo Palacios"],
      },
      {
        domain: "Nuevos Desarrollos",
        owner: "Jorge Rey",
        leads: ["Maria Sarang Lee"],
      },
      {
        domain: "Procesos & IA Gen",
        owner: "Antonio Caballero",
        leads: ["Daniel Guzman"],
      },
    ],
    business: [
      "Riesgos Financieros",
      "Operaciones",
      "Seguros",
      "Leasing",
      "Arquitectura",
      "Asesoria Juridica",
      "Financiero",
    ],
    metrics: {
      proposals: 4,
      production: 7,
      development: 4,
      team: 10,
      revenue: "105.000 EUR",
    },
    processes: [
      "Requerimientos Judiciales",
      "Seguros Vida Ahorro",
      "Luxemburgo",
      "Leasing alta disposiciones",
      "Cuentas tesoreras",
      "Recibos y domiciliaciones",
      "Emision de cheques",
      "Bastanteos",
      "Mantenimiento Datos Cliente",
    ],
  },
  {
    id: "s02-timeline-2026q1",
    slug: "2026q1",
    label: "2026 Q1",
    summary: "Procesos Core: Hipotecario y Embargos",
    caption:
      "Entramos en procesos core bancarios y expandimos a nuevos jefes de proyecto y nuevas areas del banco",
    requesters: [
      {
        domain: "Arquitectura",
        owner: "Santi Villar",
        leads: ["Pablo Palacios"],
      },
      {
        domain: "Nuevos Desarrollos",
        owner: "Jorge Rey",
        leads: ["Maria Sarang Lee", "Javier Gutierrez"],
      },
      {
        domain: "Procesos & IA Gen",
        owner: "Antonio Caballero",
        leads: ["Daniel Guzman", "Javier Rodriguez", "David Gil"],
      },
    ],
    business: [
      "Riesgos Financieros",
      "Operaciones",
      "Seguros",
      "Leasing",
      "Arquitectura",
      "Asesoria Juridica",
      "Financiero",
      "Marketing",
      "Cobros y Pagos",
      "Hipotecario",
    ],
    metrics: {
      proposals: "8",
      production: "9",
      development: "5",
      team: "12+2",
      revenue: "153.000 EUR",
    },
    processes: [
      "Requerimientos Judiciales",
      "Seguros Vida Ahorro",
      "Luxemburgo",
      "Leasing alta disposiciones",
      "Cuentas tesoreras",
      "Recibos y domiciliaciones",
      "Emision de cheques",
      "Bastanteos",
      "Mantenimiento Datos Cliente",
      "Gestion de embargos",
      "Cuentas Especiales Promotor",
      "Disputas",
      "Pagos y conciliaciones",
      "Creatividades",
    ],
  },
  {
    id: "s02-timeline-2026q2",
    slug: "2026q2",
    label: "2026 Q2",
    summary: "En camino a proveedor principal",
    caption:
      "Ampliamos la participacion en procesos con IA, y nos consolidamos como proveedor principal",
    requesters: [
      {
        domain: "Arquitectura",
        owner: "Santi Villar",
        leads: ["Pablo Palacios"],
      },
      {
        domain: "Nuevos Desarrollos",
        owner: "Jorge Rey",
        leads: ["Maria Sarang Lee", "Javier Gutierrez", "Maria Nieto"],
      },
      {
        domain: "Procesos & IA Gen",
        owner: "Antonio Caballero",
        leads: [
          "Daniel Guzman",
          "Javier Rodriguez",
          "David Gil",
          "Alberto Azorin",
          "Enrique Acedo",
        ],
      },
    ],
    business: [
      "Riesgos Financieros",
      "Operaciones",
      "Seguros",
      "Leasing",
      "Arquitectura",
      "Asesoria Juridica",
      "Financiero",
      "Marketing",
      "Cobros y Pagos",
      "Hipotecario",
    ],
    metrics: {
      proposals: "5*",
      production: "12*",
      development: "7*",
      team: "12+4*",
      revenue: "175.000 EUR",
    },
    processes: [
      "Requerimientos Judiciales",
      "Seguros Vida Ahorro",
      "Luxemburgo",
      "Leasing alta disposiciones",
      "Cuentas tesoreras",
      "Recibos y domiciliaciones",
      "Emision de cheques",
      "Bastanteos",
      "Mantenimiento Datos Cliente",
      "Gestion de embargos",
      "Cuentas Especiales Promotor",
      "Disputas",
      "Pagos y conciliaciones",
      "Creatividades",
      "Intercambio",
      "Pagos depositaria",
      "Bastanteos fase 2",
      "Alta y renovacion de colaboradores",
    ],
  },
];

const TIMELINE_AXIS_DATA = TIMELINE_DATA.map((quarter) => ({
  label: quarter.label,
  summary: quarter.summary,
}));

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function renderProgressValue(index) {
  const maxIndex = Math.max(TIMELINE_AXIS_DATA.length - 1, 1);
  return Math.max(index / maxIndex, 0.02).toFixed(3);
}

function normalizeTimelineRequester(group) {
  const owner = group.owner || group.people?.[0] || "";
  const leads = Array.isArray(group.leads)
    ? group.leads
    : Array.isArray(group.people)
      ? group.people.slice(1)
      : [];

  return {
    domain: group.domain,
    owner,
    leads,
  };
}

function getTimelineLeadCount(groups) {
  return groups.reduce(
    (count, group) => count + normalizeTimelineRequester(group).leads.length,
    0,
  );
}

function getTimelineDensityClasses(quarter) {
  const leadCount = getTimelineLeadCount(quarter.requesters);
  const classes = [];

  if (quarter.processes.length >= 12 || quarter.business.length >= 9 || leadCount >= 6) {
    classes.push("timeline-story-slide--dense");
  }

  if (quarter.processes.length >= 14 || leadCount >= 8) {
    classes.push("timeline-story-slide--dense-strong");
  }

  return classes.join(" ");
}

function renderTimelineSequence() {
  const slidesRoot = document.querySelector(".reveal .slides");
  const rail = document.querySelector(".story-rail");
  const introSlide = document.getElementById("s01-portada");
  const introDot = rail?.querySelector('[data-slide-target="s01-portada"]');

  if (!slidesRoot || !rail || document.getElementById(TIMELINE_DATA[0].id)) {
    return;
  }

  const railDot = document.createElement("button");
  railDot.className = "story-rail__dot";
  railDot.dataset.slideTarget = TIMELINE_DATA[0].id;
  railDot.dataset.slideGroup = "timeline-journey";
  railDot.type = "button";
  railDot.setAttribute("aria-label", "Ir a S02 Timeline");
  railDot.title = "S02";

  if (introDot) {
    introDot.insertAdjacentElement("afterend", railDot);
  } else {
    rail.prepend(railDot);
  }

  const renderRequesterLeads = (leads) => `
    <div class="timeline-requester-item__lead-list">
      ${leads
        .map(
          (lead) => `
            <span class="timeline-requester-item__lead-pill">${escapeHtml(lead)}</span>
          `,
        )
        .join("")}
    </div>
  `;

  const renderRequesterList = (groups) => {
    const leadCount = getTimelineLeadCount(groups);
    const listClass = leadCount >= 6 ? " timeline-requester-list--dense" : "";

    return `
      <ul class="timeline-requester-list timeline-requester-list--grid${listClass}">
        ${groups
          .map((group) => {
            const requester = normalizeTimelineRequester(group);
            const requesterId = escapeHtml(requester.domain).toLowerCase().replaceAll(" ", "-");

            return `
              <li class="timeline-requester-item" data-id="timeline-requester-${requesterId}">
                <div class="timeline-requester-item__top">
                  <span class="timeline-requester-item__domain">${escapeHtml(requester.domain)}</span>
                  <strong class="timeline-requester-item__owner">${escapeHtml(requester.owner)}</strong>
                </div>
                ${
                  requester.leads.length
                    ? `
                      <div class="timeline-requester-item__leads">
                        <span class="timeline-requester-item__lead-label">JP</span>
                        ${renderRequesterLeads(requester.leads)}
                      </div>
                    `
                    : ""
                }
              </li>
            `;
          })
          .join("")}
      </ul>
    `;
  };

  const renderMetricTiles = (metrics) => `
    <div class="timeline-detail-metrics">
      <div class="timeline-metric-chip">
        <span>Propuestas</span>
        <strong>${escapeHtml(metrics.proposals)}</strong>
      </div>
      <div class="timeline-metric-chip">
        <span>Produccion</span>
        <strong>${escapeHtml(metrics.production)}</strong>
      </div>
      <div class="timeline-metric-chip">
        <span>Desarrollo</span>
        <strong>${escapeHtml(metrics.development)}</strong>
      </div>
      <div class="timeline-metric-chip">
        <span>Equipo</span>
        <strong>${escapeHtml(metrics.team)}</strong>
      </div>
      <div class="timeline-metric-chip timeline-metric-chip--revenue">
        <span>Revenue</span>
        <strong>${escapeHtml(metrics.revenue)}</strong>
      </div>
    </div>
  `;

  const renderBusinessList = (items) => `
    <div class="timeline-pill-list${items.length >= 8 ? " timeline-pill-list--dense" : ""}">
      ${items
        .map(
          (item) => `
            <span class="timeline-data-pill timeline-data-pill--business">${escapeHtml(item)}</span>
          `,
        )
        .join("")}
    </div>
  `;

  const renderProcessList = (items) => `
    <ol class="timeline-process-list${items.length >= 12 ? " timeline-process-list--dense" : ""}">
      ${items
        .map(
          (item, itemIndex) => `
            <li class="timeline-process-item">
              <span class="timeline-process-item__index">${String(itemIndex + 1).padStart(2, "0")}</span>
              <span class="timeline-process-item__text">${escapeHtml(item)}</span>
            </li>
          `,
        )
        .join("")}
    </ol>
  `;

  const renderTimelineTrack = (activeIndex) =>
    `
        <div class="timeline-axis-shell">
          <div
            class="timeline-axis-track"
          >
        ${TIMELINE_AXIS_DATA.map(
          (quarter, markerIndex) => `
            <article
              class="timeline-axis-node${markerIndex === activeIndex ? " is-active" : ""} ${markerIndex % 2 === 0 ? "timeline-axis-node--top" : "timeline-axis-node--bottom"}"
              data-quarter-index="${markerIndex}"
            >
              ${
                quarter.summary
                  ? `<span class="timeline-axis-node__summary">${escapeHtml(quarter.summary)}</span>`
                  : ""
              }
              <span class="timeline-axis-node__dot"></span>
              <span class="timeline-axis-node__label">${escapeHtml(quarter.label)}</span>
            </article>
          `,
        ).join("")}
          </div>
        </div>
      `;

  const timelineMarkup = TIMELINE_DATA.map(
    (quarter, index) => `
      <section
        id="${quarter.id}"
        class="deck-slide timeline-story-slide timeline-step-slide animate-section ${getTimelineDensityClasses(quarter)}"
        data-rail-group="timeline-journey"
        data-timeline-index="${index}"
        data-slide-ref="S02"
        data-slide-label="Timeline"
        style="--timeline-from-index: ${index}; --timeline-to-index: ${index}; --progress-from: ${renderProgressValue(index)}; --progress-to: ${renderProgressValue(index)};"
      >
        <div class="slide-frame timeline-story">
          <div class="timeline-story__sticky">
            <div class="timeline-story__head">
              <div>
                <p class="eyebrow">Timeline</p>
                <h2 data-id="timeline-title">Como ha sido la historia</h2>
              </div>
              <div class="timeline-story__context" data-id="timeline-context">
                <span class="timeline-story__current-quarter">${escapeHtml(quarter.label)}</span>
                <p class="timeline-story__caption">${escapeHtml(quarter.caption)}</p>
              </div>
            </div>

            <div class="timeline-canvas" data-id="timeline-canvas">
              <div class="timeline-canvas__hud" data-id="timeline-hud">
                <span class="timeline-canvas__eyebrow">Recorrido activo</span>
                <strong>${escapeHtml(quarter.label)}</strong>
                <div class="timeline-canvas__progress">
                  <span></span>
                </div>
              </div>

              <div class="timeline-metric-strip" data-id="timeline-metric-strip">
                ${renderMetricTiles(quarter.metrics)}
              </div>

              <div class="timeline-canvas__viewport">
                ${renderTimelineTrack(index)}

                <article class="timeline-detail-card timeline-detail-card--requesters" data-id="timeline-card-requesters">
                  <div class="timeline-detail-card__head">
                    <span class="timeline-detail-card__label">Areas solicitantes</span>
                    <strong>${quarter.requesters.length} entradas</strong>
                  </div>
                  ${renderRequesterList(quarter.requesters)}
                  <div class="timeline-detail-section">
                    <div class="timeline-detail-subhead">
                      <span class="timeline-detail-card__label">Negocio</span>
                      <strong>${quarter.business.length} dominios</strong>
                    </div>
                    ${renderBusinessList(quarter.business)}
                  </div>
                </article>

                <article class="timeline-detail-card timeline-detail-card--processes" data-id="timeline-card-processes">
                  <div class="timeline-detail-card__head">
                    <span class="timeline-detail-card__label">Procesos</span>
                    <strong>${quarter.processes.length} activos</strong>
                  </div>
                  ${renderProcessList(quarter.processes)}
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    `,
  ).join("");

  if (introSlide) {
    introSlide.insertAdjacentHTML("afterend", timelineMarkup);
  } else {
    slidesRoot.insertAdjacentHTML("afterbegin", timelineMarkup);
  }
}

renderTimelineSequence();

const railDots = Array.from(document.querySelectorAll(".story-rail__dot"));
const slides = Array.from(document.querySelectorAll(".deck-slide"));
const fullscreenToggle = document.querySelector("[data-fullscreen-toggle]");
let activeSlide = null;
const teamRosterRoot = document.getElementById("team-roster-root");

const TEAM_ROSTER_DATA = {
  cross: ["Arturo Cercadillo", "Stefania Talpa", "Sofia Pons"],
  ia: ["Ramon Rodriguez", "Aina Caselles"],
  appianLeads: ["Jose Luis Boix", "Carlos Dominguez", "Gema Lopez"],
  appianDelivery: [
    "Ruben Blanca",
    "V. Javier Diaz",
    "Cesar Pinto",
    "Pablo Altes",
    "Tania Robledo",
    "Angelica Quaranta",
  ],
  hybrid: ["Mercedes Suarez"],
  architecture: ["Tomas Redondo"],
};

function mountTeamRoster() {
  if (!teamRosterRoot) {
    return;
  }

  const ReactInstance = window.React;
  const ReactDOMInstance = window.ReactDOM;

  if (!ReactInstance || !ReactDOMInstance) {
    console.warn("React no esta disponible para montar la slide de equipo.");
    return;
  }

  const h = ReactInstance.createElement;

  function PersonIcon() {
    return h(
      "svg",
      {
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
      },
      h("path", {
        d: "M12 12c2.76 0 5-2.24 5-5S14.76 2 12 2 7 4.24 7 7s2.24 5 5 5Zm0 2c-4.42 0-8 2.24-8 5v3h16v-3c0-2.76-3.58-5-8-5Z",
      }),
    );
  }

  function PersonCard({ name, tone, index }) {
    return h(
      "article",
      {
        className: `team-person-card team-person-card--${tone}`,
        style: {
          "--card-index": index,
        },
      },
      [
        h(
          "div",
          {
            className: "team-person-card__icon",
            key: `${name}-icon`,
          },
          h(PersonIcon),
        ),
        h(
          "div",
          {
            className: "team-person-card__name",
            key: `${name}-name`,
          },
          name,
        ),
      ],
    );
  }

  function renderPeople(people, tone, startIndex) {
    return people.map((name, offset) =>
      h(PersonCard, {
        key: `${tone}-${name}`,
        name,
        tone,
        index: startIndex + offset,
      }),
    );
  }

  function TeamRoster({ data }) {
    return h("div", { className: "team-roster-shell" }, [
      h(
        "div",
        {
          className: "team-board",
          key: "board",
          role: "img",
          "aria-label":
            "Mapa del equipo Bankinter por capacidades: cross, inteligencia artificial, Appian y arquitectura.",
        },
        [
          h(
            "div",
            {
              className: "team-band team-band--cross",
              key: "cross-band",
            },
            [
              h(
                "div",
                {
                  className: "team-band__label team-band__label--cross",
                  key: "cross-label",
                },
                "Cross",
              ),
              h(
                "div",
                {
                  className: "team-band__content",
                  key: "cross-content",
                },
                renderPeople(data.cross, "cross", 0),
              ),
            ],
          ),
          h(
            "div",
            {
              className: "team-board__main",
              key: "main",
            },
            [
              h(
                "div",
                {
                  className: "team-panel team-panel--ia",
                  key: "ia-panel",
                },
                [
                  h(
                    "div",
                    {
                      className: "team-panel__vertical team-panel__vertical--ia",
                      key: "ia-label",
                    },
                    "IA",
                  ),
                  h(
                    "div",
                    {
                      className: "team-ia-stack",
                      key: "ia-content",
                    },
                    renderPeople(data.ia, "ia", 3),
                  ),
                ],
              ),
              h(
                "div",
                {
                  className: "team-panel team-panel--appian",
                  key: "appian-panel",
                },
                [
                  h(
                    "div",
                    {
                      className: "team-panel__vertical team-panel__vertical--appian",
                      key: "appian-label",
                    },
                    "Appian",
                  ),
                  h(
                    "div",
                    {
                      className: "team-panel__content team-panel__content--appian",
                      key: "appian-content",
                    },
                    [
                      h(
                        "div",
                        {
                          className: "team-cluster team-cluster--leads",
                          key: "leads",
                        },
                        renderPeople(data.appianLeads, "lead", 5),
                      ),
                      h(
                        "div",
                        {
                          className: "team-grid",
                          key: "delivery",
                        },
                        renderPeople(data.appianDelivery, "delivery", 8),
                      ),
                      h(
                        "div",
                        {
                          className: "team-support-row",
                          key: "hybrid",
                        },
                        renderPeople(data.hybrid, "hybrid", 14),
                      ),
                    ],
                  ),
                ],
              ),
            ],
          ),
          h(
            "div",
            {
              className: "team-foundation",
              key: "foundation",
            },
            [
              h(
                "div",
                {
                  className: "team-foundation__label",
                  key: "foundation-label",
                },
                "ARQ",
              ),
              h(
                "div",
                {
                  className: "team-foundation__content",
                  key: "foundation-content",
                },
                [
                  h(
                    "div",
                    {
                      className: "team-foundation__card",
                      key: "foundation-card",
                    },
                    renderPeople(data.architecture, "arq", 15),
                  ),
                  h(
                    "p",
                    {
                      className: "team-foundation__note",
                      key: "foundation-note",
                    },
                    "Base de arquitectura e integracion que sostiene el delivery y la escalabilidad del modelo.",
                  ),
                ],
              ),
            ],
          ),
        ],
      ),
    ]);
  }

  const rosterElement = h(TeamRoster, { data: TEAM_ROSTER_DATA });

  if (typeof ReactDOMInstance.createRoot === "function") {
    ReactDOMInstance.createRoot(teamRosterRoot).render(rosterElement);
    return;
  }

  if (typeof ReactDOMInstance.render === "function") {
    ReactDOMInstance.render(rosterElement, teamRosterRoot);
  }
}

function injectSlideReferences() {
  slides.forEach((slide) => {
    const frame = slide.querySelector(".slide-frame");
    if (!frame || frame.querySelector(".slide-reference")) {
      return;
    }

    const ref = slide.dataset.slideRef || "";
    const label = slide.dataset.slideLabel || "";
    const badge = document.createElement("div");
    badge.className = "slide-reference";
    badge.setAttribute("aria-hidden", "true");
    badge.innerHTML = `
      <span class="slide-reference__id">${ref}</span>
      <span class="slide-reference__label">${label}</span>
    `;
    frame.prepend(badge);
  });
}

function animateCount(element) {
  if (element.dataset.animated === "true") {
    return;
  }

  if (element._countAnimationFrame) {
    cancelAnimationFrame(element._countAnimationFrame);
    element._countAnimationFrame = null;
  }

  const target = Number(element.dataset.countTo || "0");
  const prefix = element.dataset.countPrefix || "";
  const suffix = element.dataset.countSuffix || "";
  const format = element.dataset.countFormat || "";
  const duration = 1200;
  const startTime = performance.now();
  element.dataset.animated = "true";

  const formatCount = (value) => {
    if (format === "locale-es") {
      return new Intl.NumberFormat("es-ES").format(value);
    }

    return String(value);
  };

  function frame(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(target * eased);
    element.textContent = `${prefix}${formatCount(current)}${suffix}`;

    if (progress < 1) {
      element._countAnimationFrame = requestAnimationFrame(frame);
      return;
    }

    element._countAnimationFrame = null;
  }

  element._countAnimationFrame = requestAnimationFrame(frame);
}

function resetCount(element) {
  if (!element) {
    return;
  }

  if (element._countAnimationFrame) {
    cancelAnimationFrame(element._countAnimationFrame);
    element._countAnimationFrame = null;
  }

  const prefix = element.dataset.countPrefix || "";
  const suffix = element.dataset.countSuffix || "";
  element.dataset.animated = "false";
  element.textContent = `${prefix}${element.dataset.countFormat === "locale-es" ? "0" : "0"}${suffix}`;
}

function resetCounts(root) {
  if (!root) {
    return;
  }

  root.querySelectorAll(".count-up").forEach(resetCount);
}

function isTimelineSlide(slide) {
  return slide?.dataset.railGroup === "timeline-journey";
}

function getTimelineIndex(slide) {
  return Number(slide?.dataset.timelineIndex || "0");
}

function getTimelineMotionElements(slide) {
  if (!slide || !isTimelineSlide(slide)) {
    return { progress: null, track: null };
  }

  return {
    progress: slide.querySelector(".timeline-canvas__progress span"),
    track: slide.querySelector(".timeline-axis-track"),
  };
}

function getTimelineAxisStep(slide) {
  const rawValue = getComputedStyle(slide).getPropertyValue("--timeline-axis-step");
  const parsedValue = Number.parseFloat(rawValue);
  return Number.isFinite(parsedValue) ? parsedValue : 320;
}

function renderTimelineTrackTransform(slide, index) {
  return `translate3d(${getTimelineAxisStep(slide) * index * -1}px, 0, 0)`;
}

function applyTimelineVisualState(slide, index, transition = "none") {
  const { progress, track } = getTimelineMotionElements(slide);

  if (track) {
    track.style.transition = transition === "none" ? "none" : `transform ${transition}`;
    track.style.transform = renderTimelineTrackTransform(slide, index);
  }

  if (progress) {
    progress.style.transition = transition === "none" ? "none" : `transform ${transition}`;
    progress.style.transform = `scaleX(${renderProgressValue(index)})`;
  }
}

function clearTimelineMotion(slide) {
  if (!slide || !isTimelineSlide(slide)) {
    return;
  }

  slide.classList.remove("is-timeline-motion-active");

  if (slide._timelineMotionFrameA) {
    cancelAnimationFrame(slide._timelineMotionFrameA);
    slide._timelineMotionFrameA = null;
  }

  if (slide._timelineMotionFrameB) {
    cancelAnimationFrame(slide._timelineMotionFrameB);
    slide._timelineMotionFrameB = null;
  }

  if (slide._timelineMotionDelay) {
    clearTimeout(slide._timelineMotionDelay);
    slide._timelineMotionDelay = null;
  }

  applyTimelineVisualState(slide, getTimelineIndex(slide));
}

function setTimelineMotion(slide, fromIndex, toIndex) {
  if (!slide || !isTimelineSlide(slide)) {
    return;
  }

  slide.style.setProperty("--timeline-from-index", String(fromIndex));
  slide.style.setProperty("--timeline-to-index", String(toIndex));
  slide.style.setProperty("--progress-from", renderProgressValue(fromIndex));
  slide.style.setProperty("--progress-to", renderProgressValue(toIndex));
}

function syncTimelineMotion(currentSlide, previousSlide) {
  slides.forEach((slide) => {
    if (!isTimelineSlide(slide)) {
      return;
    }

    clearTimelineMotion(slide);

    const index = getTimelineIndex(slide);
    setTimelineMotion(slide, index, index);
    applyTimelineVisualState(slide, index);
  });

  if (!isTimelineSlide(currentSlide)) {
    return;
  }

  const currentIndex = getTimelineIndex(currentSlide);
  const previousIndex = isTimelineSlide(previousSlide)
    ? getTimelineIndex(previousSlide)
    : currentIndex;

  setTimelineMotion(currentSlide, previousIndex, currentIndex);
  applyTimelineVisualState(currentSlide, previousIndex);

  void currentSlide.offsetWidth;

  currentSlide._timelineMotionDelay = setTimeout(() => {
    currentSlide._timelineMotionDelay = null;
    currentSlide._timelineMotionFrameA = requestAnimationFrame(() => {
      currentSlide._timelineMotionFrameA = null;
      currentSlide._timelineMotionFrameB = requestAnimationFrame(() => {
        currentSlide._timelineMotionFrameB = null;
        currentSlide.classList.add("is-timeline-motion-active");
        applyTimelineVisualState(currentSlide, currentIndex, TIMELINE_MOTION_TRANSITION);
      });
    });
  }, TIMELINE_MOTION_DELAY_MS);
}

function syncRail(currentSlide) {
  const targetId = currentSlide?.id || "s01-portada";
  const targetGroup = currentSlide?.dataset.railGroup || "";

  railDots.forEach((dot) => {
    const matchesId = dot.dataset.slideTarget === targetId;
    const matchesGroup = targetGroup && dot.dataset.slideGroup === targetGroup;
    dot.classList.toggle("is-active", matchesId || matchesGroup);
  });
}

function markVisibleSlide(currentSlide) {
  slides.forEach((slide) => {
    const isCurrentSlide = slide === currentSlide;
    slide.classList.toggle("is-visible", isCurrentSlide);

    if (!isCurrentSlide) {
      resetCounts(slide);
    }
  });

  syncRail(currentSlide);
}

function animateVisibleCounts(root) {
  if (!root) {
    return;
  }

  root.querySelectorAll(".count-up").forEach((element) => {
    const fragment = element.closest(".fragment");
    if (fragment && !fragment.classList.contains("visible")) {
      return;
    }

    animateCount(element);
  });
}

function jumpToSlide(targetId) {
  const targetSlide = document.getElementById(targetId);
  if (!targetSlide) {
    return;
  }

  const indices = deck.getIndices(targetSlide);
  deck.slide(indices.h, indices.v, indices.f);
}

function syncFullscreenButton() {
  if (!fullscreenToggle) {
    return;
  }

  const isFullscreen = Boolean(document.fullscreenElement);
  document.body.classList.toggle("is-fullscreen", isFullscreen);
  fullscreenToggle.classList.toggle("is-active", isFullscreen);
  fullscreenToggle.textContent = isFullscreen
    ? "Salir de pantalla completa"
    : "Pantalla completa";
}

async function toggleFullscreen() {
  if (!fullscreenToggle) {
    return;
  }

  try {
    if (document.fullscreenElement) {
      await document.exitFullscreen();
    } else {
      await document.documentElement.requestFullscreen();
    }
  } catch (error) {
    console.error("No se pudo cambiar el modo pantalla completa.", error);
  } finally {
    syncFullscreenButton();
  }
}

railDots.forEach((dot) => {
  dot.addEventListener("click", () => {
    jumpToSlide(dot.dataset.slideTarget);
  });
});

if (fullscreenToggle) {
  fullscreenToggle.addEventListener("click", toggleFullscreen);
  document.addEventListener("fullscreenchange", syncFullscreenButton);
}

mountTeamRoster();

deck.initialize().then(() => {
  injectSlideReferences();
  syncFullscreenButton();
  slides.forEach(resetCounts);
  const currentSlide = deck.getCurrentSlide();
  syncTimelineMotion(currentSlide, null);
  markVisibleSlide(currentSlide);
  animateVisibleCounts(currentSlide);
  activeSlide = currentSlide;
  slides.forEach((slide) => {
    slide.querySelectorAll(".fragment").forEach((fragment, index) => {
      fragment.style.transitionDelay = `${index * 80}ms`;
    });
  });
});

deck.on("slidechanged", (event) => {
  syncTimelineMotion(event.currentSlide, activeSlide);
  markVisibleSlide(event.currentSlide);
  animateVisibleCounts(event.currentSlide);
  activeSlide = event.currentSlide;
});

deck.on("fragmentshown", (event) => {
  animateVisibleCounts(event.fragment);
});

deck.on("fragmenthidden", (event) => {
  resetCounts(event.fragment);
});
