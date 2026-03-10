import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright 測試配置
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
    testDir: './tests/e2e',

    // 最大失敗次數後中止測試
    maxFailures: 3,

    // 平行執行測試文件
    fullyParallel: true,

    // CI 環境下禁止重試，本地開發允許重試一次
    retries: process.env.CI ? 2 : 1,

    // 平行執行的 worker 數量
    workers: process.env.CI ? 1 : undefined,

    // 測試報告格式
    reporter: [
        ['html'],
        ['list']
    ],

    // 所有測試的共享設定
    use: {
        // 基礎 URL
        baseURL: 'http://localhost:3001',

        // 失敗時截圖
        screenshot: 'only-on-failure',

        // 失敗時錄製影片
        video: 'retain-on-failure',

        // 追蹤僅在失敗時保留
        trace: 'on-first-retry',
    },

    // 配置不同瀏覽器和裝置的測試項目
    projects: [
        {
            name: 'chromium-desktop',
            use: {
                ...devices['Desktop Chrome'],
                viewport: { width: 1920, height: 1080 }
            },
        },

        {
            name: 'chromium-mobile',
            use: {
                ...devices['iPhone 12'],
            },
        },

        {
            name: 'chromium-tablet',
            use: {
                ...devices['iPad Pro'],
            },
        },
    ],

    // 開發伺服器配置
    webServer: {
        command: 'npm run dev',
        url: 'http://localhost:3001',
        reuseExistingServer: !process.env.CI,
        timeout: 120 * 1000,
    },
});
