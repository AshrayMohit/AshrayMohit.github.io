/*
 * EDITING THE ARCHIVE
 * Add, remove, or reorder entries in WORK below. The page and tab counts update
 * automatically. Use a real URL for `link`; leave it blank to show a status label.
 */
const WORK = {
  publications: [
    {
      year: "2026",
      status: "Flow, Turbulence and Combustion",
      title: "Impact of turbulence on combustion performance in non-assist waste gas flares",
      description: "A. Mohit, J.E. Stolzman, M.S. Wooldridge, and J. Capecelatro. Volume 116, Article 6.",
      tags: [],
      link: "https://link.springer.com/article/10.1007/s10494-025-00714-y",
      linkLabel: "Read publication",
      featured: true
    },
    {
      year: "2026",
      status: "Fuel",
      title: "Effect of nozzle geometry on combustion efficiency and blowout in non-assist flares",
      description: "A. Mohit, J.E. Stolzman, M. Wooldridge, and J. Capecelatro. Volume 411, 137970.",
      tags: [],
      link: "https://www.sciencedirect.com/science/article/pii/S0016236125036968",
      linkLabel: "Read publication"
    },
    {
      year: "2025",
      status: "Applications in Energy and Combustion Science",
      title: "So, you want to measure flare emissions? Challenges and opportunities for quantifying utility pipe flare performance",
      description: "M. Wooldridge, J.E. Stolzman, A. Mohit, J. Capecelatro, et al. Article 100448.",
      tags: [],
      link: "https://www.sciencedirect.com/science/article/pii/S2666352X25001293",
      linkLabel: "Read publication"
    },
    {
      year: "2025",
      status: "Journal of the Air & Waste Management Association",
      title: "Effects of crosswind and shroud geometry on performance of low-flow, nonassisted flares",
      description: "J.E. Stolzman, A. Mohit, L. Gutierrez, J. Long, J. Brysch, J. Capecelatro, and M. Wooldridge.",
      tags: [],
      link: "https://www.tandfonline.com/doi/full/10.1080/10962247.2025.2566810",
      linkLabel: "Read publication"
    },
    {
      year: "2022",
      status: "Journal of Aerospace Engineering",
      title: "Development of a novel autonomous space-debris collision-avoidance system for uncrewed spacecraft",
      description: "M. Sarkar, S. Barad, A. Mohit, and M. Ganesan. Volume 236(14), pp. 2940–2952.",
      tags: [],
      link: "https://journals.sagepub.com/doi/full/10.1177/09544100211072321",
      linkLabel: "Read publication"
    },
    {
      year: "2026",
      status: "Combustion and Flame · In preparation",
      title: "Comparison of the flamelet progress variable and thickened flame models for LES of turbulent combustion",
      description: "A. Mohit, M. Wooldridge, and J. Capecelatro.",
      tags: [],
      link: "",
      linkLabel: "Manuscript in preparation"
    },
    {
      year: "2026",
      status: "Computer Physics Communications · In preparation",
      title: "An open-source particle-resolved direct numerical simulation framework for adsorption in packed-bed reactors",
      description: "R. Grawe, A. Mohit, and J. Capecelatro.",
      tags: [],
      link: "",
      linkLabel: "Manuscript in preparation"
    },
    {
      year: "2026",
      status: "Chemical Engineering Journal · In preparation",
      title: "Effect of turbulence and particle shape in adsorption for packed-bed reactors",
      description: "R. Grawe, A. Mohit, and J. Capecelatro.",
      tags: [],
      link: "",
      linkLabel: "Manuscript in preparation"
    },
    {
      year: "2026",
      status: "AIAA Journal · In preparation",
      title: "Turbulence model validation for the BeVERLI Hill: Part I — Surface comparison",
      description: "C. Roy et al.",
      tags: [],
      link: "",
      linkLabel: "Manuscript in preparation"
    },
    {
      year: "2026",
      status: "AIAA Journal · In preparation",
      title: "Turbulence model validation for the BeVERLI Hill: Part II — Field comparison",
      description: "C. Roy et al.",
      tags: [],
      link: "",
      linkLabel: "Manuscript in preparation"
    }
  ],
  software: [
    {
      year: "2026",
      status: "Research code",
      title: "Low-Mach variable density Flamelet Progress Variable Approach Solver",
      description: "A custom OpenFOAM solver combining variable-density projection methods, kinetic-energy-preserving discretization, and FPVA.",
      tags: [],
      link: "",
      linkLabel: "Repository in preparation",
    },
    {
      year: "2026",
      status: "Research code",
      title: "Low-Mach thickened-flame solver",
      description: "A custom OpenFOAM solver combining variable-density projection methods, kinetic-energy-preserving discretization, and dynamic thickened-flame modeling.",
      tags: [],
      link: "",
      linkLabel: "Repository in preparation",
      featured: true
    },
    {
      year: "2026",
      status: "Solver development",
      title: "Compressible reacting-flow tools",
      description: "OpenFOAM extensions for detailed-chemistry methane–oxygen simulations, numerical schlieren analysis, and micro-combustor studies.",
      tags: [],
      link: "",
      linkLabel: "Repository in preparation"
    },
    {
      year: "2026",
      status: "Multiphysics",
      title: "Particle-resolved adsorption solver",
      description: "A coupled species, heat-transfer, and surface-sorption framework for direct simulation of gas transport through packed beds.",
      tags: [],
      link: "",
      linkLabel: "Repository in preparation"
    }
  ],
  presentations: [
    {
      year: "2026",
      status: "Conference talk",
      title: "Comparison of the flamelet progress variable and thickened flame models for LES of turbulent combustion",
      description: "Central States Section of the Combustion Institute Spring Technical Meeting.",
      tags: [],
      link: "",
      linkLabel: "Slides available on request",
      featured: true
    },
    {
      year: "2025",
      status: "AIChE Annual Meeting",
      title: "The impact of turbulence on adsorption in packed-bed reactors",
      description: "R. Grawe, A. Mohit, and J. Capecelatro.",
      tags: [],
      link: "",
      linkLabel: "Conference presentation"
    },
    {
      year: "2025",
      status: "U.S. National Combustion Meeting",
      title: "Impact of crosswind turbulence on combustion performance in non-assist flares",
      description: "A. Mohit, J.E. Stolzman, M. Wooldridge, and J. Capecelatro.",
      tags: [],
      link: "",
      linkLabel: "Conference presentation"
    },
    {
      year: "2024",
      status: "APS Division of Fluid Dynamics",
      title: "The impact of nozzle shape on mixing, combustion efficiency, and flame blowout velocity",
      description: "A. Mohit, J.E. Stolzman, M. Wooldridge, and J. Capecelatro.",
      tags: [],
      link: "https://ui.adsabs.harvard.edu/abs/2024APS..DFDL34005M/abstract",
      linkLabel: "Conference presentation"
    },
    {
      year: "2024",
      status: "American Flame Research Committee",
      title: "Effects of crosswind turbulence on the combustion efficiency of non-assist waste gas flares",
      description: "A. Mohit, J.E. Stolzman, M. Wooldridge, and J. Capecelatro.",
      tags: [],
      link: "https://afrc.net/papers/2024/1%20-%20Effects_of_crosswind_turbulence_on_the_combustion_efficiency_of_non_assist_waste_gas_flares_Mohit.pdf",
      linkLabel: "Read paper"
    },
    {
      year: "2024",
      status: "American Flame Research Committee",
      title: "Non-assisted flare performance at low-flow conditions",
      description: "J.E. Stolzman, A. Mohit, J. Capecelatro, and M. Wooldridge.",
      tags: [],
      link: "https://afrc.net/papers/2024/3%20-%20Non-assisted%20Flare%20Performance%20at%20Low-flow%20(100%20MSCFD)%20Conditions_%20Stolzman.pdf",
      linkLabel: "Read paper"
    },
    {
      year: "2024",
      status: "International Gas Union Conference",
      title: "New challenges in waste gas flaring in upstream oil and gas",
      description: "J.E. Stolzman, A. Mohit, J. Capecelatro, and M. Wooldridge.",
      tags: [],
      link: "https://www.researchgate.net/profile/Jenna-Stolzman/publication/381343852_New_challenges_in_waste_gas_flaring_in_upstream_oil_and_gas/links/6669d8b685a4ee7261bf22fa/New-challenges-in-waste-gas-flaring-in-upstream-oil-and-gas.pdf",
      linkLabel: "Read paper"
    },
    {
      year: "2023",
      status: "APS Division of Fluid Dynamics",
      title: "Optimizing nozzle designs to improve upstream turbulent mixing and downstream combustion efficiency in flares",
      description: "A. Mohit, J.E. Stolzman, M. Wooldridge, and J. Capecelatro.",
      tags: [],
      link: "https://meetings.aps.org/Meeting/DFD23/Session/A40.7",
      linkLabel: "Conference presentation"
    }
  ]
};

const workGrid = document.querySelector("#work-grid");
const filterButtons = [...document.querySelectorAll("[data-filter]")];

function renderWork(category) {
  const items = WORK[category];
  workGrid.innerHTML = items.map((item, index) => {
    const disabled = !item.link;
    const link = item.link || "#";
    return `
      <article class="work-card ${item.featured ? "work-card-accent" : ""}" style="--delay:${index * 70}ms">
        <div class="work-meta"><span>${item.status}</span><span>${item.year}</span></div>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <div class="work-card-footer">
          <div class="work-card-tags">${item.tags.map(tag => `<span>${tag}</span>`).join("")}</div>
          <a class="work-card-link" href="${link}" ${disabled ? 'aria-disabled="true" tabindex="-1"' : 'target="_blank" rel="noreferrer"'}>${item.linkLabel} ${disabled ? "" : "↗"}</a>
        </div>
      </article>`;
  }).join("");
}

Object.entries(WORK).forEach(([category, items]) => {
  const counter = document.querySelector(`[data-count="${category}"]`);
  if (counter) counter.textContent = String(items.length).padStart(2, "0");
});

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(item => item.setAttribute("aria-selected", "false"));
    button.setAttribute("aria-selected", "true");
    renderWork(button.dataset.filter);
  });

  button.addEventListener("keydown", event => {
    if (!["ArrowLeft", "ArrowRight"].includes(event.key)) return;
    event.preventDefault();
    const current = filterButtons.indexOf(button);
    const direction = event.key === "ArrowRight" ? 1 : -1;
    const next = filterButtons[(current + direction + filterButtons.length) % filterButtons.length];
    next.focus();
    next.click();
  });
});

renderWork("publications");

const header = document.querySelector("[data-header]");
const menuButton = document.querySelector("[data-menu-button]");
const nav = document.querySelector("[data-nav]");

function updateHeader() {
  header.classList.toggle("scrolled", window.scrollY > 40);
}
updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

menuButton.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!open));
  nav.classList.toggle("open", !open);
});

nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  menuButton.setAttribute("aria-expanded", "false");
  nav.classList.remove("open");
}));

document.querySelectorAll("[data-gallery-target]").forEach(button => {
  button.addEventListener("click", () => {
    const gallery = document.querySelector(`#${button.dataset.galleryTarget}`);
    const card = gallery?.querySelector(".media-card, .figure-card");
    if (!gallery || !card) return;
    const gap = parseFloat(getComputedStyle(gallery).gap) || 12;
    const direction = Number(button.dataset.galleryDirection) || 1;
    gallery.scrollBy({ left: direction * (card.getBoundingClientRect().width + gap), behavior: "smooth" });
  });
});

const galleryVideos = document.querySelectorAll(".media-video-grid video");
const videoObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      entry.target.play().catch(() => {});
    } else {
      entry.target.pause();
    }
  });
}, { threshold: 0.5 });
galleryVideos.forEach(video => videoObserver.observe(video));

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    revealObserver.unobserve(entry.target);
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(element => revealObserver.observe(element));
document.querySelector("[data-year]").textContent = new Date().getFullYear();

// Lightweight canvas sketch of a reacting jet in crossflow.
const canvas = document.querySelector("#flow-canvas");
const context = canvas.getContext("2d", { alpha: false });
let particles = [];
let frame = 0;
let animationId;

function resizeCanvas() {
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  const rect = canvas.getBoundingClientRect();
  canvas.width = Math.round(rect.width * ratio);
  canvas.height = Math.round(rect.height * ratio);
  context.setTransform(ratio, 0, 0, ratio, 0, 0);
  particles = [];
}

function seedParticle(width, height, initial = false) {
  const baseY = height * 0.76;
  const age = initial ? Math.random() * 180 : 0;
  return {
    x: width * 0.06 + age * 1.55,
    y: baseY - Math.pow(age / 180, 0.73) * height * 0.55 + (Math.random() - 0.5) * (8 + age * 0.12),
    age,
    life: 145 + Math.random() * 95,
    speed: 1.05 + Math.random() * 1.45,
    drift: Math.random() * Math.PI * 2,
    size: 0.7 + Math.random() * 2.5,
    heat: Math.random()
  };
}

function drawFlow() {
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  context.fillStyle = "rgba(11, 27, 24, 0.20)";
  context.fillRect(0, 0, width, height);

  // Inlet/nozzle.
  context.fillStyle = "rgba(225, 234, 228, 0.28)";
  context.fillRect(width * 0.02, height * 0.74, width * 0.07, 3);
  context.fillRect(width * 0.02, height * 0.84, width * 0.07, 3);

  if (particles.length < Math.min(720, Math.round(width * 1.3))) {
    for (let i = 0; i < 7; i += 1) particles.push(seedParticle(width, height));
  }

  particles.forEach(particle => {
    particle.age += particle.speed;
    const progress = particle.age / particle.life;
    particle.x += particle.speed * (1 + progress * 0.78);
    particle.y -= particle.speed * (0.52 + Math.max(0, 1 - progress) * 1.5);
    particle.y += Math.sin(frame * 0.025 + particle.drift + particle.x * 0.025) * (0.35 + progress * 1.35);
    particle.x += Math.cos(frame * 0.02 + particle.drift + particle.y * 0.015) * 0.45;

    const alpha = Math.sin(Math.min(1, progress) * Math.PI) * 0.78;
    const hue = particle.heat > 0.72 ? 10 : particle.heat > 0.28 ? 78 : 168;
    context.beginPath();
    context.fillStyle = `hsla(${hue}, 82%, ${hue === 78 ? 63 : 58}%, ${alpha})`;
    context.arc(particle.x, particle.y, particle.size * (1 + progress * 0.45), 0, Math.PI * 2);
    context.fill();
  });

  particles = particles.filter(particle => particle.age < particle.life && particle.x < width + 30 && particle.y > -30);
  frame += 1;
  animationId = requestAnimationFrame(drawFlow);
}

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
resizeCanvas();
for (let i = 0; i < 360; i += 1) particles.push(seedParticle(canvas.clientWidth, canvas.clientHeight, true));
drawFlow();

let resizeTimer;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(resizeCanvas, 120);
}, { passive: true });

document.addEventListener("visibilitychange", () => {
  if (document.hidden) cancelAnimationFrame(animationId);
  else drawFlow();
});
