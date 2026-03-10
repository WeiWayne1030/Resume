import { test, expect } from '@playwright/test';

test.describe('AboutSection 關於我區塊測試', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        // 滾動到 About 區塊（相容桌面版與行動版）
        await page.locator('#about').scrollIntoViewIfNeeded();
        await page.waitForTimeout(500);
    });

    test('應該顯示區塊標題', async ({ page }) => {
        const sectionTitle = page.locator('#about .section-title');
        await expect(sectionTitle).toBeVisible();
        await expect(sectionTitle).toContainText('關於');
    });

    test('About 區塊應該在視窗範圍內', async ({ page }) => {
        const aboutSection = page.locator('#about');
        await expect(aboutSection).toBeInViewport();
    });

    test('應該顯示內容區域', async ({ page }) => {
        const aboutSection = page.locator('#about');
        await expect(aboutSection).toBeVisible();

        // 驗證區塊有內容
        const content = await aboutSection.textContent();
        expect(content.length).toBeGreaterThan(0);
    });

    test('應該有玻璃擬態卡片樣式', async ({ page }) => {
        const aboutContent = page.locator('#about .about-content.glass-card');
        await expect(aboutContent).toBeVisible();
    });

    test('應該顯示個人簡介文字', async ({ page }) => {
        const intro = page.locator('#about .about-intro');
        await expect(intro).toBeVisible();
        await expect(intro).toContainText('全端工程師');
    });

    test('應該顯示 5 個 highlight 項目', async ({ page }) => {
        const highlights = page.locator('#about .highlight-item');
        await expect(highlights).toHaveCount(5);
    });

    test('每個 highlight 項目應該有圖示和標題', async ({ page }) => {
        const highlights = page.locator('#about .highlight-item');
        const count = await highlights.count();

        for (let i = 0; i < count; i++) {
            const item = highlights.nth(i);
            await expect(item.locator('.highlight-icon')).toBeVisible();
            await expect(item.locator('h4')).toBeVisible();
        }
    });

    test('應該顯示「清晰思維」highlight', async ({ page }) => {
        const highlight = page.locator('#about .highlight-item', { hasText: '清晰思維' });
        await expect(highlight).toBeVisible();
    });

    test('應該顯示「架構規劃」highlight', async ({ page }) => {
        const highlight = page.locator('#about .highlight-item', { hasText: '架構規劃' });
        await expect(highlight).toBeVisible();
    });

    test('應該顯示「快速迭代」highlight', async ({ page }) => {
        const highlight = page.locator('#about .highlight-item', { hasText: '快速迭代' });
        await expect(highlight).toBeVisible();
    });

    test('應該顯示「簡潔設計」highlight', async ({ page }) => {
        const highlight = page.locator('#about .highlight-item', { hasText: '簡潔設計' });
        await expect(highlight).toBeVisible();
    });

    test('應該顯示「效能優化及負載測試」highlight', async ({ page }) => {
        const highlight = page.locator('#about .highlight-item', { hasText: '效能優化及負載測試' });
        await expect(highlight).toBeVisible();
    });
});
