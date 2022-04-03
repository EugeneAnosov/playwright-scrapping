const playwright = require('playwright')

const BASE_URL = 'https://github.com/topics/playwright'

;(async () => {
    // Setup Browser
    const browser = await playwright.chromium.launch({headless: true})
    const context = await browser.newContext()
    const page = await context.newPage({bypassCSP: true})
    await page.setDefaultTimeout(3000)
    await page.setViewportSize({width: 800, height: 600})
    await page.goto(BASE_URL)

    // Close Browser
    await browser.close()
})().catch(error => {
    console.log(error)
    process.exit(1)
})