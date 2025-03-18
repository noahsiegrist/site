<script setup>
import NavBar from './components/NavBar.vue'
import HeroHeader from './components/HeroHeader.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<template>
  <div class="app-container">
    <NavBar />
    
    <main>
      <HeroHeader />
      
      <div id="projects" class="section-container">
        <ProjectsSection />
      </div>
    </main>
    
    <FooterSection />
  </div>
</template>

<style>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
}

.section-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

@media (max-width: 768px) {
  .section-container {
    padding: 0 1.5rem;
  }
}

/* Override the default grid layout from main.css for our custom layout */
@media (min-width: 1024px) {
  #app {
    display: block;
    grid-template-columns: none;
    padding: 0;
  }
  
  body {
    display: block;
    place-items: normal;
  }
}
</style>
