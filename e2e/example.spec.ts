import { test, expect } from '@playwright/test';

test.describe('Main Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4200/');
  });

  test('should add a product to the list', async ({ page }) => {
    // arrange
    const countBefore = await page.locator('table > tbody > tr').count();

    // act
    await page.locator('#input-name').fill('Ginger Ale');
    await page.locator('input[type="number"]').fill('2');
    await page
      .locator('#input-photo')
      .fill(
        'https://static.ah.nl/dam/product/AHI_43545239373330373735?revLabel=1&rendition=200x200_JPG_Q85&fileType=binary'
      );
    await page.locator('text=Voeg product toe').click();

    // assert
    await expect(page.locator('table > tbody > tr')).toHaveCount(
      countBefore + 1
    );
  });
});
