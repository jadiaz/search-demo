describe('home page', function() {
  var input = element(by.id('searchBox'));
  var submitButton = element(by.id('searchBtn'));
  var webPill = element(by.id('web'));
  var imagePill = element(by.id('images'));
  var newsPill = element(by.id('news'));

  browser.driver.get('file:///Volumes/Nimbus/Users/racan/Projects/search-demo/index.html');
  browser.manage().timeouts().implicitlyWait(500);

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

  it('should limit the initial search list to 50 records', function() {
    var resultList = element.all(by.repeater('result in vm.results'));
    expect(resultList.count()).toEqual(50);
  });
});