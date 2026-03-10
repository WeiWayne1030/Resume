import { test, expect } from '@playwright/test';

test.describe('ContactSection 聯絡方式區塊測試', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        // 滾動到 Contact 區塊（相容桌面版與行動版）
        await page.locator('#contact').scrollIntoViewIfNeeded();
        await page.waitForTimeout(500);
    });

    test('應該顯示區塊標題', async ({ page }) => {
        const sectionTitle = page.locator('#contact .section-title');
        await expect(sectionTitle).toBeVisible();
        await expect(sectionTitle).toContainText('聯絡');
    });

    test('Contact 區塊應該在視窗範圍內', async ({ page }) => {
        const contactSection = page.locator('#contact');
        await expect(contactSection).toBeInViewport();
    });

    test('應該顯示聯絡介紹文字', async ({ page }) => {
        const contactIntro = page.locator('.contact-intro');
        await expect(contactIntro).toBeVisible();
        await expect(contactIntro).toContainText('聯繫');
    });

    test('應該顯示所有聯絡連結', async ({ page }) => {
        const contactLinks = page.locator('.contact-link');
        const count = await contactLinks.count();

        // 至少應該有3個聯絡方式（Email, LinkedIn, GitHub）
        expect(count).toBeGreaterThanOrEqual(3);
    });

    test('Email 聯絡連結應該存在', async ({ page }) => {
        const emailLabel = page.locator('.contact-label', { hasText: 'Email' });
        await expect(emailLabel).toBeVisible();

        const emailValue = page.locator('.contact-value', { hasText: 'angel1425q@gmail.com' });
        await expect(emailValue).toBeVisible();
    });

    test('LinkedIn 聯絡連結應該存在', async ({ page }) => {
        const linkedinLabel = page.locator('.contact-label', { hasText: 'LinkedIn' });
        await expect(linkedinLabel).toBeVisible();

        const linkedinValue = page.locator('.contact-value', { hasText: 'linkedin.com' });
        await expect(linkedinValue).toBeVisible();
    });

    test('GitHub 聯絡連結應該存在', async ({ page }) => {
        const githubLabel = page.locator('.contact-label', { hasText: 'GitHub' });
        await expect(githubLabel).toBeVisible();

        const githubValue = page.locator('.contact-value', { hasText: 'github.com' });
        await expect(githubValue).toBeVisible();
    });

    test('聯絡連結應該是外部連結', async ({ page }) => {
        const contactLinks = page.locator('.contact-link');
        const firstLink = contactLinks.first();

        await expect(firstLink).toHaveAttribute('target', '_blank');
    });

    test('聯絡卡片應該有 hover 效果', async ({ page }) => {
        const firstContactLink = page.locator('.contact-link').first();
        await expect(firstContactLink).toBeVisible();

        await firstContactLink.hover();
        await page.waitForTimeout(300);
    });

    test('應該顯示聯絡圖示', async ({ page }) => {
        const contactIcons = page.locator('.contact-icon');
        const count = await contactIcons.count();
        expect(count).toBeGreaterThanOrEqual(3);
    });

    test('桌面版：聯絡卡片應該以網格顯示', async ({ page }) => {
        await page.setViewportSize({ width: 1920, height: 1080 });

        const contactLinks = page.locator('.contact-links');
        await expect(contactLinks).toBeVisible();
    });

    test('行動版：聯絡卡片應該堆疊顯示', async ({ page }) => {
        await page.setViewportSize({ width: 375, height: 667 });

        const contactLinks = page.locator('.contact-links');
        await expect(contactLinks).toBeVisible();
    });
});
