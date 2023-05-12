import { test } from '@playwright/test';

test('license page has expected the open game license', async ({ page }) => {
	await page.goto('/');
	await page.isVisible('text=Core Rulebook');
});
