/* ==========================================================
   PORTFOLIO INTERACTIVE LOGIC & DYNAMIC CV RENDERER
   ========================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const data = typeof PORTFOLIO_DATA !== 'undefined' ? PORTFOLIO_DATA : null;

  initTheme();
  if (data) {
    renderPersonalInfo(data);
    renderStats(data.stats);
    renderEducation(data.education);
    renderWorkExperience(data.workExperience);
    renderExtracurricular(data.extracurricular);
    renderSkills(data.skills);
    renderHonors(data.honors);
    renderProjects(data.projects);
    renderReferences(data.references);
    initTypingEffect(data.hero.typedRoles);
  }

  initNavbar();
  initProjectFilters(data ? data.projects : []);
  initContactForm();
  initIntersectionObserver();
  initBackgroundCanvas();
});

/* --- Theme Management --- */
function initTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  const storedTheme = localStorage.getItem('theme') || 'dark';

  document.documentElement.setAttribute('data-theme', storedTheme);
  updateThemeIcon(storedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateThemeIcon(newTheme);
    });
  }
}

function updateThemeIcon(theme) {
  const themeIcon = document.querySelector('#theme-toggle i');
  if (themeIcon) {
    themeIcon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
  }
}

/* --- Render Personal Info --- */
function renderPersonalInfo(data) {
  const { personal, hero } = data;

  const logoName = document.getElementById('logo-name');
  if (logoName) logoName.textContent = personal.name;

  const heroBadge = document.getElementById('hero-badge');
  if (heroBadge) heroBadge.innerHTML = hero.badge;

  const heroTitleName = document.getElementById('hero-title-name');
  if (heroTitleName) heroTitleName.textContent = personal.name;

  const heroDesc = document.getElementById('hero-desc');
  if (heroDesc) heroDesc.textContent = personal.bio;

  const avatarName = document.getElementById('avatar-name');
  if (avatarName) avatarName.textContent = personal.name;

  const avatarTitle = document.getElementById('avatar-title');
  if (avatarTitle) avatarTitle.textContent = personal.headline;

  const availabilityText = document.getElementById('availability-text');
  if (availabilityText) availabilityText.textContent = personal.availability;

  // Contact Section Details
  const contactEmail = document.getElementById('contact-email');
  if (contactEmail) contactEmail.textContent = personal.email;

  const contactPhone = document.getElementById('contact-phone');
  if (contactPhone) contactPhone.textContent = personal.phone;

  const contactLocation = document.getElementById('contact-location');
  if (contactLocation) contactLocation.textContent = personal.location;

  // Social Icons
  const socialContainers = document.querySelectorAll('.social-links');
  socialContainers.forEach(container => {
    container.innerHTML = `
      <a href="${personal.github}" target="_blank" rel="noopener" class="social-icon" title="GitHub"><i class="fab fa-github"></i></a>
      <a href="${personal.linkedin}" target="_blank" rel="noopener" class="social-icon" title="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
      <a href="mailto:${personal.email}" class="social-icon" title="Email"><i class="fas fa-envelope"></i></a>
      <a href="tel:${personal.phone}" class="social-icon" title="Phone"><i class="fas fa-phone-alt"></i></a>
    `;
  });

  const resumeBtn = document.getElementById('resume-btn');
  if (resumeBtn && personal.resumeUrl) {
    resumeBtn.setAttribute('href', personal.resumeUrl);
  }
}

/* --- Typing Effect --- */
function initTypingEffect(roles) {
  const typingElement = document.getElementById('hero-typing');
  if (!typingElement || !roles || roles.length === 0) return;

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentRole = roles[roleIndex];
    if (isDeleting) {
      charIndex--;
      typingElement.textContent = currentRole.substring(0, charIndex);
    } else {
      charIndex++;
      typingElement.textContent = currentRole.substring(0, charIndex);
    }

    let delta = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === currentRole.length) {
      delta = 1800;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      delta = 400;
    }

    setTimeout(type, delta);
  }

  type();
}

/* --- Render Stats --- */
function renderStats(stats) {
  const statsContainer = document.getElementById('stats-grid');
  if (!statsContainer || !stats) return;

  statsContainer.innerHTML = stats.map(s => `
    <div class="stat-card">
      <div class="stat-number">${s.value}</div>
      <div class="stat-label">${s.label}</div>
    </div>
  `).join('');
}

/* --- Render Education --- */
function renderEducation(education) {
  const container = document.getElementById('education-grid');
  if (!container || !education) return;

  container.innerHTML = education.map(edu => `
    <div class="education-card">
      <div class="edu-badge"><i class="fas fa-graduation-cap"></i> ${edu.period}</div>
      <h3 class="edu-institution">${edu.institution}</h3>
      <div class="edu-degree">${edu.degree}</div>
      <div class="edu-result"><i class="fas fa-award"></i> ${edu.result}</div>
      <div class="edu-location"><i class="fas fa-map-marker-alt"></i> ${edu.location}</div>
      <p class="edu-details">${edu.details}</p>
    </div>
  `).join('');
}

/* --- Render Work Experience --- */
function renderWorkExperience(experience) {
  const container = document.getElementById('work-experience-list');
  if (!container || !experience) return;

  container.innerHTML = experience.map(work => `
    <div class="experience-card">
      <div class="exp-header">
        <div>
          <h3 class="exp-role">${work.role}</h3>
          <h4 class="exp-company"><i class="fas fa-briefcase"></i> ${work.company}</h4>
        </div>
        <div class="exp-meta">
          <span class="exp-period">${work.period}</span>
          <span class="exp-location"><i class="fas fa-map-marker-alt"></i> ${work.location}</span>
        </div>
      </div>
      <ul class="exp-bullets">
        ${work.highlights.map(h => `<li><i class="fas fa-check-circle"></i> ${h}</li>`).join('')}
      </ul>
    </div>
  `).join('');
}

/* --- Render Extracurricular & Leadership --- */
function renderExtracurricular(activities) {
  const container = document.getElementById('extracurricular-timeline');
  if (!container || !activities) return;

  container.innerHTML = activities.map(act => `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-card">
        <div class="timeline-period">${act.period}</div>
        <h3 class="timeline-role">${act.role}</h3>
        <div class="timeline-org"><i class="fas fa-users"></i> ${act.organization}</div>
        <ul class="exp-bullets" style="margin-top:0.75rem;">
          ${act.highlights.map(h => `<li><i class="fas fa-angle-right"></i> ${h}</li>`).join('')}
        </ul>
      </div>
    </div>
  `).join('');
}

/* --- Render Skills --- */
function renderSkills(skills) {
  const skillsContainer = document.getElementById('skills-container');
  if (!skillsContainer || !skills) return;

  const categories = [
    { title: "Technical & AI Languages", icon: "fas fa-code", items: skills.technical },
    { title: "Software & Digital Tools", icon: "fas fa-desktop", items: skills.softwares },
    { title: "Leadership & Management Skills", icon: "fas fa-tasks", items: skills.softSkills }
  ];

  skillsContainer.innerHTML = categories.map(cat => `
    <div class="skill-category-card">
      <h3 class="category-title"><i class="${cat.icon}"></i> ${cat.title}</h3>
      <div class="skill-list">
        ${(cat.items || []).map(skill => `
          <div class="skill-item">
            <div class="skill-item-header">
              <span class="skill-name"><i class="${skill.icon}"></i> ${skill.name}</span>
              <span class="skill-level-text">${skill.level}</span>
            </div>
            <div class="progress-bar-bg">
              <div class="progress-bar-fill" data-level="${skill.level}"></div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');

  // Spoken languages tag render
  const langContainer = document.getElementById('spoken-languages');
  if (langContainer && skills.spokenLanguages) {
    langContainer.innerHTML = skills.spokenLanguages.map(l => `
      <span class="language-badge">${l.flag} ${l.name}</span>
    `).join('');
  }
}

/* --- Render Honors & Awards --- */
function renderHonors(honors) {
  const container = document.getElementById('honors-grid');
  if (!container || !honors) return;

  container.innerHTML = honors.map(h => `
    <div class="honor-card">
      <div class="honor-icon"><i class="${h.icon}"></i></div>
      <div class="honor-year">${h.year}</div>
      <h3 class="honor-title">${h.title}</h3>
      <p class="honor-org">${h.organization}</p>
    </div>
  `).join('');
}

/* --- Render Projects --- */
function renderProjects(projects) {
  const projectsGrid = document.getElementById('projects-grid');
  if (!projectsGrid || !projects) return;

  projectsGrid.innerHTML = projects.map(p => `
    <div class="project-card" data-category="${p.category}">
      <div class="project-img-wrapper">
        <img src="${p.image}" alt="${p.title}" class="project-img" loading="lazy">
      </div>
      <div class="project-content">
        <div class="project-tags">
          ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
        <h3 class="project-title">${p.title}</h3>
        <p class="project-desc">${p.description}</p>
        <div class="project-links">
          <button class="btn btn-secondary btn-sm" onclick="openProjectModal('${p.id}')">
            <i class="fas fa-info-circle"></i> Details
          </button>
          <a href="${p.githubUrl}" target="_blank" rel="noopener" class="btn btn-primary btn-sm">
            <i class="fab fa-github"></i> Repository
          </a>
        </div>
      </div>
    </div>
  `).join('');
}

/* --- Render References --- */
function renderReferences(references) {
  const container = document.getElementById('references-grid');
  if (!container || !references) return;

  container.innerHTML = references.map(r => `
    <div class="reference-card">
      <div class="ref-icon"><i class="${r.icon}"></i></div>
      <h3 class="ref-name">${r.name}</h3>
      <div class="ref-title">${r.title}</div>
      <div class="ref-org">${r.organization}</div>
      <a href="mailto:${r.email}" class="ref-email"><i class="fas fa-envelope"></i> ${r.email}</a>
    </div>
  `).join('');
}

/* --- Project Filtering --- */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      const projectCards = document.querySelectorAll('.project-card');

      projectCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* --- Project Modal --- */
window.openProjectModal = function(id) {
  if (typeof PORTFOLIO_DATA === 'undefined') return;
  const project = PORTFOLIO_DATA.projects.find(p => p.id === id);
  if (!project) return;

  const modalOverlay = document.getElementById('project-modal');
  const modalBody = document.getElementById('modal-body');

  if (!modalOverlay || !modalBody) return;

  modalBody.innerHTML = `
    <div>
      <img src="${project.image}" alt="${project.title}" style="width:100%; height:240px; object-fit:cover; border-radius: 12px; margin-bottom: 1rem;">
      <h2 style="font-size: 1.6rem; margin-bottom: 0.5rem; font-weight:800;">${project.title}</h2>
      <div style="display:flex; gap:0.5rem; margin-bottom: 1rem; flex-wrap:wrap;">
        ${project.tags.map(t => `<span class="tag">${t}</span>`).join('')}
      </div>
      <p style="color: var(--text-muted); font-size:1rem; margin-bottom: 1.5rem;">${project.description}</p>
      
      <h4 style="font-size: 1.05rem; margin-bottom: 0.75rem;">Key Highlights:</h4>
      <ul style="list-style: none; margin-bottom: 1.5rem; padding-left:0;">
        ${(project.highlights || []).map(h => `
          <li style="display:flex; align-items:center; gap:0.5rem; color:var(--text-muted); margin-bottom:0.4rem;">
            <i class="fas fa-check-circle" style="color:var(--accent-primary);"></i> ${h}
          </li>
        `).join('')}
      </ul>

      <div style="display:flex; gap:1rem;">
        <a href="${project.githubUrl}" target="_blank" rel="noopener" class="btn btn-primary">
          <i class="fab fa-github"></i> View GitHub Repo
        </a>
      </div>
    </div>
  `;

  modalOverlay.classList.add('active');
};

window.closeProjectModal = function() {
  const modalOverlay = document.getElementById('project-modal');
  if (modalOverlay) modalOverlay.classList.remove('active');
};

/* --- Navbar & Mobile Menu --- */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    let current = '';
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        icon.className = navMenu.classList.contains('active') ? 'fas fa-times' : 'fas fa-bars';
      }
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }
}

/* --- Contact Form & Toast --- */
function initContactForm() {
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('form-name').value;
      const email = document.getElementById('form-email').value;
      const message = document.getElementById('form-message').value;

      if (!name || !email || !message) {
        showToast("Please fill in all form fields.", "warning");
        return;
      }

      showToast("Thank you! Message sent successfully.", "success");
      contactForm.reset();
    });
  }
}

window.copyEmail = function() {
  const email = PORTFOLIO_DATA ? PORTFOLIO_DATA.personal.email : 'ariyanmubtasim@gmail.com';
  navigator.clipboard.writeText(email).then(() => {
    showToast("Email address copied to clipboard!", "success");
  }).catch(() => {
    showToast("Email: " + email, "info");
  });
};

function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i class="fas fa-check-circle"></i> ${message}`;
  
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(20px)';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

/* --- Intersection Observer --- */
function initIntersectionObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fills = entry.target.querySelectorAll('.progress-bar-fill');
        fills.forEach(fill => {
          const level = fill.getAttribute('data-level');
          if (level) fill.style.width = level;
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  const skillsSection = document.getElementById('skills');
  if (skillsSection) observer.observe(skillsSection);
}

/* --- Particle Canvas --- */
function initBackgroundCanvas() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  window.addEventListener('resize', resize);
  resize();

  const particleCount = Math.floor(width / 30);
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 2 + 1
    });
  }

  function render() {
    ctx.clearRect(0, 0, width, height);
    const theme = document.documentElement.getAttribute('data-theme');
    const color = theme === 'light' ? 'rgba(99, 102, 241, 0.1)' : 'rgba(255, 255, 255, 0.12)';

    ctx.fillStyle = color;
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    });

    requestAnimationFrame(render);
  }

  render();
}
