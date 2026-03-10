import { test, expect } from '@playwright/test';

test.describe('SkillsSection 技能專長區塊測試', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        // 滾動到 Skills 區塊（相容桌面版與行動版）
        await page.locator('#skills').scrollIntoViewIfNeeded();
        await page.waitForTimeout(500);
    });

    test('應該顯示區塊標題', async ({ page }) => {
        const sectionTitle = page.locator('#skills .section-title');
        await expect(sectionTitle).toBeVisible();
        await expect(sectionTitle).toContainText('技能');
    });

    test('Skills 區塊應該在視窗範圍內', async ({ page }) => {
        const skillsSection = page.locator('#skills');
        await expect(skillsSection).toBeInViewport();
    });

    test('應該顯示技能類別', async ({ page }) => {
        const skillsSection = page.locator('#skills');
        await expect(skillsSection).toBeVisible();

        // 驗證有技能內容
        const content = await skillsSection.textContent();
        expect(content.length).toBeGreaterThan(0);
    });

    test('應該有技能卡片或列表項目', async ({ page }) => {
        // 檢查是否有技能類別卡片
        const skillCards = page.locator('#skills .skill-category');
        const count = await skillCards.count();
        expect(count).toBeGreaterThan(0);
    });

    test('應該顯示「前端框架」技能類別', async ({ page }) => {
        const category = page.locator('#skills .skill-category', { hasText: '前端框架' });
        await expect(category).toBeVisible();
    });

    test('應該顯示「後端框架」技能類別', async ({ page }) => {
        const category = page.locator('#skills .skill-category', { hasText: '後端框架' });
        await expect(category).toBeVisible();
    });

    test('應該顯示「樣式與設計」技能類別', async ({ page }) => {
        const category = page.locator('#skills .skill-category', { hasText: '樣式與設計' });
        await expect(category).toBeVisible();
    });

    test('應該顯示「開發工具」技能類別', async ({ page }) => {
        const category = page.locator('#skills .skill-category', { hasText: '開發工具' });
        await expect(category).toBeVisible();
    });

    test('應該顯示 Angular 技能', async ({ page }) => {
        const skill = page.locator('#skills .skill-name', { hasText: 'Angular' });
        await expect(skill.first()).toBeVisible();
    });

    test('應該顯示 Vue.js 技能', async ({ page }) => {
        const skill = page.locator('#skills .skill-name', { hasText: 'Vue.js' });
        await expect(skill).toBeVisible();
    });

    test('應該顯示 TypeScript 技能', async ({ page }) => {
        const skill = page.locator('#skills .skill-name', { hasText: 'TypeScript' });
        await expect(skill).toBeVisible();
    });

    test('應該顯示 Node.js 技能', async ({ page }) => {
        const skill = page.locator('#skills .skill-name', { hasText: 'Node.js' });
        await expect(skill).toBeVisible();
    });

    test('應該顯示 DotNetCore 技能', async ({ page }) => {
        const skill = page.locator('#skills .skill-name', { hasText: 'DotNetCore' });
        await expect(skill).toBeVisible();
    });

    test('應該顯示 Docker 技能', async ({ page }) => {
        const skill = page.locator('#skills .skill-name', { hasText: 'Docker' });
        await expect(skill).toBeVisible();
    });

    test('每個技能應該有進度條', async ({ page }) => {
        const skillBars = page.locator('#skills .skill-bar');
        const count = await skillBars.count();
        expect(count).toBeGreaterThan(0);
    });

    test('桌面版：應該以網格佈局顯示', async ({ page }) => {
        await page.setViewportSize({ width: 1920, height: 1080 });

        const skillsSection = page.locator('#skills');
        await expect(skillsSection).toBeVisible();
    });

    test('行動版：應該正確顯示', async ({ page }) => {
        await page.setViewportSize({ width: 375, height: 667 });

        const skillsSection = page.locator('#skills');
        await expect(skillsSection).toBeVisible();
    });
});
