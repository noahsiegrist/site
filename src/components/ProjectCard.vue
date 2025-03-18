<script setup>
import { ref } from 'vue'

defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  projectUrl: {
    type: String,
    default: '#'
  },
  technologies: {
    type: Array,
    default: () => []
  },
  githubUrl: {
    type: String,
    default: null
  },
  displayMode: {
    type: String,
    default: 'iframe' // 'iframe' or 'metadata'
  },
  imageUrl: {
    type: String,
    default: null
  }
})

const hover = ref(false)
</script>

<template>
  <div class="project-card" @mouseenter="hover = true" @mouseleave="hover = false">
    <div class="card-content">
      <!-- Iframe mode for passion projects -->
      <div v-if="displayMode === 'iframe'" class="iframe-container">
        <iframe :src="projectUrl" :title="title" class="project-iframe" loading="lazy" sandbox="allow-scripts allow-same-origin"></iframe>
      </div>
      
      <!-- Metadata mode with image for business projects -->
      <div v-else class="image-container">
        <img :src="imageUrl" :alt="title" class="project-image" />
      </div>
      
      <div class="text-content">
        <h3>{{ title }}</h3>
        <p class="description">{{ description }}</p>
        <div class="technologies">
          <span v-for="(tech, index) in technologies" :key="index" class="tech-tag">
            {{ tech }}
          </span>
        </div>
        <div class="project-links">
          <a :href="projectUrl" class="project-link primary" target="_blank" rel="noopener noreferrer">
            View Project
          </a>
          <a v-if="githubUrl" :href="githubUrl" class="project-link github" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="github-icon">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project-card {
  background: var(--color-background-soft);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.card-content {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.iframe-container {
  width: 100%;
  height: 220px;
  overflow: hidden;
  position: relative;
  border-radius: 12px 12px 0 0;
  background-color: #f5f5f5;
}

.project-iframe {
  width: 100%;
  height: 100%;
  border: none;
  transform-origin: center top;
  transform: scale(0.8);
  pointer-events: none; /* Disable interaction with iframe */
  overflow: hidden;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: transform 0.5s ease;
}

.project-iframe::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera */
}

.project-card:hover .iframe-container {
  box-shadow: inset 0 0 0 2px rgba(110, 142, 251, 0.3);
}

.project-card:hover .project-iframe {
  transform: scale(0.85);
}

.image-container {
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-radius: 12px 12px 0 0;
  background-color: #f5f5f5;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.project-card:hover .project-image {
  transform: scale(1.05);
}

.text-content {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

h3 {
  font-size: 1.4rem;
  margin-bottom: 0.8rem;
  color: var(--color-heading);
  font-weight: 600;
}

.description {
  margin-bottom: 1rem;
  color: var(--color-text);
  line-height: 1.6;
  flex-grow: 1;
}

.technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.2rem;
}

.tech-tag {
  background: rgba(125, 125, 255, 0.15);
  color: #7d7dff;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
}

.project-links {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.project-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  font-weight: 500;
  text-align: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.project-link.primary {
  background: linear-gradient(135deg, #6e8efb, #a777e3);
  color: white;
}

.project-link.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  background: linear-gradient(135deg, #5d7df9, #9566e0);
}

.project-link.github {
  background: transparent;
  border: 1px solid rgba(110, 142, 251, 0.5);
  color: var(--color-heading);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.project-link.github:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background: rgba(110, 142, 251, 0.1);
  border-color: rgba(110, 142, 251, 0.8);
}

.github-icon {
  margin-right: 0.3rem;
}
</style>
