'use strict'
// This module controls the City of Boston seal
// ---------------------------
// On scroll, the seal will hide or show depending on the
// position of the page.
var BostonSeal = (function () {
  // Set height
  var elHeight = 245;

  // A place for some debounce
  var timerEl;

  // Get the seal
  var theSeal = document.querySelectorAll('.s')

  // Check for topic titles
  var isTopic = document.querySelectorAll('.node-type-topic-page').length > 0

  function scrolling() {
    // Let's not do anything if we're still scrolling
    if (timerEl) {
      clearTimeout(timerEl);
    }

    // Trigger event, if we're not scrolling anymore
    timerEl = setTimeout(processScroll, 75);
  }

  function processScroll() {
    // Contains the position of the window.
    var scrollPos = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

    // Figure out which class to use
    var className  = isTopic ? 's--h' : 's--u'
    var hide = scrollPos > elHeight;

    if (hide) {
      // Add the class
      theSeal[0].classList.add(className);
    } else {
      // Add the class
      theSeal[0].classList.remove(className);
    }

    if (isTopic) {
      BostonHeader.handleGuideTitleTrigger(hide);
    }
  }

  function start() {
    // Make sure the seal exists, or punt
    if (theSeal.length > 0 && theSeal[0]) {
      // If we scroll the page, trigger event
      window.addEventListener('scroll', scrolling);

      // Trigger it here, just once
      scrolling();
    }
  }

  return {
    start: start
  }
})()

BostonSeal.start()
