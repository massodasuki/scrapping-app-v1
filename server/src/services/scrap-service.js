import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();

  // await page.goto('https://developers.google.com/web/');

  await page.goto('https://www.google.com/search?q=how+to+increase+stamina+for+running')

  // Type into search box.
  // await page.type('.devsite-search-field', 'Headless Chrome');

  // way 2
  const elementHandles = await page.$$('a');
  const propertyJsHandles = await Promise.all(
    elementHandles.map(handle => handle.getProperty('href'))
  );
  const hrefs2 = await Promise.all(
    propertyJsHandles.map(handle => handle.jsonValue())
  );

  console.log(hrefs2);

  //TODO don't include this https://www.google.com and this ''

  // // Wait for suggest overlay to appear and click "show all results".
  // const allResultsSelector = '.devsite-suggest-all-results';
  // await page.waitForSelector(allResultsSelector);
  // await page.click(allResultsSelector);

  // // Wait for the results page to load and display the results.
  // const resultsSelector = '.gsc-results .gs-title';
  // await page.waitForSelector(resultsSelector);

  // // Extract the results from the page.
  // const links = await page.evaluate(resultsSelector => {
  //   return [...document.querySelectorAll(resultsSelector)].map(anchor => {
  //     const title = anchor.textContent.split('|')[0].trim();
  //     return `${title} - ${anchor.href}`;
  //   });
  // }, resultsSelector);

  // // Print all the files.
  // console.log(links.join('\n'));

  await browser.close();
})();