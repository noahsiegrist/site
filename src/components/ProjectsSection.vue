<script setup>
import ProjectCard from './ProjectCard.vue'

// Passion projects data
const passionProjects = [
  {
    id: 1,
    title: '3D JS Wireframe Engine',
    description: 'A 3D JavaScript wireframe engine built from scratch using only canvas. Created after my apprenticeship in 2017 to explore 3D rendering concepts.',
    technologies: ['JavaScript', 'Canvas'],
    projectUrl: 'https://3djs.netlify.app/',
    githubUrl: 'https://github.com/noahsiegrist/3djs',
    imageUrl: '/src/assets/3djs.png'
  },
  {
    id: 2,
    title: 'Labyrinth Builder & Solver',
    description: 'A labyrinth builder in Vue where walls are placed on the edges of tiles. Features an auto-solver function that finds the optimal path through the maze.',
    technologies: ['Vue.js', 'JavaScript', 'Pathfinding Algorithms', 'CSS Grid'],
    projectUrl: 'https://labyrinth-solver.netlify.app/',
    githubUrl: 'https://github.com/noahsiegrist/labyrinth',
    imageUrl: '/src/assets/labirinth.png'
  },
  {
    id: 3,
    title: 'Christmas Text Generator',
    description: 'A festive application created as a gift to share best wishes for the Christmas season. Generates personalized holiday messages.',
    technologies: ['JavaScript', 'HTML', 'CSS', 'Animations'],
    projectUrl: 'https://christmas-texts.netlify.app/',
    githubUrl: 'https://github.com/noahsiegrist/chistmas-text',
    imageUrl: '/src/assets/christmas.png'
  },
  {
    id: 4,
    title: 'Peg Solitaire',
    description: 'An implementation of the classic peg solitaire game with an adjustable field before playing. The auto-solver feature is currently a work in progress.',
    technologies: ['Vue.js', 'Game Development',],
    projectUrl: 'https://peg-solitair.netlify.app/',
    githubUrl: 'https://github.com/noahsiegrist/peg-solitaire',
    imageUrl: '/src/assets/peg-solitair.png'
  }
]

// Business projects data
const businessProjects = [
  {
    id: 1,
    title: 'Basel-Stadt (bs.ch)',
    description: 'Official website for the Canton of Basel-Stadt. Provides government services, information, and resources for citizens and visitors.',
    technologies: ['Vue.js', 'Drupal', 'GraphQL', 'Accessibility'],
    projectUrl: 'https://bs.ch',
    imageUrl: 'https://media.bs.ch/og_image/2e9f4e9efd0d2f9ba8fc1cd1ba509e53e7b66199/opengraph-fallback.jpg?h=8ad5a422&itok=kxHVA0dm'
  },
  {
    id: 2,
    title: 'Wander Shop (shop.wander.ch)',
    description: 'E-commerce platform for Wander AG, a Swiss food and beverage company. Features product catalog, shopping cart, and secure checkout.',
    technologies: ['E-commerce', 'Drupal', 'Twig', 'Payment Integration'],
    projectUrl: 'https://shop.wander.ch',
    imageUrl: 'src/assets/wander.png'
  },
  {
    id: 3,
    title: 'Oris Watches (oris.ch)',
    description: 'Official website for Oris, a luxury Swiss watch manufacturer. Showcases their collection of mechanical watches and brand heritage.',
    technologies: ['Drupal', 'Vue.js', 'GraphQL', 'E-Commerce'],
    projectUrl: 'https://oris.ch',
    imageUrl: 'https://oris.rokka.io/fe_vuepal_crop/variables-w-770-h-770/1f90b017ed556cb98ea53e48e9f7d42c03f61851/ORIS_WEB_HIGHLIGHTER12-v1.jpg'
  }
]
</script>

<template>
  <section class="projects-section">
    <div class="section-header">
      <h2>My Projects</h2>
      <p class="section-description">
        Here's a collection of my work, showcasing both passion projects and professional business implementations.
      </p>
    </div>
    
    <!-- Passion Projects Section -->
    <div class="project-category">
      <h3 class="category-title">Passion Projects</h3>
      <p class="category-description">
        Personal projects I've built to explore new technologies and concepts.
      </p>
      
      <div class="passion-projects-grid">
        <div v-for="project in passionProjects" :key="project.id" class="project-item">
          <ProjectCard 
            :title="project.title"
            :description="project.description"
            :technologies="project.technologies"
            :projectUrl="project.projectUrl"
            :githubUrl="project.githubUrl"
            :imageUrl="project.imageUrl"
            displayMode="metadata"
          />
        </div>
      </div>
    </div>
    
    <!-- Business Projects Section -->
    <div class="project-category">
      <h3 class="category-title">Business Projects</h3>
      <p class="category-description">
        Professional projects I've contributed to for businesses and organizations.
      </p>
      
      <div class="projects-grid">
        <div v-for="project in businessProjects" :key="project.id" class="project-item">
          <ProjectCard 
            :title="project.title"
            :description="project.description"
            :technologies="project.technologies"
            :projectUrl="project.projectUrl"
            :imageUrl="project.imageUrl"
            displayMode="metadata"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-section {
  padding: 4rem 0;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #73A965, #4D8A3F);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: inline-block;
}

.section-description {
  max-width: 700px;
  margin: 0 auto;
  font-size: 1.1rem;
  color: var(--color-text);
  opacity: 0.9;
}

.project-category {
  margin-bottom: 5rem;
}

.category-title {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--color-heading);
  position: relative;
  display: inline-block;
  padding-bottom: 0.5rem;
}

.category-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #73A965, #4D8A3F);
  border-radius: 2px;
}

.category-description {
  margin-bottom: 2rem;
  font-size: 1.05rem;
  color: var(--color-text);
  max-width: 800px;
}

.passion-projects-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
}

@media (min-width: 640px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .projects-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Make passion projects grid responsive for small screens */
@media (max-width: 640px) {
  .passion-projects-grid {
    grid-template-columns: repeat(1, 1fr);
  }
}

.project-item {
  height: 100%;
}
</style>
