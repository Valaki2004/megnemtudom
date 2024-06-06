import puppeteer from 'puppeteer';
import assert from 'assert';
import { emitWarning } from 'process';

describe('Rombusz kerület számitás', function() {
    let browser;
    let page;
    before(async function(){
        browser = await puppeteer.launch({headless: true});
        page = await browser.newPage();
    })
    after(async function(){
        await browser.close() 
    });
    it('30, 35 bemenetre 120',async function() {
        await page.goto("http://localhost:3000")
        await page.type("#side","30")
        await page.type("#alpha","35")
        await page.click('#calcButton')
        const actual = await page.$eval("#perimeter",elem => elem.value)
        assert.strictEqual(actual, '120')
    });
    it('135, 40 bemenetre 540',async function() {
        await page.goto("http://localhost:3000")
        await page.type("#side","135")
        await page.type("#alpha","40")
        await page.click('#calcButton')
        const actual = await page.$eval("#perimeter",elem => elem.value)
        assert.strictEqual(actual, '540')
    });
    it('A böngészö fül cimének teszteje',async function() {
        await page.goto("http://localhost:3000")
        const actual = await page.title()
        const expected = 'Rombusz'
        assert.strictEqual(actual, expected)
    })
});
