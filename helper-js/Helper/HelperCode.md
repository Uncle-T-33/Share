# Index

- [Declare variables in JS](#declare-variables-in-js)
- [Assign values to multiple variables](#assign-values-to-multiple-variables)
- [Ternary operator](#ternary-operator)
- [Assign default value with OR ||](#assign-default-value-with-or)
- [AND operator &&](#and-operator)
- [Arrow Function](#arrow-function)
- [Template Literals ES6](#template-literals-es6)
- [Strings on multiple lines](#strings-on-multiple-lines)
- [Check multiple conditions](#check-multiple-conditions)
- [Assign properties to objects](#assign-properties-to-objects)
- [Convert string to number](#convert-string-to-number)
- [Repeat the sequence several times](#repeat-the-sequence-several-times)
- [Calculate exponentiation](#calculate-exponentiation)
- [Rounding](#rounding)
- [Find min max in an array of numbers](#find-min-max-in-an-array-of-numbers)
- [For loop](#for-loop)
- [Iterate over the properties of the object](#iterate-over-the-properties-of-the-object)
- [Array merge](#array-merge)
- [Deep copy](#deep-copy)
- [Get characters from a string](#get-characters-from-a-string)
- [Hide all elements specified](#hide-all-elements-specified)
- [Check if the elements has the specified class](#check-if-the-elements-has-the-specified-class)
- [Toggle a class for an element](#toggle-a-class-for-an-element)
- [Get the scroll position of the current page](#get-the-scroll-position-of-the-current-page)
- [Smooth-scroll to the top of the page](#smooth-scroll-to-the-top-of-the-page)
- [Check if the parent element contains the child element](#check-if-the-parent-element-contains-the-child-element)
- [Check if the element specified is visible in the viewport](#check-if-the-element-specified-is-visible-in-the-viewport)
- [Fetch all images within an element](#fetch-all-images-within-an-element)
- [Figure out if the device is a moblie of destop-laptop](#figure-out-if-the-device-is-a-moblie-of-destop-laptop)
- [Get the current URL](#get-the-current-url)
- [Create an object containing the paramaters of the current url](#create-an-object-containing-the-paramaters-of-the-current-url)
- [Encode a set of form elements as an object](#encode-a-set-of-form-elements-as-an-object)
- [Retrieve a set of properties indicated by the given selectors from an object](#retrieve-a-set-of-properties-indicated-by-the-given-selectors-from-an-object)
- [Invoke the provided function after wait "in milliseconds"](#invoke-the-provided-function-after-wait-"in-milliseconds")
- [Trigger a specific event on a given element](#trigger-a-specific-event-on-a-given-element)
- [Remove an event listener from an element](#remove-an-event-listener-from-an-element)
- [Get readable format of the given number of miliseconds](#get-readable-format-of-the-given-number-of-miliseconds)
- [Get the difference in days between two dates](#get-the-difference-in-days-between-two-dates)
- [Make a get request to the passed URL](#make-a-get-request-to-the-passed-url)
- [Make a post request to the passed URL](#make-a-post-request-to-the-passed-url)
- [A counter with the specified range, duration for the specified selector](#a-counter-with-the-specified-range-duration-for-the-specified-selector)
- [Copy a string to the clipboard](#copy-a-string-to-the-clipboard)
- [Find out if the browser tab of the page is focused](#find-out-if-the-browser-tab-of-the-page-is-focused)
- [Create a directoty, if it does not exist](#create-a-directoty-if-it-does-not-exist)

<br>

---

<br>

## [Declare variables in JS](#index)

> ```javascript
> // normal
> let x;
> let y = 20;
>
> // compact
> let x,
>   y = 20;
> ```

## [Assign values to multiple variables](#index)

> ```javascript
> // normal
> let a, b, c;
> a = 5;
> b = 8;
> c = 12;
>
> // compact
> let [a, b, c] = [5, 8, 12];
> ```

## [Ternary operator](#index)

> ```javascript
> // normal
> let number = 26;
> let isEven;
> if (number % 2) {
>   isEven = true;
> } else {
>   isEven = false;
> }
>
> // compact
> let isEven = number % 2 ? true : false;
> ```

## [Assign default value with OR ||](#index)

> ```javascript
> // normal
> let imagePath;
> let path = getImagePath();
> if (path !== null && path !== undefined && path !== '')
>    imagePath = path;
> }
> else {
>    imagePath = 'default.jpg';
> }
>
> // compact
> let imagePath = getImagePath() || 'default.jpg';
> ```

## [AND operator &&](#index)

> ```javascript
> // normal
> if (isLoggedin) {
>   goToHomepage();
> }
>
> // compact
> isLoggedin && goToHomepage();
> ```

## [Arrow Function](#index)

> ```javascript
> // normal
> function add(num1, num2) {
>   return num1 + num2;
> }
>
> // compact
> const add = (num1, num2) => num1 + num2;
> ```

## [Template Literals ES6](#index)

> ```javascript
> // normal
> console.log("The rechargeable 4000 " + number + " mAh battery.");
>
> // compact
> console.log(`The rechargeable 4000 mAh battery ${number} mAh battery`);
> ```

## [Strings on multiple lines](#index)

> ```javascript
> // normal
> console.log(
>   "Connecting up to 2 devices via Bluetooth and wireless 2.4GHz simultaneously.\n" +
>     "Compatibility: Windows / macOS / iOS / Android. \n"
> );
>
> // compact
> console.log(`Connecting up to 2 devices via Bluetooth and wireless 2.4GHz simultaneously.
> Compatibility: Windows / macOS / iOS / Android.`);
> ```

## [Check multiple conditions](#index)

> ```javascript
> // normal
> if (value === 1 || value === "Ichi" || value === 2 || value === "Ni") {
>   // do something...
> }
>
> // compact
> if ([1, "Ichi", 2, "Ni"].indexOf(value) >= 0) {
>   // do something...
> }
> ```

## [Assign properties to objects](#index)

> ```javascript
> let firstname = "Amitav";
> let lastname = "Mishra";
> // normal
> let obj = { firstname: firstname, lastname: lastname };
>
> // compact
> let obj = { firstname, lastname };
> ```

## [Convert string to number](#index)

> ```javascript
> // normal
> let total = parseInt("453");
> let average = parseFloat("42.6");
>
> // compact
> let total = +"453";
> let average = +"42.6";
> ```

## [Repeat the sequence several times](#index)

> ```javascript
> // normal
> let str = "";
> for (let i = 0; i < 5; i++) {
>   str += "Hello ";
> }
> console.log(str); // Hello Hello Hello Hello Hello
>
> // compact
> "Hello ".repeat(5);
> ```

## [Calculate exponentiation](#index)

> ```javascript
> // normal
> const power = Math.pow(5, 3); // 125
>
> // compact
> const power = 5 ** 3; // 125
> ```

## [Rounding](#index)

> ```javascript
> // normal
> const floor = Math.floor(6.9); // 6
>
> // compact
> const floor = ~~6.9; // 6
> ```

## [Find min max in an array of numbers](#index)

> ```javascript
> // normal
> Use for loop, Array.reduce()
>
> // compact
> const arr = [2, 8, 15, 4];
> Math.max(...arr); // 15
> Math.min(...arr); // 2
> ```

## [For loop](#index)

> ```javascript
> // normal
> for (let i = 0; i < arr.length; i++) {
>   console.log(arr[i]);
> }
>
> // compact
> /* for - of */
> for (const val of arr) {
>   console.log(val);
> }
> /* for - in */
> for (const index in arr) {
>   console.log(arr[index]);
> }
> ```

## [Iterate over the properties of the object](#index)

> ```javascript
> let obj = {
>   x: 20,
>   y: 50,
> };
> // Loop through object properties
> for (const key in obj) {
>   // Print the value of the corresponding attribute
>   console.log(obj[key]); // 20, 50
> }
> ```

## [Array merge](#index)

> ```javascript
> let arr1 = [20, 30];
> let arr2 = [40, 50];
> // normal
> let arr3 = arr1.concat([60, 80]); // [20, 30, 60, 80]
>
> // compact
> let arr4 = [...arr1, 60, 80]; // [20, 30, 60, 80]
> let arr5 = [...arr1, ...arr2]; // [20, 30, 40, 50]
> ```

## [Deep copy](#index)

> ```javascript
> let obj = {
>   x: 20,
>   y: {
>     z: 30,
>   },
> };
> // normal
> const makeDeepClone = (obj) => {
>   let newObject = {};
>   Object.keys(obj).map((key) => {
>     if (typeof obj[key] === "object") {
>       newObject[key] = makeDeepClone(obj[key]);
>     } else {
>       newObject[key] = obj[key];
>     }
>   });
>   return newObject;
> };
> const cloneObj = makeDeepClone(obj);
>
> // compact
> const cloneObj = JSON.parse(JSON.stringify(obj));
> ```

## [Get characters from a string](#index)

> ```javascript
> let str = "IQUNIX L80 Formula";
> // normal
> str.charAt(0); // I
>
> // compact
> str[0]; // I
> ```

## [Hide all elements specified](#index)

> ```javascript
> const hide = (...el) => [...el].forEach((e) => (e.style.display = "none"));
>
> // example
> hide(document.querySelectorAll("img")); //hide all <img>
> ```

## [Check if the elements has the specified class](#index)

> ```javascript
> const hasClass = (el, className) => el.classList.contains(className);
>
> // example
> hasClass(document.querySelector("p.special"), "special"); // true
> ```

## [Toggle a class for an element](#index)

> ```javascript
> const toggleClass = (el, className) => el.classList.toggle(className);
>
> // example
> toggleClass(document.querySelector("p.special"), "special");
> ```

## [Get the scroll position of the current page](#index)

> ```javascript
> const getScrollPosition = (el = window) => ({
>   x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
>   y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop,
> });
>
> // example
> getScrollPosition(); // {x: 0, y: 200}
> ```

## [Smooth-scroll to the top of the page](#index)

> ```javascript
> const scrollToTop = () => {
>   const c = document.documentElement.scrollTop || document.body.scrollTop;
>   if (c > 0) {
>     window.requestAnimationFrame(scrollToTop);
>     window.scrollTo(0, c - c / 8);
>   }
> };
>
> // example
> scrollToTop();
> ```

## [Check if the parent element contains the child element](#index)

> ```javascript
> const elementContains = (parent, child) =>
>   parent !== child && parent.contains(child);
>
> // example
> elementContains(
>   document.querySelector("head"),
>   document.querySelector("title")
> ); // true
> elementContains(
>   document.querySelector("body"),
>   document.querySelector("body")
> ); // false
> ```

## [Check if the element specified is visible in the viewport](#index)

> ```javascript
> const elementIsVisibleInViewport = (el, partiallyVisible = false) => {
>   const { top, left, bottom, right } = el.getBoundingClientRect();
>   const { innerHeight, innerWidth } = window;
>   return partiallyVisible
>     ? ((top > 0 && top < innerHeight) ||
>         (bottom > 0 && bottom < innerHeight)) &&
>         ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
>     : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
> };
>
> // example
> elementIsVisibleInViewport(el); // (not fully visible)
> elementIsVisibleInViewport(el, true); // (partially visible)
> ```

## [Fetch all images within an element](#index)

> ```javascript
> const getImages = (el, includeDuplicates = false) => {
>   const images = [...el.getElementsByTagName("img")].map((img) =>
>     img.getAttribute("src")
>   );
>   return includeDuplicates ? images : [...new Set(images)];
> };
>
> // example
> getImages(document, true); // ['image1.jpg', 'image2.png', 'image1.png', '...']
> getImages(document, false); // ['image1.jpg', 'image2.png', '...']
> ```

## [Figure out if the device is a moblie of destop-laptop](#index)

> ```javascript
> const detectDeviceType = () =>
>   /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
>     navigator.userAgent
>   )
>     ? "Mobile"
>     : "Desktop";
>
> // example
> detectDeviceType(); // "Mobile" or "Desktop"
> ```

## [Get the current URL](#index)

> ```javascript
> const currentURL = () => window.location.href;
>
> // example
> currentURL(); // 'https://google.com'
> ```

## [Create an object containing the paramaters of the current url](#index)

> ```javascript
> const getURLParameters = (url) =>
>   (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
>     (a, v) => (
>       (a[v.slice(0, v.indexOf("="))] = v.slice(v.indexOf("=") + 1)), a
>     ),
>     {}
>   );
>
> // example
> getURLParameters("http://url.com/page?n=Adam&s=Smith"); // {n: 'Adam', s: 'Smith'}
> getURLParameters("google.com"); // {}
> ```

## [Encode a set of form elements as an object](#index)

> ```javascript
> const formToObject = (form) =>
>   Array.from(new FormData(form)).reduce(
>     (acc, [key, value]) => ({
>       ...acc,
>       [key]: value,
>     }),
>     {}
>   );
>
> // example
> formToObject(document.querySelector("#form")); // { email: 'test@email.com', name: 'Test Name' }
> ```

## [Retrieve a set of properties indicated by the given selectors from an object](#index)

> ```javascript
> const get = (from, ...selectors) =>
>   [...selectors].map((s) =>
>     s
>       .replace(/\[([^\[\]]*)\]/g, ".$1.")
>       .split(".")
>       .filter((t) => t !== "")
>       .reduce((prev, cur) => prev && prev[cur], from)
>   );
> const obj = {
>   selector: { to: { val: "val to select" } },
>   target: [1, 2, { a: "test" }],
> };
>
> // example
> get(obj, "selector.to.val", "target[0]", "target[2].a"); // ['val to select', 1, 'test']
> ```

## [Invoke the provided function after wait "in milliseconds"](#index)

> ```javascript
> const delay = (fn, wait, ...args) => setTimeout(fn, wait, ...args);
>
> // example
> delay(
>   function (text) {
>     console.log(text);
>   },
>   1000,
>   "later"
> );
> // Logs 'later' after one second.
> ```

## [Trigger a specific event on a given element](#index)

> ```javascript
> const triggerEvent = (el, eventType, detail) =>
>   el.dispatchEvent(new CustomEvent(eventType, { detail }));
>
> // example
> triggerEvent(document.getElementById("myId"), "click");
> triggerEvent(document.getElementById("myId"), "click", { username: "bob" });
> ```

## [Remove an event listener from an element](#index)

> ```javascript
> const off = (el, evt, fn, opts = false) =>
>   el.removeEventListener(evt, fn, opts);
>
> const fn = () => console.log("!");
> document.body.addEventListener("click", fn);
> off(document.body, "click", fn); // no longer logs '!' upon clicking on the page
> ```

## [Get readable format of the given number of miliseconds](#index)

> ```javascript
> const formatDuration = (ms) => {
>   if (ms < 0) ms = -ms;
>   const time = {
>     day: Math.floor(ms / 86400000),
>     hour: Math.floor(ms / 3600000) % 24,
>     minute: Math.floor(ms / 60000) % 60,
>     second: Math.floor(ms / 1000) % 60,
>     millisecond: Math.floor(ms) % 1000,
>   };
>   return Object.entries(time)
>     .filter((val) => val[1] !== 0)
>     .map(([key, val]) => `${val} ${key}${val !== 1 ? "s" : ""}`)
>     .join(", ");
> };
>
> // example
> formatDuration(1001); // '1 second, 1 millisecond'
> formatDuration(34325055574); // '397 days, 6 hours, 44 minutes, 15 seconds, 574 milliseconds'
> ```

## [Get the difference in days between two dates](#index)

> ```javascript
> const getDaysDiffBetweenDates = (dateInitial, dateFinal) =>
>   (dateFinal - dateInitial) / (1000 * 3600 * 24);
>
> // example
> getDaysDiffBetweenDates(new Date("2017-12-13"), new Date("2017-12-22")); // 9
> ```

## [Make a get request to the passed URL](#index)

> ```javascript
> const httpGet = (url, callback, err = console.error) => {
>   const request = new XMLHttpRequest();
>   request.open("GET", url, true);
>   request.onload = () => callback(request.responseText);
>   request.onerror = () => err(request);
>   request.send();
> };
>
> httpGet("https://jsonplaceholder.typicode.com/posts/1", console.log);
> // Logs: {"userId": 1, "id": 1, "title": "sample title", "body": "my text"}
> ```

## [Make a post request to the passed URL](#index)

> ```javascript
> const httpPost = (url, data, callback, err = console.error) => {
>   const request = new XMLHttpRequest();
>   request.open("POST", url, true);
>   request.setRequestHeader("Content-type", "application/json; charset=utf-8");
>   request.onload = () => callback(request.responseText);
>   request.onerror = () => err(request);
>   request.send(data);
> };
>
> const newPost = {
>   userId: 1,
>   id: 1337,
>   title: "Foo",
>   body: "bar bar bar",
> };
> const data = JSON.stringify(newPost);
>
> httpPost("https://jsonplaceholder.typicode.com/posts", data, console.log);
> // Logs: {"userId": 1, "id": 1337, "title": "Foo", "body": "bar bar bar"}
> ```

## [A counter with the specified range, duration for the specified selector](#index)

> ```javascript
> const counter = (selector, start, end, step = 1, duration = 2000) => {
>   let current = start,
>     _step = (end - start) * step < 0 ? -step : step,
>     timer = setInterval(() => {
>       current += _step;
>       document.querySelector(selector).innerHTML = current;
>       if (current >= end) document.querySelector(selector).innerHTML = end;
>       if (current >= end) clearInterval(timer);
>     }, Math.abs(Math.floor(duration / (end - start))));
>   return timer;
> };
>
> // example
> counter("#my-id", 1, 1000, 5, 2000); // Creates a 2-second timer for the element with id="my-id"
> ```

## [Copy a string to the clipboard](#index)

> ```javascript
> const copyToClipboard = (str) => {
>   const el = document.createElement("textarea");
>   el.value = str;
>   el.setAttribute("readonly", "");
>   el.style.position = "absolute";
>   el.style.left = "-9999px";
>   document.body.appendChild(el);
>   const selected =
>     document.getSelection().rangeCount > 0
>       ? document.getSelection().getRangeAt(0)
>       : false;
>   el.select();
>   document.execCommand("copy");
>   document.body.removeChild(el);
>   if (selected) {
>     document.getSelection().removeAllRanges();
>     document.getSelection().addRange(selected);
>   }
> };
>
> // example
> copyToClipboard("Lorem ipsum"); // 'Lorem ipsum' copied to clipboard.
> ```

## [Find out if the browser tab of the page is focused](#index)

> ```javascript
> const isBrowserTabFocused = () => !document.hidden;
>
> // example
> isBrowserTabFocused(); // true
> ```

## [Create a directoty, if it does not exist](#index)

> ```javascript
> const fs = require("fs");
> const createDirIfNotExists = (dir) =>
>   !fs.existsSync(dir) ? fs.mkdirSync(dir) : undefined;
>
> // example
> createDirIfNotExists("test"); // creates the directory 'test', if it doesn't exist
> ```
