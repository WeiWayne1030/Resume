<template>
  <section id="experience" class="section">
    <div class="container">
      <h2 class="section-title">工作經歷</h2>
      
      <div class="timeline">
        <div 
          v-for="(exp, index) in experiences" 
          :key="exp.id"
          class="timeline-item"
          :class="{ 'timeline-item-alt': index % 2 === 1 }"
        >
          <div class="timeline-marker"></div>
          <div class="timeline-content glass-card">
            <div class="exp-header">
              <div>
                <h3>{{ exp.role }}</h3>
                <div class="exp-company">{{ exp.company }}</div>
              </div>
              <div class="exp-period">{{ exp.period }}</div>
            </div>
            
            <p class="exp-description">{{ exp.description }}</p>
            
            <ul class="exp-achievements">
              <li v-for="achievement in exp.achievements" :key="achievement">
                {{ achievement }}
              </li>
            </ul>
            
            <div class="exp-tech">
              <span 
                v-for="tech in exp.technologies" 
                :key="tech"
                class="tech-tag"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const experiences = ref([
  {
    id: 1,
    role: 'Junior Software Engineer',
    company: '承心科技',
    period: '2024.11 - 2025.3',
    description: '負責銀行系統前後端串接及開發',
    achievements: [
      '完成銀行系統前後端串接及開發',
      '環境建置及部署',
      '建立元件, 撰寫串接前後端邏輯'
    ],
    technologies: ['Angular 11', 'TypeScript', 'DotNet Core', 'Azure']
  },
  {
    id: 2,
    role: 'Software Engineer',
    company: '中租控股有限公司',
    period: '2025.5 - 2026.5',
    description: '參與海外公版上線及維護, 台灣公版從 0 到 1 的相關規劃及開發過程',
    achievements: [
      '海外公版功能新增部署(Azure)及維護(K8S)',
      '海外公版專案壓力測試(K6)',
      'Angular 11-17 升級規劃',
      'DotNet core 6-8 升級規劃',
      '將Azure class mode 上的yaml利用Kostumize做bake重新上傳到yaml pipline',
      '調整angular template 為 library 規劃及開發',
      '環境建置及部署'
    ],
    technologies: ['Angular 11-17', 'TypeScript', 'DotNet Core 6-8', 'Azure DevOps', 'MSSQL Server', 'K6']
  }
])
</script>

<style scoped>
.timeline {
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  padding: var(--space-lg) 0;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 100%;
  background: linear-gradient(
    180deg,
    var(--color-gradient-start),
    var(--color-gradient-mid),
    var(--color-gradient-end)
  );
}

.timeline-item {
  position: relative;
  margin-bottom: var(--space-xl);
  width: calc(50% - var(--space-xl));
}

.timeline-item-alt {
  margin-left: auto;
}

.timeline-marker {
  position: absolute;
  top: 24px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    var(--color-gradient-start),
    var(--color-gradient-mid)
  );
  box-shadow: 0 0 0 4px var(--color-bg-primary);
  z-index: 2;
}

.timeline-item:not(.timeline-item-alt) .timeline-marker {
  right: calc(-2.5rem - 10px);
}

.timeline-item-alt .timeline-marker {
  left: calc(-2.5rem - 10px);
}

.timeline-content {
  padding: var(--space-lg);
}

.exp-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: var(--space-md);
  gap: var(--space-md);
}

.exp-header h3 {
  font-size: var(--font-size-xl);
  color: var(--color-text-primary);
  margin-bottom: var(--space-xs);
}

.exp-company {
  font-size: var(--font-size-base);
  color: var(--color-text-accent);
  font-weight: 600;
}

.exp-period {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  white-space: nowrap;
  padding: var(--space-xs) var(--space-sm);
  background: var(--color-bg-elevated);
  border-radius: var(--radius-sm);
}

.exp-description {
  color: var(--color-text-secondary);
  margin-bottom: var(--space-md);
  line-height: 1.6;
}

.exp-achievements {
  margin: var(--space-md) 0;
  padding-left: var(--space-lg);
  color: var(--color-text-secondary);
}

.exp-achievements li {
  margin-bottom: var(--space-xs);
  line-height: 1.6;
}

.exp-tech {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs);
  margin-top: var(--space-md);
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

@media (max-width: 768px) {
  .timeline::before {
    left: 20px;
  }
  
  .timeline-item,
  .timeline-item-alt {
    width: 100%;
    padding-left: var(--space-2xl);
    margin-left: 0;
  }
  
  .timeline-marker {
    left: 10px !important;
    right: auto !important;
  }
  
  .exp-header {
    flex-direction: column;
  }
  
  .exp-period {
    align-self: flex-start;
  }
}
</style>
