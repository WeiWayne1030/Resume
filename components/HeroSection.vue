<template>
  <section id="hero" class="hero">
    <div class="container">
      <div class="hero-content animate-fade-in-up">
        <div class="greeting">👋 你好，我是</div>
        <h1 class="hero-title">{{ name }}</h1>
        <div class="hero-subtitle">{{ title }}</div>
        <p class="hero-description">{{ description }}</p>
        
        <div class="hero-actions">
          <a href="#contact" class="btn btn-primary">聯絡我</a>
          <a href="#projects" class="btn btn-outline">查看作品</a>
        </div>
      </div>
    </div>
    <div class="hero-bg-gradient"></div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('張三')
const title = ref('Frontend Developer')
const description = ref('專注於 Vue.js 與現代化前端開發，追求乾淨的程式碼與優秀的使用者體驗')
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-bg-gradient {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    hsla(271, 76%, 53%, 0.15),
    hsla(242, 77%, 63%, 0.1),
    hsla(210, 100%, 66%, 0.05)
  );
  background-size: 200% 200%;
  animation: gradient-shift 15s ease infinite;
  z-index: -1;
}

.hero-content {
  text-align: center;
  max-width: 800px;
  z-index: 1;
}

.greeting {
  font-size: var(--font-size-xl);
  color: var(--color-text-secondary);
  margin-bottom: var(--space-md);
  font-weight: 500;
}

.hero-title {
  font-size: var(--font-size-5xl);
  font-weight: 800;
  margin-bottom: var(--space-md);
  background: linear-gradient(
    135deg,
    var(--color-gradient-start),
    var(--color-gradient-mid),
    var(--color-gradient-end)
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-subtitle {
  font-size: var(--font-size-2xl);
  color: var(--color-text-primary);
  margin-bottom: var(--space-lg);
  font-weight: 600;
}

.hero-description {
  font-size: var(--font-size-lg);
  color: var(--color-text-secondary);
  margin-bottom: var(--space-2xl);
  line-height: 1.8;
}

.hero-actions {
  display: flex;
  gap: var(--space-md);
  justify-content: center;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .hero {
    min-height: 80vh;
  }
  
  .hero-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .hero-actions .btn {
    width: 100%;
    max-width: 300px;
    justify-content: center;
  }
}
</style>
