<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)

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
</script>

<template>
  <nav class="navbar" :class="{ 'scrolled': isScrolled }">
    <div class="navbar-container">
      <div class="navbar-logo">
        <a href="#" class="logo-link">NS</a>
      </div>
      
      <div class="navbar-links">
        <a href="#" class="nav-link">Home</a>
        <a href="#projects" class="nav-link">Projects</a>
        <a href="#contact" class="nav-link">Contact</a>
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
  background: linear-gradient(135deg, #73A965, #4D8A3F);
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
  background: linear-gradient(90deg, #73A965, #4D8A3F);
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

@media (max-width: 768px) {
  .navbar {
    padding: 1rem;
  }
  
  .navbar-container {
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .navbar-logo {
    margin-bottom: 0.5rem;
    width: 100%;
    text-align: center;
  }
  
  .navbar-links {
    justify-content: center;
    gap: 1.5rem;
  }
  
  .nav-link {
    font-size: 1rem;
    padding: 0.3rem 0;
  }
}

@media (max-width: 480px) {
  .navbar-links {
    gap: 1rem;
  }
  
  .nav-link {
    font-size: 0.9rem;
  }
}
</style>
