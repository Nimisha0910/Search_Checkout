describe("", function () {

    it("Verify Stark Url", async function(){

        browser.url('https://www.stark.dk/')
        await browser.pause(2000)
        await expect(browser).toHaveUrlContaining('stark')

    })

    it("Verify Cookie Selection", async function(){

        const acceptcookiebutton = await $("button[aria-label='Accepter alle']")
        await acceptcookiebutton.click()
        await browser.pause(2000)

        await expect(browser).toHaveTitle('STARK - Landsdækkende byggemarked og tømmerhandel med salg til både private og professionelle')

    })
    
    it("Verify Product Search", async function(){
        
        await(await $("#autosuggest__input")).setValue("Lampe")
        await browser.pause(2000)

        await(await $("#autosuggest > span")).click()

        await expect(browser).toHaveTitle('Søgning');


    })

    it("Verify Product Added to Bucket", async function(){

        const addToBucketButtons = await $$('//*[@id="show-modal"]/span')

        const secondAddToBucketButton = addToBucketButtons[2] // Index 2 represents the first button (0-based index)
        await browser.pause(2000)

        await secondAddToBucketButton.click(); // Click on the third "Add to Bucket" button
        await browser.pause(2000)

        const verifyProduct = await $("label[class='textfield-label pt-1']")
        //const verifyText = await verifyProduct.getText()
        await expect(verifyProduct).toHaveText('Postnummer')



    })

    it("Verify and add Postal Code", async function(){

        await (await $("input[class='textfield w-100 maxwidth-160 mr-2']")).setValue(2000)
        await browser.pause(1000)
        await (await $("button[class='btn primary-btn w-50']")).click()
        await browser.pause(2000)


        const verifyPostalCode = await $("div[class='modal-title']")
        //const verifyText1 = await verifyPostalCode.getText()
        await expect(verifyPostalCode).toHaveText('TILFØJET TIL KURVEN')
        await browser.pause(1000)

    })

    it("Go to Cart and verify cart", async function(){

        await (await $("button[class='btn secondary-btn mr-0 mr-sm-3 mr-md-0 mr-lg-3 mb-3 mb-sm-0 mb-md-3 mb-lg-0']")).click()
        await browser.pause(1000)

        await expect(browser).toHaveUrlContaining('Checkout')

    })

    it("Verify Purchase Details", async function(){

        await (await $("button[class ='btn cta-btn w-100 mt-4']")).click()
        await browser.pause(1000)
        await expect(browser).toHaveUrlContaining('KoebsDetaljer')

        await(await $("input[autocomplete = 'name' ]")).setValue("Nimisha Gupta")
        await(await $("input[autocomplete = 'tel' ]")).setValue("12345678")
        await(await $("input[autocomplete='address-line1']")).setValue("abc")
        await(await $("input[autocomplete = 'address-line2' ]")).setValue("33")
        await(await $("input[autocomplete = 'address-line3' ]")).setValue("22")
        await(await $("input[autocomplete = 'email' ]")).setValue("nimisha@gmail.com")
        await(await $("input[autocomplete = 'shipping postal-code' ]")).setValue("2000")
        await(await $("input[autocomplete = 'shipping locality' ]")).click()
        await browser.pause(2000)

        await(await $$("button.btn.cta-btn.ml-sm-auto.order-1.order-sm-2.mb-4.mb-sm-0")[0]).click()
        await browser.pause(2000)

        await expect(browser).toHaveUrlContaining('LeveranceDetaljer')
        await browser.scroll(0, 400)
    })

    it("Verify Delivery Details", async function(){

        await(await $('//*[@id="content"]/div[3]/div/div/div/div/div[6]/button[2]')).click()
        await browser.pause(2000)

        await expect(browser).toHaveUrlContaining('Opsummering')
    })

    it("Verify summary and for Payment(Til betaling)", async function(){

        await browser.scroll(0, 400)
        await (await $("span[class='d-inline-block']")).click()
        await browser.pause(2000)

        await (await $("button[class='btn cta-btn w-100']")).click()
        await browser.pause(2000)
        

    })
})