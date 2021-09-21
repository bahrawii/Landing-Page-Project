# Landing Page Project

## Table of Contents

* [Instructions](#instructions)
* [Development]

## Instructions

The starter project has some HTML and CSS styling to display a static version of the Landing Page project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the Udacity Classroom.


## Development

This project constitutes a landing page where we dynamically created a navbar through JS according to the number of sections that is present in the HTML document. Each navbar item when clicked navigates the user to the particular sections that was being clicked on. This has been done by adding an anchor tag dynamically inside the list item in the HTML. Furthermore, each section in the page in which the viewport is currently encompassing will be distinct and marked active through the JS code that was being added. This is done through the add() method performed on the DOMTokenList provided by the classList property.