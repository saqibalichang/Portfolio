// ===== Theme Toggle =====
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check for saved theme preference or default to dark
const savedTheme = localStorage.getItem('theme') || 'dark';
body.classList.toggle('dark', savedTheme === 'dark');

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  const isDark = body.classList.contains('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// ===== Mobile Menu Toggle =====
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

mobileMenuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  mobileMenuBtn.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    mobileMenuBtn.classList.remove('active');
  });
});

// ===== Navigation Scroll Effect =====
const nav = document.getElementById('nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
  
  lastScroll = currentScroll;
});

// ===== Smooth Scroll for Anchor Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// ===== Contact Form Handler =====
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const formData = new FormData(contactForm);
  const data = Object.fromEntries(formData);
  
  // Show success message (in a real app, you'd send this to a server)
  alert('Thank you for your message! I will get back to you soon.');
  contactForm.reset();
});

// ===== Life Constellation Interactive Canvas =====
class LifeConstellation {
  constructor(canvasId, infoId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');
    this.infoBox = document.getElementById(infoId);
    this.nodes = [];
    this.connections = [];
    this.hoveredNode = null;
    this.selectedNode = null;
    this.animationFrame = null;
    
    this.colors = {
      education: '#60a5fa',
      experience: '#34d399',
      skills: '#fbbf24',
      values: '#f472b6'
    };
    
    this.initNodes();
    this.initConnections();
    this.resize();
    this.bindEvents();
    this.animate();
  }
  
  initNodes() {
    const nodeData = [
      // Education
      { id: 'qau', label: 'Quaid i Azam University', category: 'education', description: 'BBA - Business Administration (2020-2024)', x: 0.15, y: 0.25 },
      { id: 'chemnitz', label: 'Chemnitz University of Technology', category: 'education', description: 'MSc Business & Economics (2024-Present)', x: 0.45, y: 0.15 },
      
      // Experience
      { id: 'aiesec', label: 'AIESEC in Germany', category: 'experience', description: 'Member (2026-Present) • Halle, Germany', x: 0.75, y: 0.2 },
      { id: 'pak_pvc', label: 'PAK PVC PIPES INDUSTRY', category: 'experience', description: 'Retail & Operations Coordinator (2024-2025) • Peshawar, Pakistan', x: 0.9, y: 0.35 },
      { id: 'mpdsi', label: 'Ministry of Planning Development and Special Initiative', category: 'experience', description: 'Research Intern (2025) • Islamabad, Pakistan', x: 0.8, y: 0.5 },
      { id: 'mof', label: 'Ministry of Finance, Pakistan', category: 'experience', description: 'Finance Intern (2023) • Islamabad, Pakistan', x: 0.85, y: 0.7 },
      { id: 'mnfsr', label: 'Ministry of National Food Security & Research', category: 'experience', description: 'Research Intern (2022) • Islamabad, Pakistan', x: 0.68, y: 0.6 },
      
      // Skills
      { id: 'excel', label: 'Advanced Excel', category: 'skills', description: 'Advanced data analysis and modeling', x: 0.25, y: 0.5 },
      { id: 'research', label: 'Research', category: 'skills', description: 'Policy research and economic analysis', x: 0.4, y: 0.65 },
      { id: 'r_rstudio', label: 'R & RStudio', category: 'skills', description: 'Statistical programming and data analysis', x: 0.1, y: 0.6 },
      
      // Values
      { id: 'impact', label: 'Impact', category: 'values', description: 'Creating meaningful change through data', x: 0.5, y: 0.4 },
      { id: 'growth', label: 'Growth', category: 'values', description: 'Continuous learning and improvement', x: 0.3, y: 0.8 },
      { id: 'collab', label: 'Collaboration', category: 'values', description: 'Building bridges across disciplines', x: 0.6, y: 0.85 }
    ];
    
    this.nodes = nodeData.map(node => ({
      ...node,
      radius: 8,
      pulseRadius: 8,
      pulsePhase: Math.random() * Math.PI * 2
    }));
  }
  
  initConnections() {
    this.connections = [
      // Education to Experience
      ['qau', 'mof'],
      ['qau', 'mnfsr'],
      ['chemnitz', 'qau'],
      ['chemnitz', 'aiesec'],
      ['chemnitz', 'pak_pvc'],
      ['chemnitz', 'mpdsi'],
      
      // Experience to Skills
      ['pak_pvc', 'excel'],
      ['mpdsi', 'research'],
      ['mof', 'excel'],
      ['mpdsi', 'r_rstudio'],
      ['mnfsr', 'research'],
      ['aiesec', 'collab'],
      
      // Skills to Values
      ['excel', 'impact'],
      ['research', 'impact'],
      ['research', 'growth'],
      
      // Values connections
      ['impact', 'collab'],
      ['growth', 'collab'],
      ['growth', 'chemnitz']
    ];
  }
  
  resize() {
    const rect = this.canvas.parentElement.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    
    this.canvas.width = rect.width * dpr;
    this.canvas.height = rect.height * dpr;
    this.canvas.style.width = rect.width + 'px';
    this.canvas.style.height = rect.height + 'px';
    
    this.ctx.scale(dpr, dpr);
    this.width = rect.width;
    this.height = rect.height;
  }
  
  bindEvents() {
    window.addEventListener('resize', () => this.resize());
    
    this.canvas.addEventListener('mousemove', (e) => {
      const rect = this.canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      this.hoveredNode = this.nodes.find(node => {
        const nodeX = node.x * this.width;
        const nodeY = node.y * this.height;
        const dist = Math.sqrt((x - nodeX) ** 2 + (y - nodeY) ** 2);
        return dist < 20;
      });
      
      this.canvas.style.cursor = this.hoveredNode ? 'pointer' : 'default';
      this.updateInfoBox();
    });
    
    this.canvas.addEventListener('mouseleave', () => {
      this.hoveredNode = null;
      this.updateInfoBox();
    });
    
    this.canvas.addEventListener('click', () => {
      if (this.hoveredNode) {
        this.selectedNode = this.hoveredNode;
        this.updateInfoBox();
      }
    });
  }
  
  updateInfoBox() {
    const node = this.hoveredNode || this.selectedNode;
    
    if (node) {
      const color = this.colors[node.category];
      this.infoBox.innerHTML = `
        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.5rem;">
          <span style="width: 12px; height: 12px; border-radius: 50%; background-color: ${color};"></span>
          <strong style="font-size: 1rem; color: var(--foreground);">${node.label}</strong>
        </div>
        <p style="font-size: 0.875rem; color: var(--muted-foreground); margin: 0;">${node.description}</p>
        <span style="display: inline-block; margin-top: 0.5rem; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: ${color};">${node.category}</span>
      `;
    } else {
      this.infoBox.innerHTML = '<span class="info-hint">Hover over a star to explore</span>';
    }
  }
  
  animate() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    
    // Draw connections
    this.connections.forEach(([fromId, toId]) => {
      const from = this.nodes.find(n => n.id === fromId);
      const to = this.nodes.find(n => n.id === toId);
      
      if (from && to) {
        const fromX = from.x * this.width;
        const fromY = from.y * this.height;
        const toX = to.x * this.width;
        const toY = to.y * this.height;
        
        const isHighlighted = this.hoveredNode && 
          (this.hoveredNode.id === fromId || this.hoveredNode.id === toId);
        
        this.ctx.beginPath();
        this.ctx.moveTo(fromX, fromY);
        this.ctx.lineTo(toX, toY);
        this.ctx.strokeStyle = isHighlighted 
          ? 'rgba(96, 165, 250, 0.6)' 
          : 'rgba(100, 116, 139, 0.2)';
        this.ctx.lineWidth = isHighlighted ? 2 : 1;
        this.ctx.stroke();
      }
    });
    
    // Draw nodes
    const time = Date.now() / 1000;
    
    this.nodes.forEach(node => {
      const x = node.x * this.width;
      const y = node.y * this.height;
      const color = this.colors[node.category];
      
      // Pulse effect
      const pulse = Math.sin(time * 2 + node.pulsePhase) * 0.3 + 1;
      const isHovered = this.hoveredNode === node;
      const baseRadius = isHovered ? 12 : node.radius;
      const radius = baseRadius * pulse;
      
      // Glow
      if (isHovered) {
        const gradient = this.ctx.createRadialGradient(x, y, 0, x, y, radius * 3);
        gradient.addColorStop(0, color + '40');
        gradient.addColorStop(1, 'transparent');
        this.ctx.fillStyle = gradient;
        this.ctx.beginPath();
        this.ctx.arc(x, y, radius * 3, 0, Math.PI * 2);
        this.ctx.fill();
      }
      
      // Main node
      this.ctx.beginPath();
      this.ctx.arc(x, y, radius, 0, Math.PI * 2);
      this.ctx.fillStyle = color;
      this.ctx.fill();
      
      // Inner highlight
      this.ctx.beginPath();
      this.ctx.arc(x - radius * 0.3, y - radius * 0.3, radius * 0.3, 0, Math.PI * 2);
      this.ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
      this.ctx.fill();
    });
    
    this.animationFrame = requestAnimationFrame(() => this.animate());
  }
  
  destroy() {
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
    }
  }
}

// Initialize constellation when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const constellation = new LifeConstellation('constellationCanvas', 'constellationInfo');
});

// ===== Scroll Animations =====
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.timeline-item, .project-card, .volunteer-card, .skill-category, .goal').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

// ===== Skill Bar Animation =====
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.skill-progress').forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0%';
        setTimeout(() => {
          bar.style.width = width;
        }, 100);
      });
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.skill-items').forEach(el => {
  skillObserver.observe(el);
});
