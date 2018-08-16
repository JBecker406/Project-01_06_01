/*
 *  script.js
 *  Form validation functions for index.html
 *
 *  Author: Jeremy Becker
 *  Date: 8.15.18
 *
 */
"use strict";

var formValidity = true;

// function to validate form
function validateForm(evt) {
    if (evt.preventDefault) {
        evt.preventDefault();
    } else {
        evt.returnValue = false;
    }
}

// function to create event listeners
function createEventListeners() {
    var form = document.getElementsByTagName("form")[0];
    if (form.addEventListener) {
        form.addEventListener("submit", validateForm);
    } else if (form.attachEventListener) {
        form.attachEventListener("onsubmit", validateForm);
    }
}

// function to load event handlers
if (window.addEventListener) {
    window.addEventListener("load", createEventListeners, false);
} else if (window.attachEventListener) {
    window.attachEventListener("onload", createEventListeners);
}