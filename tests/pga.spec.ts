import { test, expect } from '@playwright/test';
import { homePage } from '../pages/HomePage';
import { PlayersPage } from '../pages/PlayersPage';

test('search for Scottie Scheffler and open profile', async ({ page }) => {
  const home = new homePage(page);
  const players = new PlayersPage(page);

  await page.goto('https://www.pgatour.com/');
  await home.clickPlayersTab();
  await players.searchForPlayer('Scottie Scheffler');
  const h1 = await players.getProfileHeaderText();

 
  await expect(h1).toContain('ScottieScheffler');
});

