describe(`Main page`, () => {
    it(`default`, async function () {
        await this.browser.url('/').assertView('desktop', 'body')
    });
    it(`owl-carousel`, async function () {
        await this.browser.url('/').assertView('desktop', '.card_size_l.critical')
    });
});
