<template>
  <section id="contact" class="section contact-section">
    <div class="container">
      <h2 class="section-title">聯絡方式</h2>
      
      <div class="contact-content">
        <p class="contact-intro">歡迎與我聯繫討論合作機會或技術交流</p>
        
        <div class="contact-links">
          <a 
            v-for="link in contactLinks" 
            :key="link.id"
            :href="link.url"
            target="_blank"
            class="contact-link glass-card"
          >
            <span class="contact-icon">{{ link.icon }}</span>
            <div class="contact-info">
              <div class="contact-label">{{ link.label }}</div>
              <div class="contact-value">{{ link.value }}</div>
            </div>
          </a>
        </div>
      </div>
    </div>
    
    <footer class="footer">
      <div class="container">
        <p>&copy; 2026 Frontend Developer. Built with Vue 3 & ❤️</p>
      </div>
    </footer>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const contactLinks = ref([
  {
    id: 1,
    icon: '📧',
    label: 'Email',
    value: 'your.email@example.com',
    url: 'mailto:your.email@example.com'
  },
  {
    id: 2,
    icon: '💼',
    label: 'LinkedIn',
    value: 'linkedin.com/in/yourprofile',
    url: 'https://linkedin.com'
  },
  {
    id: 3,
    icon: '📦',
    label: 'GitHub',
    value: 'github.com/yourusername',
    url: 'https://github.com'
  }
])
</script>

<style scoped>
.contact-section {
  padding-bottom: 0;
}

.contact-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.contact-intro {
  font-size: var(--font-size-lg);
  color: var(--color-text-secondary);
  margin-bottom: var(--space-2xl);
}

.contact-links {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-lg);
  margin-bottom: var(--space-3xl);
}

.contact-link {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  padding: var(--space-xl);
  text-align: left;
  transition: all var(--transition-base);
  cursor: pointer;
}

.contact-link:hover {
  transform: translateY(-4px) scale(1.02);
}

.contact-icon {
  font-size: var(--font-size-4xl);
  line-height: 1;
}

.contact-info {
  flex: 1;
}

.contact-label {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  margin-bottom: var(--space-xs);
}

.contact-value {
  font-size: var(--font-size-base);
  font-weight: 600;
  color: var(--color-text-primary);
}

.footer {
  margin-top: var(--space-3xl);
  padding: var(--space-xl) 0;
  border-top: 1px solid var(--color-border);
  text-align: center;
}

.footer p {
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
}

@media (max-width: 768px) {
  .contact-links {
    grid-template-columns: 1fr;
  }
}
</style>
