/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

         // allFeeds is an array of objects. Each of these objects have a feed.url
         // property. This property is checked to verify if it is not null
         // also the feed.url.length is checked to verify it is not null.
         it('each feed has URL defined and that URL is not empty', function() {
           allFeeds.forEach(function(feed) {
             expect(feed.url).toBeDefined();
             expect(feed.url.length).not.toBe(0);
           });
         });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         // similar to the above test here were doing the tests for feed.name property
         it('each feed has name defined and that name is not empty', function() {
           allFeeds.forEach(function(feed) {
             expect(feed.name).toBeDefined();
             expect(feed.name.length).not.toBe(0);
           });
         });
    });


    /* TODO: Write a new test suite named "The menu" */
    // The menu test will contain multiple tests to check the proper functionality
    // of the menu item located on the top left corner of the web page.
    describe('The menu', function(){

      /* TODO: Write a test that ensures the menu element is
       * hidden by default. You'll have to analyze the HTML and
       * the CSS to determine how we're performing the
       * hiding/showing of the menu element.
       */
       // access the html element collection with tag name "body"
       // using the getElementsByTagName() function.
       // in this case the first element of this collection will be checked to
       // see if it contains a class = menu-hidden. If it is true, the test
       // will pass.
       it('menu element is hidden by default', function(){
         let menuBody = document.getElementsByTagName('body');
         expect(menuBody[0].classList.contains('menu-hidden')).toBe(true);
       });

       /* TODO: Write a test that ensures the menu changes
        * visibility when the menu icon is clicked. This test
        * should have two expectations: does the menu display when
        * clicked and does it hide when clicked again.
        */

        //first select the element using the class = menu-icon-link
        // once selected use the click() function on this html element to
        // simulate a mouse click.
        // now the app.js program must remove the menu-hidden to make this menu
        // visible. So check if the body element has the menu-hidden class. If it
        // is null then the test has passed.

        // now use the click() function again to reverse the above steps.
        // check if the element body now does not have a class = menu-hidden
        it('menu changes visibility on clicking', function() {
          let menuIcon = document.getElementsByClassName('menu-icon-link');
          menuIcon[0].click();
          let menuBody = document.getElementsByTagName('body');
          expect(menuBody[0].classList.contains('menu-hidden')).not.toBe(true);
          menuIcon[0].click();
          menuBody = document.getElementsByTagName('body');
          expect(menuBody[0].classList.contains('menu-hidden')).toBe(true);
        });
    });


    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function(){
      /* TODO: Write a test that ensures when the loadFeed
       * function is called and completes its work, there is at least
       * a single .entry element within the .feed container.
       * Remember, loadFeed() is asynchronous so this test will require
       * the use of Jasmine's beforeEach and asynchronous done() function.
       */
       // use the beforeEach() function to run the loadFeed() function because
       // this is an asynchronous function. Pass the done() function provided by
       // jasmine to run as the callback to the loadFeed() function.
       // jasmine will wait till done() function is run. This will ensure that
       // asynchronous function has been completed.
       // once asynchronous function is run then we can run the test.
       beforeEach(function(done){
         loadFeed(0,done);
       });

       // if loadFeed() function ran correctly then the element inside the
       // feed container with class = entry is truthy.
       it('Check entry element present after loadFeed is run', function(){
         let feedElement = document.querySelector('.feed .entry');
         expect(feedElement).toBeTruthy();
       });
    });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function(){
      /* TODO: Write a test that ensures when a new feed is loaded
       * by the loadFeed function that the content actually changes.
       * Remember, loadFeed() is asynchronous.
       */
       // similar to the previous test use the beforeEach() function to run
       // the asynchronous loadFeed() function twice.
       // once run check the innerText of each loadFeed() function to
       // verify they are not equal for the test.
       let firstFeed, secondFeed; // variables to store the div.feed innerText for the feeds loaded.
       beforeEach(function(done) {
         loadFeed(0, function(){
           firstFeed = document.querySelector('div.feed').innerText;
           loadFeed(1, function(){
             secondFeed = document.querySelector('div.feed').innerText;
             done();
           });
         });
       });

       // once the two feed innerText is obtained check them to be not equal for the test to pass.
       it('New feed load content change check', function(){
         expect(firstFeed).not.toBe(secondFeed);
       });
    });

}());
