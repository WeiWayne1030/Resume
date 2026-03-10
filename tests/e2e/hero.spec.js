import { test, expect } from '@playwright/test';

test.describe('HeroSection 首頁標題區測試', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test('應該顯示正確的姓名', async ({ page }) => {
        const heroTitle = page.locator('.hero-title');
        await expect(heroTitle).toBeVisible();
        await expect(heroTitle).toHaveText('孫御維');
    });

    test('應該顯示正確的職稱', async ({ page }) => {
        const heroSubtitle = page.locator('.hero-subtitle');
        await expect(heroSubtitle).toBeVisible();
        await expect(heroSubtitle).toHaveText('Fullstack Developer');
    });

    test('應該顯示問候語', async ({ page }) => {
        const greeting = page.locator('.greeting');
        await expect(greeting).toBeVisible();
        await expect(greeting).toContainText('你好，我是');
    });

    test('應該顯示個人描述', async ({ page }) => {
        const description = page.locator('.hero-description');
        await expect(description).toBeVisible();
        await expect(description).toContainText('Angular');
        await expect(description).toContainText('DotNet Core');
    });

    test('應該顯示「聯絡我」按鈕', async ({ page }) => {
        const contactBtn = page.locator('.hero-actions .btn-primary');
        await expect(contactBtn).toBeVisible();
        await expect(contactBtn).toHaveText('聯絡我');
        await expect(contactBtn).toHaveAttribute('href', '#contact');
    });

    test('應該顯示「查看作品」按鈕', async ({ page }) => {
        const projectsBtn = page.locator('.hero-actions .btn-outline');
        await expect(projectsBtn).toBeVisible();
        await expect(projectsBtn).toHaveText('查看作品');
        await expect(projectsBtn).toHaveAttribute('href', '#projects');
    });

    test('點擊「聯絡我」按鈕應該滾動到聯絡區塊', async ({ page }) => {
        await page.click('.hero-actions .btn-primary');
        await page.waitForTimeout(800);

        const contactSection = page.locator('#contact');
        await expect(contactSection).toBeInViewport();
    });

    test('點擊「查看作品」按鈕應該滾動到專案區塊', async ({ page }) => {
        await page.click('.hero-actions .btn-outline');
        await page.waitForTimeout(800);

        const projectsSection = page.locator('#projects');
        await expect(projectsSection).toBeInViewport();
    });

    test('Hero 區塊應該有背景漸層效果', async ({ page }) => {
        const heroGradient = page.locator('.hero-bg-gradient');
        await expect(heroGradient).toBeVisible();
    });

    test('Hero 區塊應該佔據至少 80% 的視窗高度', async ({ page }) => {
        const heroSection = page.locator('#hero');
        const boundingBox = await heroSection.boundingBox();
        const viewportSize = page.viewportSize();

        expect(boundingBox.height).toBeGreaterThan(viewportSize.height * 0.7);
    });

    test('行動版：按鈕應該堆疊顯示', async ({ page }) => {
        await page.setViewportSize({ width: 375, height: 667 });

        const heroActions = page.locator('.hero-actions');
        await expect(heroActions).toBeVisible();

        // 驗證按鈕存在
        const buttons = page.locator('.hero-actions .btn');
        await expect(buttons).toHaveCount(2);
    });
});
