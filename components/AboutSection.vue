<template>
  <section id="about" class="section">
    <div class="container">
      <h2 class="section-title">關於我</h2>
      
      <div class="about-content glass-card">
        <div class="about-text">
          <p class="about-intro">{{ intro }}</p>
          
          <div class="highlights">
            <div 
              v-for="highlight in highlights" 
              :key="highlight.id"
              class="highlight-item"
            >
              <span class="highlight-icon">{{ highlight.icon }}</span>
              <div class="highlight-content">
                <h4>{{ highlight.title }}</h4>
                <p>{{ highlight.description }}</p>
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

const intro = ref('我是一位喜歡學習新事物的全端工程師，從前端的頁面規劃到後端的資料庫設計，再到部署的環境建置，都會讓自己不斷的去try and error, 不斷的去學習新的知識')

const highlights = ref([
  {
    id: 1,
    icon: '💡',
    title: '清晰思維',
    description: '注重系統性思考，偏好結構化與長期可維護性'
  },
  {
    id: 2,
    icon: '🎯',
    title: 'Vibe First',
    description: '先專注於感覺與使用者體驗，再深入實作細節'
  },
  {
    id: 3,
    icon: '🚀',
    title: '快速迭代',
    description: '早期原型開發，快速驗證想法並持續改進'
  },
  {
    id: 4,
    icon: '🔧',
    title: '簡潔設計',
    description: '避免過度工程化，選擇簡單有效的解決方案'
  },
    {
    id: 4,
    icon: '🔧',
    title: '效能優化及負載測試',
    description: '優化效能及負載能力'
  }
])
</script>

<style scoped>
.about-content {
  max-width: 900px;
  margin: 0 auto;
}

.about-intro {
  font-size: var(--font-size-lg);
  line-height: 1.8;
  margin-bottom: var(--space-xl);
  color: var(--color-text-primary);
}

.highlights {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--space-lg);
}

.highlight-item {
  display: flex;
  gap: var(--space-md);
  padding: var(--space-md);
  background: var(--color-bg-elevated);
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border);
  transition: all var(--transition-base);
}

.highlight-item:hover {
  transform: translateX(4px);
  border-color: var(--color-gradient-mid);
}

.highlight-icon {
  font-size: var(--font-size-3xl);
  line-height: 1;
}

.highlight-content h4 {
  font-size: var(--font-size-lg);
  margin-bottom: var(--space-xs);
  color: var(--color-text-primary);
}

.highlight-content p {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  line-height: 1.6;
}

@media (max-width: 768px) {
  .highlights {
    grid-template-columns: 1fr;
  }
}
</style>
