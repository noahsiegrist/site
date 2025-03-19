<template>
  <header class="hero-header">
    <!-- Oh, hi there! Looking at source code? You must not be from HR. ;) If you have an interesting Job, get in contact anyway! -->
    <div class="hero-content">
      <h1 class="name">Noah Siegrist</h1>
      <div class="title-container">
        <h2 class="title">Software Engineer</h2>
      </div>
      <p class="bio">
        Just having fun over here. 
      </p>
      <div class="cta-buttons">
        <a href="#projects" class="cta-button primary">View Projects</a>
        <a href="#contact" class="cta-button secondary">Contact Me</a>
      </div>
    </div>
    <div class="hero-visual">
      <div class="shape shape-1"></div>
      <div class="shape shape-2"></div>
      <div class="shape shape-3"></div>
      <div class="shape shape-4"></div>
    </div>
  </header>
</template>

<style scoped>
.hero-header {
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 2rem;
}

.hero-content {
  position: relative;
  z-index: 10;
  max-width: 800px;
}

.name {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #73A965, #4D8A3F);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.title-container {
  margin-bottom: 1.5rem;
}

.title {
  font-size: 2rem;
  font-weight: 600;
  color: var(--color-heading);
  position: relative;
  display: inline-block;
}

.title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 60px;
  height: 4px;
  background: linear-gradient(90deg, #73A965, #4D8A3F);
  border-radius: 2px;
}

.bio {
  font-size: 1.2rem;
  line-height: 1.7;
  margin-bottom: 2.5rem;
  max-width: 600px;
  color: var(--color-text);
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.cta-button {
  padding: 0.8rem 1.8rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  text-decoration: none;
}

.cta-button.primary {
  background: linear-gradient(135deg, #73A965, #4D8A3F);
  color: white;
  box-shadow: 0 4px 15px rgba(115, 169, 101, 0.4);
}

.cta-button.primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(115, 169, 101, 0.6);
}

.cta-button.secondary {
  background: transparent;
  color: var(--color-heading);
  border: 2px solid rgba(115, 169, 101, 0.5);
}

.cta-button.secondary:hover {
  background: rgba(115, 169, 101, 0.1);
  border-color: rgba(115, 169, 101, 0.8);
}

.hero-visual {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  overflow: hidden;
}

.shape {
  position: absolute;
  border-radius: 50%;
  opacity: 0.2;
}

.shape-1 {
  width: 400px;
  height: 400px;
  background: linear-gradient(135deg, #73A965, #4D8A3F);
  top: -100px;
  right: -100px;
}

.shape-2 {
  width: 300px;
  height: 300px;
  background: linear-gradient(135deg, #4D8A3F, #73A965);
  bottom: -50px;
  right: 30%;
}

.shape-3 {
  width: 200px;
  height: 200px;
  background: linear-gradient(135deg, #73A965, #4D8A3F);
  top: 20%;
  left: 10%;
}

.shape-4 {
  width: 150px;
  height: 150px;
  background: linear-gradient(135deg, #4D8A3F, #73A965);
  bottom: 15%;
  left: 20%;
}

@media (max-width: 768px) {
  .hero-header {
    padding: 1.5rem;
  }
  
  .name {
    font-size: 2.5rem;
  }
  
  .title {
    font-size: 1.5rem;
  }
  
  .bio {
    font-size: 1rem;
  }
}
</style>
