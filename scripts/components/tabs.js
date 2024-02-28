'use strict'
// This module controls the City of Boston tabs
// ---------------------------
var BostonTabs = (function () {
  var tabs;
  var tab;
  var menuToggle;

  function listenToTabs(tabs) {
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].addEventListener('click', function (ev) {
        var path = ev.target.getAttribute('data-href');

        if (path) {
          location.hash = path;
          menuToggle.checked = false;
        }
      });
    }
  }

  function checkForHash() {
    var controls = document.querySelectorAll('.tab-ctrl');

    for (var i = 0; i < controls.length; i++) {
      if (controls[i].getAttribute('data-href') == location.hash) {
        controls[i].checked = true;
      }
    }
  }

  function addTabIndex() {
    for (var i = 0; i < tabs.length; i++) {
      if (tabs[i].hasAttribute('tabIndex') == false) {
        tabs[i].setAttribute("tabIndex", "0");

        tabs[i].addEventListener('keydown', function(e) {
          e.stopImmediatePropagation();

          if (e.keyCode == 13) {
            this.click();
          }
        })
      }
    }
  }

  function hideCloseButton() {
    var closeButton = document.querySelectorAll('.tab-li-close');
    closeButton[0].style.display = "none";
  }

  function start() {
    // Check for tabs
    tabs = document.querySelectorAll('.tab-li-a');

    // If there are tabs, run...
    if (tabs.length > 0) {
      listenToTabs(tabs);
      hideCloseButton();
      checkForHash();
      addTabIndex();

      // Set the menu
      menuToggle = document.getElementById('tabMenuCTRL');
    }

  }

  return {
    start: start
  }
})()

BostonTabs.start();
