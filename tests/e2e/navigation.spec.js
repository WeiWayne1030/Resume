import { test, expect } from '@playwright/test';

test.describe('Navigation 導航測試', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test('應該顯示所有導航連結', async ({ page }) => {
        // 驗證導航連結存在
        const navLinks = ['關於', '技能', '經歷', '作品', '聯絡'];

        for (const linkText of navLinks) {
            const link = page.locator('.nav-link', { hasText: linkText });
            await expect(link).toBeVisible();
        }
    });

    test('應該顯示導航 logo', async ({ page }) => {
        const logo = page.locator('.nav-logo');
        await expect(logo).toBeVisible();
        await expect(logo).toHaveText('👨‍💻');
    });

    test('點擊導航連結應該滾動到對應區塊', async ({ page }) => {
        // 點擊「關於」連結
        await page.click('a[href="#about"]');

        // 等待滾動完成
        await page.waitForTimeout(800);

        // 驗證「關於」區塊在視窗範圍內
        const aboutSection = page.locator('#about');
        await expect(aboutSection).toBeInViewport();
    });

    test('滾動後導航列應該添加 scrolled 樣式', async ({ page }) => {
        const navbar = page.locator('.navbar');

        // 初始狀態不應該有 navbar-scrolled class
        await expect(navbar).not.toHaveClass(/navbar-scrolled/);

        // 滾動頁面
        await page.evaluate(() => window.scrollTo(0, 100));
        await page.waitForTimeout(300);

        // 應該添加 navbar-scrolled class
        await expect(navbar).toHaveClass(/navbar-scrolled/);
    });

    test('行動版：應該顯示選單切換按鈕', async ({ page, viewport }) => {
        // 設定行動裝置視窗大小
        await page.setViewportSize({ width: 375, height: 667 });

        // 驗證選單切換按鈕可見
        const menuToggle = page.locator('.mobile-menu-toggle');
        await expect(menuToggle).toBeVisible();
    });

    test('行動版：點擊選單按鈕應該開關導航選單', async ({ page }) => {
        // 設定行動裝置視窗大小
        await page.setViewportSize({ width: 375, height: 667 });

        const menuToggle = page.locator('.mobile-menu-toggle');
        const navLinks = page.locator('.nav-links');

        // 初始狀態選單應該關閉
        await expect(navLinks).not.toHaveClass(/nav-open/);

        // 點擊開啟選單
        await menuToggle.click();
        await page.waitForTimeout(300);
        await expect(navLinks).toHaveClass(/nav-open/);

        // 點擊導航連結應該關閉選單
        await page.click('.nav-link:first-child');
        await page.waitForTimeout(300);
        await expect(navLinks).not.toHaveClass(/nav-open/);
    });

    test('所有導航連結都有正確的 href', async ({ page }) => {
        const expectedLinks = [
            { text: '關於', href: '#about' },
            { text: '技能', href: '#skills' },
            { text: '經歷', href: '#experience' },
            { text: '作品', href: '#projects' },
            { text: '聯絡', href: '#contact' }
        ];

        for (const { text, href } of expectedLinks) {
            const link = page.locator('.nav-link', { hasText: text });
            await expect(link).toHaveAttribute('href', href);
        }
    });
});
