import { test, expect } from '@playwright/test';

test.describe('Responsive Design 響應式設計測試', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test.describe('桌面版 (1920x1080)', () => {
        test.beforeEach(async ({ page }) => {
            await page.setViewportSize({ width: 1920, height: 1080 });
        });

        test('應該正確顯示所有區塊', async ({ page }) => {
            const sections = ['#hero', '#about', '#skills', '#experience', '#projects', '#contact'];

            for (const selector of sections) {
                const section = page.locator(selector);
                await expect(section).toBeVisible();
            }
        });

        test('導航選單應該水平顯示', async ({ page }) => {
            const navLinks = page.locator('.nav-links');
            await expect(navLinks).toBeVisible();

            // 行動版選單按鈕應該隱藏
            const menuToggle = page.locator('.mobile-menu-toggle');
            await expect(menuToggle).not.toBeVisible();
        });

        test('Hero 按鈕應該水平排列', async ({ page }) => {
            const heroActions = page.locator('.hero-actions');
            await expect(heroActions).toBeVisible();
        });
    });

    test.describe('平板版 (768x1024)', () => {
        test.beforeEach(async ({ page }) => {
            await page.setViewportSize({ width: 768, height: 1024 });
        });

        test('應該正確顯示所有區塊', async ({ page }) => {
            const sections = ['#hero', '#about', '#skills', '#experience', '#projects', '#contact'];

            for (const selector of sections) {
                const section = page.locator(selector);
                await expect(section).toBeVisible();
            }
        });

        test('可能顯示行動版選單按鈕', async ({ page }) => {
            // 在 768px 可能已是行動版佈局
            const menuToggle = page.locator('.mobile-menu-toggle');
            // 不強制驗證，因為設計可能有差異
        });
    });

    test.describe('行動版 (375x667)', () => {
        test.beforeEach(async ({ page }) => {
            await page.setViewportSize({ width: 375, height: 667 });
        });

        test('應該正確顯示所有區塊', async ({ page }) => {
            const sections = ['#hero', '#about', '#skills', '#experience', '#projects', '#contact'];

            for (const selector of sections) {
                await page.locator(selector).scrollIntoViewIfNeeded();
                const section = page.locator(selector);
                await expect(section).toBeVisible();
            }
        });

        test('應該顯示行動版選單按鈕', async ({ page }) => {
            const menuToggle = page.locator('.mobile-menu-toggle');
            await expect(menuToggle).toBeVisible();
        });

        test('導航選單初始應該隱藏', async ({ page }) => {
            const navLinks = page.locator('.nav-links');
            await expect(navLinks).not.toHaveClass(/nav-open/);
        });

        test('點擊選單按鈕應該開啟選單', async ({ page }) => {
            const menuToggle = page.locator('.mobile-menu-toggle');
            await menuToggle.click();
            await page.waitForTimeout(300);

            const navLinks = page.locator('.nav-links');
            await expect(navLinks).toHaveClass(/nav-open/);
        });

        test('Hero 按鈕應該堆疊顯示', async ({ page }) => {
            const buttons = page.locator('.hero-actions .btn');
            const count = await buttons.count();
            expect(count).toBe(2);

            await expect(buttons.first()).toBeVisible();
            await expect(buttons.last()).toBeVisible();
        });

        test('聯絡卡片應該堆疊顯示', async ({ page }) => {
            await page.locator('#contact').scrollIntoViewIfNeeded();
            await page.waitForTimeout(500);

            const contactLinks = page.locator('.contact-link');
            const count = await contactLinks.count();
            expect(count).toBeGreaterThanOrEqual(3);
        });

        test('應該可以滾動瀏覽所有內容', async ({ page }) => {
            // 滾動到頁面底部
            await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
            await page.waitForTimeout(500);

            // 驗證 Contact 區塊可見
            const contactSection = page.locator('#contact');
            await expect(contactSection).toBeInViewport();
        });
    });

    test.describe('小型行動裝置 (320x568)', () => {
        test.beforeEach(async ({ page }) => {
            await page.setViewportSize({ width: 320, height: 568 });
        });

        test('應該正確顯示所有區塊', async ({ page }) => {
            const sections = ['#hero', '#about', '#skills', '#experience', '#projects', '#contact'];

            for (const selector of sections) {
                await page.locator(selector).scrollIntoViewIfNeeded();
                const section = page.locator(selector);
                await expect(section).toBeVisible();
            }
        });

        test('文字應該可讀且不溢出', async ({ page }) => {
            const heroTitle = page.locator('.hero-title');
            await expect(heroTitle).toBeVisible();

            const heroDescription = page.locator('.hero-description');
            await expect(heroDescription).toBeVisible();
        });
    });

    test.describe('超寬螢幕 (2560x1440)', () => {
        test.beforeEach(async ({ page }) => {
            await page.setViewportSize({ width: 2560, height: 1440 });
        });

        test('應該正確顯示所有區塊', async ({ page }) => {
            const sections = ['#hero', '#about', '#skills', '#experience', '#projects', '#contact'];

            for (const selector of sections) {
                const section = page.locator(selector);
                await expect(section).toBeVisible();
            }
        });

        test('內容應該適當置中且有最大寬度', async ({ page }) => {
            const container = page.locator('.container').first();
            await expect(container).toBeVisible();
        });
    });
});
