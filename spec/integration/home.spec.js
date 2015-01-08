describe('home page', function() {
  var input = element(by.id('searchBox'));
  var submitButton = element(by.id('searchBtn'));
  var webPill = element(by.id('web'));
  var imagePill = element(by.id('images'));
  var newsPill = element(by.id('news'));

  browser.driver.get('file:///Volumes/Nimbus/Users/racan/Projects/search-demo/index.html');
  browser.manage().timeouts().implicitlyWait(500);

  describe('basic features', function () {

    beforeEach(function () {
      input.clear();
    });

    it('should have an input box to allow user to enter query', function() {
      expect(input.isPresent()).toBe(true);
    });

    it('should have a submit button', function() {
      expect(submitButton.isPresent()).toBe(true);
    });

    it('should have selectors to switch between web/image/news searches', function() {
      submitButton.click();
      expect(webPill.isPresent()).toBe(true);
      expect(imagePill.isPresent()).toBe(true);
      expect(newsPill.isPresent()).toBe(true);
    });

    it('should not display results partial if no search string was provided', function () {
      submitButton.click();
      expect(webPill.isDisplayed()).toBe(false);
      expect(imagePill.isDisplayed()).toBe(false);
      expect(newsPill.isDisplayed()).toBe(false);
    });

    it('should default to web search for the initial query', function () {
      input.sendKeys('wrx sti');
      submitButton.click();
      browser.waitForAngular();
      expect(webPill.isDisplayed()).toBe(true);
      expect(webPill.getAttribute('class')).toBe('active');
      expect(imagePill.getAttribute('class')).toBe('');
      expect(newsPill.getAttribute('class')).toBe('');
    });

  });

  describe('search operation selectors', function () {

    input.clear();
    input.sendKeys('2015 ford shelby gt350');
    submitButton.click();
    browser.manage().timeouts().implicitlyWait(500);

    it('should mark the web pill active if performing a web search', function () {
      webPill.click();
      browser.waitForAngular();
      expect(webPill.getAttribute('class')).toBe('active');
      expect(imagePill.getAttribute('class')).toBe('');
      expect(newsPill.getAttribute('class')).toBe('');
    });

    it('should mark the image pill active if performing a image search', function () {
      imagePill.click();
      browser.waitForAngular();
      expect(webPill.getAttribute('class')).toBe('');
      expect(imagePill.getAttribute('class')).toBe('active');
      expect(newsPill.getAttribute('class')).toBe('');
    });

    it('should mark the news pill active if performing a news search', function () {
      newsPill.click();
      browser.waitForAngular();
      expect(webPill.getAttribute('class')).toBe('');
      expect(imagePill.getAttribute('class')).toBe('');
      expect(newsPill.getAttribute('class')).toBe('active');
    });

  });

  describe('search results', function () {

    it('should limit the initial search list to 25 records', function() {
      input.clear();
      input.sendKeys('windows iot');
      submitButton.click();
      browser.manage().timeouts().implicitlyWait(2000);
      var resultList = element.all(by.repeater('result in vm.results'));
      expect(resultList.count()).toEqual(25);
    });

  });
});