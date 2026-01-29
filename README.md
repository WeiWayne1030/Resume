# 個人履歷網站 | Personal Resume Website

[English](#english) | [中文](#中文)

---

## 中文

### 📖 專案簡介

這是一個使用 Vue 3 與 Composition API 打造的現代化個人履歷網站，展現專業形象與技術實力。

### ✨ 特色功能

- **🎨 精緻設計**：深色主題搭配玻璃擬態效果，漸層色彩與流暢動畫
- **📱 響應式設計**：完美支援桌面、平板與手機裝置
- **⚡ 高效能**：使用 Vite 構建，快速載入與熱更新
- **🧩 元件化架構**：遵循單一職責原則，易於維護與擴展
- **🎯 SEO 優化**：完整的 meta 標籤與語意化 HTML

### 🛠️ 技術棧

- **前端框架**：Vue 3 (Composition API)
- **構建工具**：Vite
- **樣式**：CSS Variables (無額外框架依賴)
- **字體**：Google Fonts - Inter

### 📂 專案結構

```
introduction/
├── components/          # Vue 元件
│   ├── HeroSection.vue      # 首頁標題區
│   ├── AboutSection.vue     # 關於我
│   ├── SkillsSection.vue    # 技能專長
│   ├── ExperienceSection.vue # 工作經歷
│   ├── ProjectsSection.vue   # 專案作品
│   └── ContactSection.vue    # 聯絡方式
├── agent/              # AI Agent 規範文件
├── App.vue             # 主應用元件
├── main.js             # 應用入口
├── style.css           # 全域樣式系統
├── index.html          # HTML 入口
├── vite.config.js      # Vite 配置
└── package.json        # 專案依賴
```

### 🚀 快速開始

#### 安裝依賴

```bash
npm install
```

#### 啟動開發伺服器

```bash
npm run dev
```

開啟瀏覽器訪問 `http://localhost:3000`

#### 建置生產版本

```bash
npm run build
```

建置後的檔案將位於 `dist/` 資料夾

### 🎨 設計系統

- **顏色**：基於 HSL 的深色主題與漸層色彩
- **字體**：Inter 字體家族，300-800 字重
- **間距**：使用 CSS Variables 定義的一致性間距系統
- **動畫**：流暢的過渡效果與微互動

### 📝 自訂內容

請修改以下元件中的資料：

1. **HeroSection.vue** - 姓名、職稱、簡介
2. **AboutSection.vue** - 個人介紹與亮點
3. **SkillsSection.vue** - 技能類別與熟練度
4. **ExperienceSection.vue** - 工作經歷
5. **ProjectsSection.vue** - 專案作品
6. **ContactSection.vue** - 聯絡資訊

### 📄 開發哲學

本專案遵循 `agent/agent-skills.md` 中定義的開發原則：

- Vibe first, implementation second
- 元件驅動架構
- 語意化 HTML 與現代 CSS
- 最小化依賴
- 可讀性優先於技巧性

### 📜 授權

本專案程式碼可自由使用與修改。

---

## English

### 📖 Project Overview

A modern personal resume website built with Vue 3 and Composition API, showcasing professional image and technical expertise.

### ✨ Features

- **🎨 Premium Design**: Dark theme with glassmorphism effects, gradient colors, and smooth animations
- **📱 Responsive**: Perfectly supports desktop, tablet, and mobile devices
- **⚡ High Performance**: Built with Vite for fast loading and hot module replacement
- **🧩 Component Architecture**: Follows single responsibility principle, easy to maintain and extend
- **🎯 SEO Optimized**: Complete meta tags and semantic HTML

### 🛠️ Tech Stack

- **Frontend Framework**: Vue 3 (Composition API)
- **Build Tool**: Vite
- **Styling**: CSS Variables (no additional framework dependencies)
- **Typography**: Google Fonts - Inter

### 📂 Project Structure

```
introduction/
├── components/          # Vue components
│   ├── HeroSection.vue      # Hero/landing section
│   ├── AboutSection.vue     # About me
│   ├── SkillsSection.vue    # Skills showcase
│   ├── ExperienceSection.vue # Work experience
│   ├── ProjectsSection.vue   # Portfolio projects
│   └── ContactSection.vue    # Contact information
├── agent/              # AI Agent specification
├── App.vue             # Main app component
├── main.js             # Application entry
├── style.css           # Global design system
├── index.html          # HTML entry point
├── vite.config.js      # Vite configuration
└── package.json        # Project dependencies
```

### 🚀 Getting Started

#### Install Dependencies

```bash
npm install
```

#### Start Development Server

```bash
npm run dev
```

Open browser and navigate to `http://localhost:3000`

#### Build for Production

```bash
npm run build
```

Build output will be in the `dist/` folder

### 🎨 Design System

- **Colors**: HSL-based dark theme with gradient accents
- **Typography**: Inter font family, weights 300-800
- **Spacing**: Consistent spacing system using CSS Variables
- **Animations**: Smooth transitions and micro-interactions

### 📝 Customization

Modify the data in the following components:

1. **HeroSection.vue** - Name, title, introduction
2. **AboutSection.vue** - Personal introduction and highlights
3. **SkillsSection.vue** - Skill categories and proficiency
4. **ExperienceSection.vue** - Work history
5. **ProjectsSection.vue** - Portfolio projects
6. **ContactSection.vue** - Contact information

### 📄 Development Philosophy

This project follows the development principles defined in `agent/agent-skills.md`:

- Vibe first, implementation second
- Component-driven architecture
- Semantic HTML and modern CSS
- Minimal dependencies
- Readable before clever

### 📜 License

The code in this project is free to use and modify.

---

## 🌟 Preview

Visit the live site at `http://localhost:3000` after running `npm run dev`

## 🤝 Contributing

Feel free to fork and customize this template for your own use!

---

**Built with Vue 3 & ❤️**
