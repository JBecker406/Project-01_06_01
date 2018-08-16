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

// function to validate required input fields
function validateRequired() {
    var inputElements = document.getElementsByTagName("input");
    var errorDiv = document.getElementById("errorText");
    var fieldsetValidity = true;
    var elementCount = inputElements.length;
    var currentElement = null;
    try {
        for (let i = 0; i < elementCount; i++) {
            currentElement = inputElements[i];
            if (currentElement.value === "") {
                currentElement.style.background = "rgb(255,233,233)";
                fieldsetValidity = false;
            } else {
                currentElement.style.background = "white";
            }
        }
        if (fieldsetValidity) {
            errorDiv.style.display = "none";
            errorDiv.innerHTML = "";
        } else {
            throw "Please fill out all Personal Information.";
        }
    } catch (msg) {
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        formValidity = false;
    }
}

// function to validate form
function validateForm(evt) {
    formValidity = true;
    if (evt.preventDefault) {
        evt.preventDefault();
    } else {
        evt.returnValue = false;
    }
    
    validateRequired();

    if (formValidity) {
        document.getElementsByTagName("form")[0].submit();
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