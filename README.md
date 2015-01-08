search-demo
===========

Search engine technology demonstrator

## Technologies Used
- AngularJS
- Bing Search API
- [Jasmine](http://jasmine.github.io/) for unit testing
- [Protractor](http://angular.github.io/protractor/#/) for end-to-end functional testing
- [Karma](https://karma-runner.github.io/0.12/index.html) to automate running of the unit tests

## Demo Site

View the running [search-demo](http://search-demo.azurewebsites.net) of this site on azure

## Unit Tests

Launch Karma to monitor the files/specs for the project and display the results in the console.

```shell
node_modules/karma/bin/karma start karma.config.js
```

## End-to-End Functional Tests

Once protractor is installed you can run the functional tests using: 

```shell
protractor spec/integration/conf.js
```


## License

The MIT License

Copyright (c) 2010-2012 Google, Inc. http://angularjs.org

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
