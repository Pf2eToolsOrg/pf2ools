import { expect, test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { name: 'Hello Skeleton' })).toBeVisible();
});

test('license page has expected the open game license', async ({ page }) => {
	await page.goto('/');
	await page.isVisible('text=Core Rulebook');
})