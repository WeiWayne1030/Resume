# Playwright 測試使用指南

## 🚀 快速開始

### 1. 確保開發伺服器運行
```bash
npm run dev
```

### 2. 執行所有測試
```bash
npm run test:e2e
```

## 📋 可用命令

| 命令 | 說明 |
|------|------|
| `npm run test:e2e` | 執行所有測試（headless 模式） |
| `npm run test:e2e:ui` | 使用 UI 模式執行測試（推薦） |
| `npm run test:e2e:debug` | 除錯模式逐步執行 |
| `npm run test:e2e:report` | 查看最新測試報告 |

## 📊 測試涵蓋範圍

- ✅ 導航功能（navbar、平滑滾動、行動版選單）
- ✅ Hero 區塊（標題、描述、CTA 按鈕）
- ✅ About 區塊（內容顯示）
- ✅ Skills 區塊（技能卡片）
- ✅ Experience 區塊（工作經歷）
- ✅ Projects 區塊（專案展示）
- ✅ Contact 區塊（聯絡資訊連結）
- ✅ 響應式設計（桌面、平板、行動裝置）

## 🎯 測試結果

初次執行：**67 個測試通過** ✅

## 📁 測試文件位置

```
tests/e2e/
├── navigation.spec.js    # 導航測試
├── hero.spec.js          # Hero 區塊
├── about.spec.js         # About 區塊
├── skills.spec.js        # Skills 區塊
├── experience.spec.js    # Experience 區塊
├── projects.spec.js      # Projects 區塊
├── contact.spec.js       # Contact 區塊
└── responsive.spec.js    # 響應式設計
```

## 🔧 配置文件

`playwright.config.js` - Playwright 主配置文件
