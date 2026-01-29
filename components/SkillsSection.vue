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
      { id: 1, name: 'Vue.js', level: 90 },
      { id: 2, name: 'React', level: 75 },
      { id: 3, name: 'TypeScript', level: 85 }
    ]
  },
  {
    id: 2,
    icon: '🎨',
    name: '樣式與設計',
    skills: [
      { id: 1, name: 'CSS/SCSS', level: 90 },
      { id: 2, name: 'Tailwind CSS', level: 85 },
      { id: 3, name: 'UI/UX Design', level: 70 }
    ]
  },
  {
    id: 3,
    icon: '🔨',
    name: '開發工具',
    skills: [
      { id: 1, name: 'Git', level: 85 },
      { id: 2, name: 'Vite', level: 80 },
      { id: 3, name: 'Webpack', level: 75 }
    ]
  },
  {
    id: 4,
    icon: '🧩',
    name: '其他技能',
    skills: [
      { id: 1, name: 'Node.js', level: 70 },
      { id: 2, name: 'RESTful API', level: 80 },
      { id: 3, name: 'Responsive Design', level: 90 }
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
