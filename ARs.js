//imports
const puppeteer = require('puppeteer');
const CREDS = require('./creds');

(async () => {
    const browser = await puppeteer.launch({  });
    const page = await browser.newPage();
    await page.goto('https://awesome.realeflow.com');
    await page.screenshot({ path: 'screenshots/example.png' });

    //dom element selectors for login
    const USERNAME_SELECTOR = ('#Email')
    const PASSWORD_SELECTOR = ('#Password')
    const LOGIN_BUTTON = ('#welcome-body > form > div:nth-child(4) > button')

    //click into the username field and input email
    await page.click(USERNAME_SELECTOR);
    await page.keyboard.type(CREDS.username);

    //click into the password field and input password
    await page.click(PASSWORD_SELECTOR);
    await page.keyboard.type(CREDS.password);

    //click the login button
    await page.click(LOGIN_BUTTON);

    const USER_SEARCH = '#search'
    const USER_FIRST_NAME = "Estus"
    const USER_LAST_NAME = "Taylor"

    //go to the admin page
    await page.goto('https://awesome.realeflow.com/Admin/Companies', { waitUntil: 'load' })

    //type in the user and click enter to search for them
    await page.click(USER_SEARCH)
    await page.keyboard.type(USER_FIRST_NAME + " " + USER_LAST_NAME)

    await page.keyboard.press(String.fromCharCode(13));
    // await page.waitForRequest('https://awesome.realeflow.com')
    ///Admin/Companies/List/Created%20Desc/Active/All/25/0/0/?accessLevel=Full%20Access&domainId=1&tag=&search='+USER_LAST_NAME+'%20'+USER_FIRST_NAME+'&parentCompanyId=&_=1561141424128
    
    
    //get the users unique URL to redirect into their account
    const SELECT_USER = await page.evaluate(() => {

        const tds = Array.from(document.querySelectorAll('[title="Switch Into Account"]'))
        return tds.map(td => {
            var txt = td.getAttribute('data-viewurl');
            return txt;
        });

    });

    // WaitForUserResults = function SELECT_USER() {
    //         loaded = true
    // };

    // setTimeout(WaitForUserResults, 5000)

    //construct the URL for the user
    WANTED_USER_URL = 'https://awesome.realeflow.com' + SELECT_USER[0]

    //go to the site
    await page.goto(WANTED_USER_URL);

    //then go to the auto responder page for the user
    await page.goto('https://awesome.realeflow.com/Marketing/Email/ArList')
    
    //get the unique link to each AR campaign
    const ARList = await page.evaluate(() => {
        const tds = Array.from(document.querySelectorAll('table tr td a'))
        return tds.map(td => {
            var txt = td.getAttribute('href');
            return txt;
        });
    });

    //loop through all the ARs increasing i by 2, as all odd number indeces in the array are a link to delete
    for (let i = 0; i < ARList.length; i+=2) {
    
        //construct the dynamic AR link
        const ARUrl = 'https://awesome.realeflow.com' + ARList[i]
        
        //visit the dashboard for each AR
        await page.goto(ARUrl, { waitUntil: 'domcontentloaded' })

        //store the edit AR button and click it
        const EDIT_AR = ('#vue-ar-dashboard > div.container > div:nth-child(1) > div.widget-content > div:nth-child(2) > div.pull-right > a')
        await page.click(EDIT_AR);

        //wait for the modal to show before continuing
        await page.waitForSelector('#editMergeModal', { visible: true })

        //store all the relevant fields for the AR including the save button
        const AR_NAME = ('#autoResponderName')
        const AR_USERNAME = ('#senderName')
        const AR_EMAIL = ('#senderEmail')
        const AR_PHONE = ('#senderPhone')
        const AR_WEBSITE = ('#senderWebsite')
        const AR_SAVE = ('#editMergeModal > div > div > div.md-modal-footer.clear-both > div > button:nth-child(2)')

        //Click into the username field, delete everything and replace with new text
        await page.click(AR_USERNAME)
        await page.keyboard.press("Backspace");
        await page.keyboard.press("Backspace");
        await page.keyboard.press("Backspace");
        await page.keyboard.press("Backspace");
        await page.keyboard.press("Backspace");
        await page.keyboard.press("Backspace");
        await page.keyboard.press("Backspace");
        await page.keyboard.press("Backspace");
        await page.keyboard.press("Backspace");
        await page.keyboard.press("Backspace");
        await page.keyboard.press("Backspace");
        await page.keyboard.press("Backspace");
        await page.keyboard.press("Backspace");
        await page.keyboard.press("Backspace");
        await page.keyboard.press("Backspace");
        await page.keyboard.press("Backspace");
        await page.keyboard.press("Backspace");
        await page.keyboard.press("Backspace");
        await page.keyboard.press("Backspace");
        await page.keyboard.press("Backspace");
        await page.keyboard.press("Backspace");
        await page.keyboard.type("AR_USERNAME")

        //Click into the email field, delete everything and replace with new text
        await page.click(AR_EMAIL)
        await page.keyboard.press("Backspace");
        await page.keyboard.press("Backspace");
        await page.keyboard.press("Backspace");
        await page.keyboard.press("Backspace");
        await page.keyboard.press("Backspace");
        await page.keyboard.press("Backspace");
        await page.keyboard.press("Backspace");
        await page.keyboard.press("Backspace");
        await page.keyboard.press("Backspace");
        await page.keyboard.press("Backspace");
        await page.keyboard.press("Backspace");
        await page.keyboard.press("Backspace");
        await page.keyboard.press("Backspace");
        await page.keyboard.press("Backspace");
        await page.keyboard.press("Backspace");
        await page.keyboard.press("Backspace");
        await page.keyboard.press("Backspace");
        await page.keyboard.press("Backspace");
        await page.keyboard.press("Backspace");
        await page.keyboard.press("Backspace");
        await page.keyboard.press("Backspace");
        await page.keyboard.press("Backspace");
        await page.keyboard.press("Backspace");
        await page.keyboard.press("Backspace");
        await page.keyboard.press("Backspace");
        await page.keyboard.press("Backspace");
        await page.keyboard.press("Backspace");
        await page.keyboard.press("Backspace");
        await page.keyboard.press("Backspace");
        await page.keyboard.press("Backspace");
        await page.keyboard.press("Backspace");
        await page.keyboard.press("Backspace");
        await page.keyboard.press("Backspace");
        await page.keyboard.press("Backspace");
        await page.keyboard.press("Backspace");
        await page.keyboard.press("Backspace");
        await page.keyboard.press("Backspace");
        await page.keyboard.press("Backspace");
        await page.keyboard.press("Backspace");
        await page.keyboard.press("Backspace");
        await page.keyboard.press("Backspace");
        await page.keyboard.press("Backspace");
        await page.keyboard.type("info@test.com")

        //Click into the phone field, delete everything and replace with new text
        await page.click(AR_PHONE)
        await page.keyboard.press("Backspace");
        await page.keyboard.press("Backspace");
        await page.keyboard.press("Backspace");
        await page.keyboard.press("Backspace");
        await page.keyboard.press("Backspace");
        await page.keyboard.press("Backspace");
        await page.keyboard.press("Backspace");
        await page.keyboard.press("Backspace");
        await page.keyboard.press("Backspace");
        await page.keyboard.press("Backspace");
        await page.keyboard.press("Backspace");
        await page.keyboard.press("Backspace");
        await page.keyboard.press("Backspace");
        await page.keyboard.press("Backspace");
        await page.keyboard.press("Backspace");
        await page.keyboard.press("Backspace");
        await page.keyboard.press("Backspace");
        await page.keyboard.press("Backspace");
        await page.keyboard.press("Backspace");
        await page.keyboard.press("Backspace");
        await page.keyboard.type("123-456-7890")

        //Click into the website field, delete everything and replace with new text
        await page.click(AR_WEBSITE)
        await page.keyboard.press("Backspace");
        await page.keyboard.press("Backspace");
        await page.keyboard.press("Backspace");
        await page.keyboard.press("Backspace");
        await page.keyboard.press("Backspace");
        await page.keyboard.press("Backspace");
        await page.keyboard.press("Backspace");
        await page.keyboard.press("Backspace");
        await page.keyboard.press("Backspace");
        await page.keyboard.press("Backspace");
        await page.keyboard.press("Backspace");
        await page.keyboard.press("Backspace");
        await page.keyboard.press("Backspace");
        await page.keyboard.press("Backspace");
        await page.keyboard.press("Backspace");
        await page.keyboard.press("Backspace");
        await page.keyboard.press("Backspace");
        await page.keyboard.press("Backspace");
        await page.keyboard.press("Backspace");
        await page.keyboard.press("Backspace");
        await page.keyboard.type("www.test.com")

        //click save
        await page.click(AR_SAVE);

        //loop will continue until no more ARs then program will end
    }

    await browser.close();
})();