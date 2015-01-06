describe('home page', function() {
  var input = element(by.id('searchBox'));
  var submitButton = element(by.id('searchBtn'))

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
    expect(element(by.id('web')).isPresent()).toBe(true);
    expect(element(by.id('images')).isPresent()).toBe(true);
    expect(element(by.id('news')).isPresent()).toBe(true);
  });

  it('should limit the initial search list to 50 records', function() {
    var resultList = element.all(by.repeater('result in vm.results'));
    expect(resultList.count()).toEqual(50);
  });
});