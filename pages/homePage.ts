import { Page } from '@playwright/test';


export class homePage {
    constructor(private page: Page) {}


    async clickPlayersTab() {
        await this.page.click('//*[@id="__next"]/div[1]/div/div[1]/div[1]/header/div/div[2]/nav/ul/li[6]/a');
        
    }
}