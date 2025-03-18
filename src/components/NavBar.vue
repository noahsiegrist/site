<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const checkScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', checkScroll)
  checkScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll)
})

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>

<template>
  <nav class="navbar" :class="{ 'scrolled': isScrolled, 'mobile-open': isMobileMenuOpen }">
    <div class="navbar-container">
      <div class="navbar-logo">
        <a href="#" class="logo-link">NS</a>
      </div>
      
      <button class="mobile-menu-toggle" @click="toggleMobileMenu" aria-label="Toggle menu">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>
      
      <div class="navbar-links" :class="{ 'active': isMobileMenuOpen }">
        <a href="#" class="nav-link" @click="closeMobileMenu">Home</a>
        <a href="#projects" class="nav-link" @click="closeMobileMenu">Projects</a>
        <a href="#contact" class="nav-link" @click="closeMobileMenu">Contact</a>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  transition: all 0.3s ease;
  padding: 1.5rem 2rem;
}

.navbar.scrolled {
  background: var(--color-background);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  padding: 1rem 2rem;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.navbar-logo {
  font-size: 1.8rem;
  font-weight: 800;
}

.logo-link {
  background: linear-gradient(135deg, #6e8efb, #a777e3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-decoration: none;
}

.navbar-links {
  display: flex;
  gap: 2rem;
}

.nav-link {
  color: var(--color-heading);
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
  position: relative;
  padding: 0.5rem 0;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #6e8efb, #a777e3);
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

.mobile-menu-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 1001;
}

.bar {
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px auto;
  transition: all 0.3s ease;
  background-color: var(--color-heading);
  border-radius: 1px;
}

@media (max-width: 768px) {
  .mobile-menu-toggle {
    display: block;
  }
  
  .navbar-links {
    position: fixed;
    top: 0;
    right: -100%;
    width: 70%;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: var(--color-background);
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
    transition: right 0.3s ease;
    gap: 3rem;
  }
  
  .navbar-links.active {
    right: 0;
  }
  
  .mobile-open .bar:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }
  
  .mobile-open .bar:nth-child(2) {
    opacity: 0;
  }
  
  .mobile-open .bar:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }
}
</style>
