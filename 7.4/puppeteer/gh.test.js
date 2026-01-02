let page;

beforeEach(async () => {
  page = await browser.newPage();
  await page.goto("https://github.com/team");
});

afterEach(() => {
  page.close();
});

describe("Github page tests", () => {
  test("The h1 header content'", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector("h1");
    const title2 = await page.title();
    expect(title2).toEqual("GitHub: Where the world builds software · GitHub");
  }, 15000);

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", (link) => link.getAttribute("href"));
    expect(actual).toEqual("#start-of-content");
  }, 10000);

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, (link) => link.textContent);
    expect(actual).toContain("Sign up for free");
  }, 12000);
});

describe("Новые тесты — заголовки других страниц", () => {
  let browser;
  let page;

  beforeEach(async () => {
    browser = await puppeteer.launch({ headless: false });
    page = await browser.newPage();
  });

  afterEach(async () => {
    await page.close();
    await browser.close();
  });

  test("Тест 4 — заголовок Netology", async () => {
    await page.goto("https://netology.ru");
    const title = await page.title();
    expect(title).toMatch(/Netology/);
  }, 15000);

  test("Тест 5 — заголовок MDN", async () => {
    await page.goto("https://developer.mozilla.org");
    const title = await page.title();
    expect(title).toMatch(/MDN/);
  }, 15000);

  test("Тест 6 — заголовок Stack Overflow", async () => {
    await page.goto("https://stackoverflow.com");
    const title = await page.title();
    expect(title).toMatch(/Stack Overflow/);
  }, 15000);
});
