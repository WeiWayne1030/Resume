<template>
  <section id="skills" class="section">
    <div class="container">
      <h2 class="section-title">技能專長</h2>
      
      <div class="skills-grid">
        <div 
          v-for="category in skillCategories" 
          :key="category.id"
          class="skill-category glass-card"
        >
          <div class="category-header">
            <span class="category-icon">{{ category.icon }}</span>
            <h3>{{ category.name }}</h3>
          </div>
          
          <div class="skills-list">
            <div 
              v-for="skill in category.skills" 
              :key="skill.id"
              class="skill-item"
            >
              <div class="skill-name">{{ skill.name }}</div>
              <div class="skill-level">
                <div 
                  class="skill-bar" 
                  :style="{ width: skill.level + '%' }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const skillCategories = ref([
  {
    id: 1,
    icon: '⚙️',
    name: '前端框架',
    skills: [
      { id: 1, name: 'Angular', level: 90 },
      { id: 2, name: 'Vue.js', level: 85 },
      { id: 3, name: 'TypeScript', level: 85 }
    ]
  },
  {
    id: 2,
    icon: '⚙️',
    name: '後端框架',
    skills: [
      { id: 1, name: 'Node.js', level: 90 },
      { id: 2, name: 'Express', level: 85 },
      { id: 3, name: 'DotNetCore', level: 80 }
    ]
  },
  {
    id: 3,
    icon: '🎨',
    name: '樣式與設計',
    skills: [
      { id: 1, name: 'CSS', level: 90 },
      { id: 3, name: 'UI/UX Design', level: 70 }
    ]
  },
  {
    id: 4,
    icon: '🔨',
    name: '開發工具',
    skills: [
      { id: 1, name: 'Git', level: 85 },
      { id: 2, name: 'Vite', level: 80 },
      { id: 3, name: 'Webpack', level: 75 },
      { id: 4, name: 'Azure DevOps', level: 80 },
      { id: 5, name: 'Kostumize', level: 80 },
      { id: 6, name: 'Docker', level: 80 },
      { id: 7, name: 'MSSQL Server', level: 80 },
      { id: 8, name: 'MySQL', level: 80 },
      { id: 9, name: 'MongoDB', level: 80 },
      { id: 10, name: 'SourceTree', level: 80 },
    ]
  },
  {
    id: 4,
    icon: '🧩',
    name: '其他技能',
    skills: [
      { id: 2, name: 'RESTful API', level: 80 },
      { id: 3, name: 'Responsive Design', level: 90 },
      { id: 4, name: 'Kubernetes', level: 80 },
      { id: 5, name: 'K6', level: 70 },
      { id: 6, name: 'Lens', level: 70 },
      { id: 7, name: 'Azure', level: 80 },
    ]
  }
])
</script>

<style scoped>
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-lg);
}

.skill-category {
  padding: var(--space-xl);
}

.category-header {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  margin-bottom: var(--space-lg);
}

.category-icon {
  font-size: var(--font-size-3xl);
}

.category-header h3 {
  font-size: var(--font-size-xl);
  color: var(--color-text-primary);
}

.skills-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.skill-item {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}

.skill-name {
  font-size: var(--font-size-sm);
  font-weight: 600;
  color: var(--color-text-primary);
}

.skill-level {
  height: 6px;
  background: var(--color-bg-elevated);
  border-radius: 3px;
  overflow: hidden;
}

.skill-bar {
  height: 100%;
  background: linear-gradient(
    90deg,
    var(--color-gradient-start),
    var(--color-gradient-mid)
  );
  border-radius: 3px;
  transition: width 1s cubic-bezier(0.4, 0, 0.2, 1);
}

@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style>
