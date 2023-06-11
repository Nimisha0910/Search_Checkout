describe('Stark Product Search', () => {
    it('should open the Stark url and verify ', () => {
        browser.url('https://www.stark.dk/');
        browser.setTimeout({ implicit: 5000 });
        

        expect(browser).toHaveTitle('STARK - Landsdækkende byggemarked og tømmerhandel med salg til både private og professionelle');

    });

    it('should search product "lampe" and verify the searched product', () => {
        const selectCookie = $('[aria-label="Accepter alle"]');
        selectCookie.click();
        browser.setTimeout({ implicit: 5000 });


        expect(browser).toHaveTitle('STARK - Landsdækkende byggemarked og tømmerhandel med salg til både private og professionelle');

    });
    it('should search product "lampe" and verify the searched product', () => {

        const searchInput = $('#autosuggest__input');
        const searchButton = $('#autosuggest > span');
        searchInput.addValue('Lampe');
        browser.setTimeout({ implicit: 5000 });

        browser.setTimeout({ implicit: 5000 });
        searchButton.click();
        browser.setTimeout({ implicit: 5000 });

        expect(browser).toHaveTitle('Søgning');

    });

    it('should add the product to the bucket and verify', () => {
        const addToBucketButtons = $$('button[id="show-modal"].btn.icon-btn.cta-btn.w-100.height-36');
        const secondAddToBucketButton = addToBucketButtons[1]; // Index 1 represents the second button (0-based index)
        secondAddToBucketButton.click(); // Click on the third "Add to Bucket" button

        expect(browser).toHaveText('Tast postnummer for levering');
    });

    //npx wdio wdio.conf.js
    //#show-modal.login-button
    //#login-email
    //#login-password
    //button[type="submit"].btn.cta-btn.height-50.w-100=Log ind



    //[alt="RAPTOR LED Arbejdslampe 42W"]
    //const element = $('button[type="submit"].btn.cta-btn.height-50.w-100=Log ind');

});


