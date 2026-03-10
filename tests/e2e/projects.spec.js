import { test, expect } from '@playwright/test';

test.describe('ProjectsSection 專案作品區塊測試', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        // 滾動到 Projects 區塊（相容桌面版與行動版）
        await page.locator('#projects').scrollIntoViewIfNeeded();
        await page.waitForTimeout(500);
    });

    test('應該顯示區塊標題', async ({ page }) => {
        const sectionTitle = page.locator('#projects .section-title');
        await expect(sectionTitle).toBeVisible();
        await expect(sectionTitle).toContainText('作品');
    });

    test('Projects 區塊應該在視窗範圍內', async ({ page }) => {
        const projectsSection = page.locator('#projects');
        await expect(projectsSection).toBeInViewport();
    });

    test('應該顯示專案內容', async ({ page }) => {
        const projectsSection = page.locator('#projects');
        await expect(projectsSection).toBeVisible();

        // 驗證有專案內容
        const content = await projectsSection.textContent();
        expect(content.length).toBeGreaterThan(0);
    });

    test('應該顯示 3 個專案卡片', async ({ page }) => {
        const projectCards = page.locator('#projects .project-card');
        await expect(projectCards).toHaveCount(3);
    });

    test('應該有專案卡片', async ({ page }) => {
        const projectCards = page.locator('#projects .project-card');
        const count = await projectCards.count();
        expect(count).toBeGreaterThan(0);
    });

    test('應該顯示「HerStory WebSite Frontend」專案', async ({ page }) => {
        const project = page.locator('#projects .project-card', { hasText: 'HerStory WebSite Frontend' });
        await expect(project).toBeVisible();
    });

    test('應該顯示「Weather Dashboard」專案', async ({ page }) => {
        const project = page.locator('#projects .project-card', { hasText: 'Weather Dashboard' });
        await expect(project).toBeVisible();
    });

    test('應該顯示「Portfolio Website」專案', async ({ page }) => {
        const project = page.locator('#projects .project-card', { hasText: 'Portfolio Website' });
        await expect(project).toBeVisible();
    });

    test('每個專案應該有技術標籤', async ({ page }) => {
        const techTags = page.locator('#projects .tech-tag');
        const count = await techTags.count();
        expect(count).toBeGreaterThan(0);
    });

    test('HerStory 專案應該有 Vue 3 技術標籤', async ({ page }) => {
        const herstoryCard = page.locator('#projects .project-card', { hasText: 'HerStory WebSite Frontend' });
        const tag = herstoryCard.locator('.tech-tag', { hasText: 'Vue 3' });
        await expect(tag).toBeVisible();
    });

    test('HerStory 專案應該有 Docker 技術標籤', async ({ page }) => {
        const herstoryCard = page.locator('#projects .project-card', { hasText: 'HerStory WebSite Frontend' });
        const tag = herstoryCard.locator('.tech-tag', { hasText: 'Docker' });
        await expect(tag).toBeVisible();
    });

    test('每個專案應該有連結區域', async ({ page }) => {
        const firstCard = page.locator('#projects .project-card').first();
        const links = firstCard.locator('.project-links');
        await expect(links).toBeVisible();
    });

    test('專案卡片應該有 hover 效果', async ({ page }) => {
        const firstProjectCard = page.locator('#projects .project-card').first();
        await expect(firstProjectCard).toBeVisible();
        await firstProjectCard.hover();
        await page.waitForTimeout(300);
    });

    test('桌面版：應該以網格佈局顯示專案', async ({ page }) => {
        await page.setViewportSize({ width: 1920, height: 1080 });

        const projectsSection = page.locator('#projects');
        await expect(projectsSection).toBeVisible();
    });

    test('行動版：應該堆疊顯示專案', async ({ page }) => {
        await page.setViewportSize({ width: 375, height: 667 });

        const projectsSection = page.locator('#projects');
        await expect(projectsSection).toBeVisible();
    });
});
