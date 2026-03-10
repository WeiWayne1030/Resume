import { test, expect } from '@playwright/test';

test.describe('ExperienceSection 工作經歷區塊測試', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        // 滾動到 Experience 區塊（相容桌面版與行動版）
        await page.locator('#experience').scrollIntoViewIfNeeded();
        await page.waitForTimeout(500);
    });

    test('應該顯示區塊標題', async ({ page }) => {
        const sectionTitle = page.locator('#experience .section-title');
        await expect(sectionTitle).toBeVisible();
        await expect(sectionTitle).toContainText('經歷');
    });

    test('Experience 區塊應該在視窗範圍內', async ({ page }) => {
        const experienceSection = page.locator('#experience');
        await expect(experienceSection).toBeInViewport();
    });

    test('應該顯示工作經歷內容', async ({ page }) => {
        const experienceSection = page.locator('#experience');
        await expect(experienceSection).toBeVisible();

        // 驗證有經歷內容
        const content = await experienceSection.textContent();
        expect(content.length).toBeGreaterThan(0);
    });

    test('應該顯示 2 個工作經歷時間線項目', async ({ page }) => {
        const experienceItems = page.locator('#experience .timeline-item');
        await expect(experienceItems).toHaveCount(2);
    });

    test('應該有經歷卡片或時間線項目', async ({ page }) => {
        const experienceItems = page.locator('#experience .timeline-item');
        const count = await experienceItems.count();
        expect(count).toBeGreaterThan(0);
    });

    test('應該顯示「承心科技」工作經歷', async ({ page }) => {
        const company = page.locator('#experience .exp-company', { hasText: '承心科技' });
        await expect(company).toBeVisible();
    });

    test('應該顯示「中租控股有限公司」工作經歷', async ({ page }) => {
        const company = page.locator('#experience .exp-company', { hasText: '中租控股' });
        await expect(company).toBeVisible();
    });

    test('應該顯示「Junior Software Engineer」職稱', async ({ page }) => {
        const role = page.locator('#experience h3', { hasText: 'Junior Software Engineer' });
        await expect(role).toBeVisible();
    });

    test('應該顯示「Software Engineer」職稱', async ({ page }) => {
        const roles = page.locator('#experience h3', { hasText: 'Software Engineer' });
        await expect(roles.first()).toBeVisible();
    });

    test('應該顯示承心科技的工作期間', async ({ page }) => {
        const period = page.locator('#experience .exp-period', { hasText: '2023.11' });
        await expect(period).toBeVisible();
    });

    test('應該顯示中租控股的工作期間', async ({ page }) => {
        const period = page.locator('#experience .exp-period', { hasText: '2024.5' });
        await expect(period).toBeVisible();
    });

    test('應該顯示工作成就列表', async ({ page }) => {
        const achievements = page.locator('#experience .exp-achievements li');
        const count = await achievements.count();
        expect(count).toBeGreaterThan(0);
    });

    test('應該顯示技術標籤', async ({ page }) => {
        const techTags = page.locator('#experience .tech-tag');
        const count = await techTags.count();
        expect(count).toBeGreaterThan(0);
    });

    test('桌面版：應該正確顯示時間線佈局', async ({ page }) => {
        await page.setViewportSize({ width: 1920, height: 1080 });

        const experienceSection = page.locator('#experience');
        await expect(experienceSection).toBeVisible();
    });

    test('行動版：應該正確顯示', async ({ page }) => {
        await page.setViewportSize({ width: 375, height: 667 });

        const experienceSection = page.locator('#experience');
        await expect(experienceSection).toBeVisible();
    });
});
