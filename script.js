const puppeteer = require('puppeteer');
let input=process.argv[2];

// let inputTag=documnet.querySelector("input");
// let buttonTag=documment.querySelector("button");


(async function(){

    let browser=await puppeteer.launch({ headless: false ,defaultViewport:null });
    let page=await browser.newPage();
    await page.goto("https://www.cowin.gov.in/");
    await page.waitForSelector(".accessibility-plugin-ac.mb-0.mt-5.mt-md-0.mb-3")
   let pincode= await page.evaluate(function(){
        let code=document.querySelectorAll(".accessibility-plugin-ac.ng-star-inserted");
         let pin=code[3];
        pin.click();
    })
    await page.type('input[maxlength="6"]',input);
    await page.click('button[tabindex="0"]');
    
   

    

})();

