<template>
  <div id="app">
    <!-- Navigation -->
    <nav class="navbar" :class="{ 'navbar-scrolled': isScrolled }">
      <div class="container">
        <div class="nav-content">
          <a href="#hero" class="nav-logo">{{ logo }}</a>
          
          <div class="nav-links" :class="{ 'nav-open': isMobileMenuOpen }">
            <a 
              v-for="link in navLinks" 
              :key="link.id"
              :href="link.href"
              @click="closeMobileMenu"
              class="nav-link"
            >
              {{ link.text }}
            </a>
          </div>
          
          <button 
            class="mobile-menu-toggle"
            @click="toggleMobileMenu"
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ContactSection from './components/ContactSection.vue'

const logo = ref('👨‍💻')
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const navLinks = ref([
  { id: 1, text: '關於', href: '#about' },
  { id: 2, text: '技能', href: '#skills' },
  { id: 3, text: '經歷', href: '#experience' },
  { id: 4, text: '作品', href: '#projects' },
  { id: 5, text: '聯絡', href: '#contact' }
])

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style>
/* Ensure smooth scrolling behavior */
html {
  scroll-behavior: smooth;
}

/* Navbar Styles */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: var(--space-md) 0;
  transition: all var(--transition-base);
  background: transparent;
}

.navbar-scrolled {
  background: var(--color-glass-bg);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--color-glass-border);
  box-shadow: var(--shadow-sm);
  padding: var(--space-sm) 0;
}

.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-logo {
  font-size: var(--font-size-2xl);
  font-weight: 700;
  background: linear-gradient(
    135deg,
    var(--color-gradient-start),
    var(--color-gradient-mid)
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: var(--space-xl);
  align-items: center;
}

.nav-link {
  color: var(--color-text-secondary);
  text-decoration: none;
  font-weight: 500;
  font-size: var(--font-size-base);
  transition: color var(--transition-fast);
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(
    90deg,
    var(--color-gradient-start),
    var(--color-gradient-mid)
  );
  transition: width var(--transition-base);
}

.nav-link:hover {
  color: var(--color-text-primary);
}

.nav-link:hover::after {
  width: 100%;
}

.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  gap: 4px;
  background: transparent;
  padding: var(--space-xs);
  cursor: pointer;
}

.mobile-menu-toggle span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--color-text-primary);
  transition: all var(--transition-base);
}

/* Responsive Nav */
@media (max-width: 768px) {
  .mobile-menu-toggle {
    display: flex;
  }
  
  .nav-links {
    position: fixed;
    top: 60px;
    left: 0;
    width: 100%;
    flex-direction: column;
    background: var(--color-glass-bg);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--color-glass-border);
    padding: var(--space-lg);
    gap: var(--space-md);
    transform: translateY(-100%);
    opacity: 0;
    transition: all var(--transition-base);
    pointer-events: none;
  }
  
  .nav-links.nav-open {
    transform: translateY(0);
    opacity: 1;
    pointer-events: all;
  }
  
  .nav-link {
    width: 100%;
    text-align: center;
    padding: var(--space-sm);
  }
}

/* Main content offset for fixed navbar */
main {
  padding-top: 0;
}
</style>
