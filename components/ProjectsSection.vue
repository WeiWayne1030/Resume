<template>
  <section id="projects" class="section">
    <div class="container">
      <h2 class="section-title">專案作品</h2>
      
      <div class="projects-grid">
        <div 
          v-for="project in projects" 
          :key="project.id"
          class="project-card glass-card"
        >
          <div class="project-image">
            <div class="project-image-placeholder">
              {{ project.emoji }}
            </div>
          </div>
          
          <div class="project-content">
            <h3>{{ project.name }}</h3>
            <p class="project-description">{{ project.description }}</p>
            
            <div class="project-tech">
              <span 
                v-for="tech in project.technologies" 
                :key="tech"
                class="tech-tag"
              >
                {{ tech }}
              </span>
            </div>
            
            <div class="project-links">
              <a 
                v-if="project.demo" 
                :href="project.demo" 
                target="_blank"
                class="project-link"
              >
                <span>🔗</span> Demo
              </a>
              <a 
                v-if="project.github" 
                :href="project.github" 
                target="_blank"
                class="project-link"
              >
                <span>📦</span> GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const projects = ref([
  {
    id: 1,
    name: 'E-Commerce Platform',
    emoji: '🛒',
    description: '完整的電商平台，包含購物車、結帳流程、會員系統等功能',
    technologies: ['Vue 3', 'TypeScript', 'Pinia', 'Tailwind CSS'],
    demo: '#',
    github: '#'
  },
  {
    id: 2,
    name: 'Task Management App',
    emoji: '✅',
    description: '任務管理應用，支援拖放操作、標籤分類、進度追蹤',
    technologies: ['Vue 3', 'Vite', 'LocalStorage'],
    demo: '#',
    github: '#'
  },
  {
    id: 3,
    name: 'Weather Dashboard',
    emoji: '🌤️',
    description: '即時天氣資訊儀表板，整合第三方 API 與資料視覺化',
    technologies: ['Vue 3', 'Chart.js', 'REST API'],
    demo: '#',
    github: '#'
  },
  {
    id: 4,
    name: 'Portfolio Website',
    emoji: '💼',
    description: '個人作品集網站，展示專案與技能',
    technologies: ['Vue 3', 'CSS Animation', 'Responsive'],
    demo: '#',
    github: '#'
  }
])
</script>

<style scoped>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: var(--space-xl);
}

.project-card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 0;
}

.project-image {
  width: 100%;
  aspect-ratio: 16 / 9;
  background: linear-gradient(
    135deg,
    var(--color-bg-elevated),
    var(--color-bg-secondary)
  );
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--color-border);
}

.project-image-placeholder {
  font-size: 4rem;
  animation: float 3s ease-in-out infinite;
}

.project-content {
  padding: var(--space-lg);
  flex: 1;
  display: flex;
  flex-direction: column;
}

.project-content h3 {
  font-size: var(--font-size-xl);
  color: var(--color-text-primary);
  margin-bottom: var(--space-sm);
}

.project-description {
  color: var(--color-text-secondary);
  margin-bottom: var(--space-md);
  line-height: 1.6;
  flex: 1;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs);
  margin-bottom: var(--space-md);
}

.tech-tag {
  padding: var(--space-xs) var(--space-sm);
  background: var(--color-bg-elevated);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  font-size: var(--font-size-xs);
  color: var(--color-text-primary);
  font-weight: 500;
}

.project-links {
  display: flex;
  gap: var(--space-sm);
}

.project-link {
  display: inline-flex;
  align-items: center;
  gap: var(--space-xs);
  padding: var(--space-sm) var(--space-md);
  background: var(--color-bg-elevated);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  font-size: var(--font-size-sm);
  font-weight: 600;
  color: var(--color-text-primary);
  transition: all var(--transition-base);
}

.project-link:hover {
  background: linear-gradient(
    135deg,
    var(--color-gradient-start),
    var(--color-gradient-mid)
  );
  border-color: transparent;
  color: white;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
