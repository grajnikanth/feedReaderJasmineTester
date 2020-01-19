# FeedReader Jasmine Tester
Udacity Front End Web Developer Project 4 - Feed Reader Testing

# Project Overview

This is project 4 of the Udacity Front End Web Developer Nanodegree. In this project we were given a web-based application that reads RSS feeds. I had to write tests using [Jasmine](http://jasmine.github.io/) to verify the code is working as intended.


## What I learned?

I learnt how to use Jasmine to write a number of tests against a pre-existing application. These will test the underlying business logic of the application as well as the event handling and DOM manipulation.


## How I completed this project?

Reviewed the Feed Reader Testing [Project Rubric](https://review.udacity.com/#!/projects/3442558598/rubric)

1. Downloaded the [required project assets](http://github.com/udacity/frontend-nanodegree-feedreader).
2. Reviewed the functionality of the application within my browser.
3. Explored the application's HTML (**./index.html**), CSS (**./css/style.css**) and JavaScript (**./js/app.js**) to gain an understanding of how it works.
4. Explored the Jasmine spec file in **./jasmine/spec/feedreader.js** and reviewed the [Jasmine documentation](http://jasmine.github.io).
5. Edited the `allFeeds` variable in **./js/app.js** to make the provided test fail and see how Jasmine visualizes this failure in your application.
6. Return the `allFeeds` variable to a passing state.
7. Wrote a test that loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.
8. Wrote a test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.
9. Wrote a new test suite named `"The menu"`.
10. Wrote a test that ensures the menu element is hidden by default. I had to analyze the HTML and the CSS to determine how they were performing the hiding/showing of the menu element.
11. Wrote a test that ensures the menu changes visibility when the menu icon is clicked. This test has two expectations: does the menu display when clicked and does it hide when clicked again.
12. Wrote a test suite named `"Initial Entries"`.
13. Wrote a test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
14. Wrote a test suite named `"New Feed Selection"`.
15. Wrote a test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.
16. No test are dependent on the results of another.
17. Callbacks were used to ensure that feeds are loaded before they are tested.
18. All of my tests are passing. 

## How to run the program?
1. Download or clone the reporsitory.
2. Go to the feedreader.js file located in /jasmine/spec/ folder
3. All the tests written are located in this .js file
4. Open the index.html file in a web browser and all the test results are displayed at the bottom of the webpage.
