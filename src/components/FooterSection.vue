<script setup>
// You can add any necessary imports or logic here
</script>

<template>
  <footer class="footer-section" id="contact">
    <div class="footer-content">
      <div class="footer-info">
        <h2 class="footer-title">Get In Touch</h2>
        <p class="footer-description">
          Interested in working together? Feel free to reach out through any of the channels below.
        </p>
      </div>
      
      <div class="contact-methods">
        <div class="contact-item">
          <div class="contact-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </div>
          <div class="contact-details">
            <h3>Email</h3>
            <a href="mailto:contact@noahsiegrist.ch">contact@noahsiegrist.ch</a>
          </div>
        </div>
        
        <div class="contact-item">
          <div class="contact-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </div>
          <div class="contact-details">
            <h3>GitHub</h3>
            <a href="https://github.com/noahsiegrist" target="_blank" rel="noopener noreferrer">github.com/noahsiegrist</a>
          </div>
        </div>
      </div>
    </div>
    
    <div class="footer-bottom">
      <p>&copy; 2025 Noah Siegrist. All rights reserved.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer-section {
  background: var(--color-background-soft);
  padding: 5rem 2rem 2rem;
  margin-top: 4rem;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.footer-info {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.footer-title {
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #6e8efb, #a777e3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: inline-block;
}

.footer-description {
  font-size: 1.1rem;
  color: var(--color-text);
  line-height: 1.6;
}

.contact-methods {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: var(--color-background);
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 100%;
  max-width: 350px;
}

.contact-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.contact-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, rgba(110, 142, 251, 0.2), rgba(167, 119, 227, 0.2));
  border-radius: 50%;
  color: #6e8efb;
}

.contact-details h3 {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.3rem;
  color: var(--color-heading);
}

.contact-details a {
  color: var(--color-text);
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-details a:hover {
  color: #6e8efb;
}

.footer-bottom {
  margin-top: 4rem;
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid var(--color-border);
  color: var(--color-text);
  opacity: 0.7;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .footer-section {
    padding: 3rem 1.5rem 1.5rem;
  }
  
  .footer-title {
    font-size: 1.8rem;
  }
  
  .contact-methods {
    flex-direction: column;
    align-items: center;
  }
}
</style>
