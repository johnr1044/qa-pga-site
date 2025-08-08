import { Page } from '@playwright/test';

export class PlayersPage {
    constructor(private page: Page) {}

    async searchForPlayer(name: string) {
        await this.page.click('//*[@id="__next"]/div[3]/div/div[1]/main/div[3]/div[2]/div[1]/div/div[1]/div/div/div/button');
        await this.page.click('//*[@id="leaderboard-input"]');
        await this.page.fill('//*[@id="leaderboard-input"]', name);
        await this.page.waitForTimeout(2000);
        await this.page.click('//*[@id="__next"]/div[3]/div/div[1]/main/div[5]/div[2]/div/div[2]/span[1]/p/a');
        await this.page.waitForTimeout(2000);
    }

    async getProfileHeaderText() {
       return await this.page.textContent('h1');
    }

}