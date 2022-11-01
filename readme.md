# Introduction

- [Introduction](#introduction)
  - [Code of Conduct](#code-of-conduct)
  - [Resources](#resources)
    - [Github](#github)
    - [Reading](#reading)
  - [Homework](#homework)
  - [Today's Game](#todays-game)
  - [Today's Homework](#todays-homework)
  - [Summary of Tools and Technology](#summary-of-tools-and-technology)
  - [Today's Exercise](#todays-exercise)
    - [Today's VSCode Extensions](#todays-vscode-extensions)
  - [The Command Line](#the-command-line)
  - [Examine the Starter Page](#examine-the-starter-page)
  - [CSS Enhancements](#css-enhancements)
    - [Friends Don't Let Friends Browse in Light Mode](#friends-dont-let-friends-browse-in-light-mode)
    - [Smooth Scrolling with Page Fragments](#smooth-scrolling-with-page-fragments)
  - [DOM Scripting Review](#dom-scripting-review)
    - [.querySelectorAll()](#queryselectorall)
    - [.querySelector()](#queryselector)
  - [Looping - for and forEach()](#looping---for-and-foreach)
  - [EXERCISE I - Generating Content From an Array](#exercise-i---generating-content-from-an-array)
    - [Template Literals](#template-literals)
    - [Arrow Functions](#arrow-functions)
    - [Aside: React](#aside-react)
  - [EXERCISE II - Content Generation with an Array of Objects](#exercise-ii---content-generation-with-an-array-of-objects)
    - [Aside: Objects](#aside-objects)
  - [EXERCISE - AJAX and APIs](#exercise---ajax-and-apis)
  - [EXERCISE - Adding Content](#exercise---adding-content)
    - [The fetch() API](#the-fetch-api)
  - [EXERCISE - News Section Headers](#exercise---news-section-headers)
  - [Instructor Notes - students may ignore eveything after this point](#instructor-notes---students-may-ignore-eveything-after-this-point)
    - [Immediately Invoked Function Expression](#immediately-invoked-function-expression)
    - [Local Storage](#local-storage)

## Code of Conduct

1. There is no such thing as a silly question, you are encouraged to speak up anytime something is not clear to you
2. There is no such thing as a silly mistake, they are a gateway to learning
3. Do not dismiss someone because they have a different level of experience - be kind to others
4. During class exercises you promise to alert me the second something goes awry with your project
5. I will make myself available after class to clarify or expand on topics (or we can set an alternate time via email)

## Resources

Your instructor - Daniel Deverell (he, him): Front & Back end developer at JPMorgan Chase specializing in data visualization, React and Node.

- 6:30 PM - 9:30 PM Tuesdays and Thursdays
- Daniel Deverell, [email](mailto:daniel.deverell@nyu.edu) - `daniel.deverell@nyu.edu`
- [Syllabus](https://docs.google.com/document/d/1y8YLSOsLWszTlEKK5fk1jQNSMdqOUej3c28MJBgPMyQ/edit)
- Office hours will be held an an as needed basis. Please email me if you would like to make an appointment.

### Github

[Github](https://github.com/front-end-intermediate) - `https://github.com/front-end-intermediate`, is the source for _all files_ used in this class. Each class's activities will be documented in a readme file.

You can download a zip file from Github using the green "Clone or Download" menu and selecting "Download ZIP."

Please keep the sessions home page open in a tab during class for reference and in order to copy and paste code.

The edited files as they existed at the end of class can be downloaded from the `*-done` branch of this and all subsequent Github repositories. Be sure to select the branch on Github _before_ downloading the zip. I will demonstrate this in class.

### Reading

Online reading and videos will be assigned.

## Homework

Homework will be handed in via Github and then alerting me via email - daniel.deverell@nyu.edu. I can schedule special sessions for those who require assistance setting up Git and Github.

## Today's Game

Its important to me to know where you are in your learning journey. During today's class, keep the Zoom chat open and enter one of the following as appropriate:

| chat | means:                                         |
| ---- | ---------------------------------------------- |
| !    | I've heard of this before and used it          |
| !!   | I've heard of this before but never used it    |
| !!!  | I've never heard of this before                |
| !!!! | I've never heard of this before and I'm scared |

I will periodically review any messages and ultimately try to use the results to adjust the pace of the class.

## Today's Homework

- Install [Git](https://git-scm.com)
- Install [NodeJS](https://nodejs.org)
- Create a Github account
- Create a Netlify account

- Read [Basic DOM Manipulation](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents#active_learning_basic_dom_manipulation) and do the [exercise](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents#active_learning_basic_dom_manipulation)
- Read [Fetching Data from the Server](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data) and do the [exercise](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data#the_fetch_api.)

[Mozilla Develpers Network](https://developer.mozilla.org/en-US/docs/Web/javascript#for_complete_beginners) offers a series of JavaScript tutorial.

If you have time, I recommend the [Asynchronous JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous) and the [Client Side Storage](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage) tutorials.

---

## Summary of Tools and Technology

A listing of applications and technologies you will be introduced to in the class include:

- Intermediate/advanced HTML, CSS and JavaScript
- React, NODE, MongoDB, ExpressJS
- Visual Studio Code and the Terminal
- Git and Github
- Styled Components (CSS in JS)

## Today's Exercise

In today's class we will implement [this single page web site](https://intermediate-lesson-one.netlify.app/) with content almost entirely generated using JavaScript (try selecting `view > developer > View Source` in Chrome).

Note the navigation on small screen and the response to changing the OS between light and dark mode.

In creating this page we will focus on techniques that are critical, not just for working effectively with DOM manipulation, but for React and other JavaScript frameworks.

In this class we will be using [Visual Studio Code](https://code.visualstudio.com/) as our editor. We will discuss its features on an as-needed basis.

Start VSCode, press `cmd + shift + p` and type in the word `shell`. Select `Install code command in PATH`.

![Image of layout](other/images/vscode.png)

---

### Today's VSCode Extensions

Install Live Server in VS Code

Install Prettier and edit the project settings in the `.vscode` directory as per the instructions to enable format on save for JavaScript.

E.g.:

```
"editor.defaultFormatter": "esbenp.prettier-vscode",
"editor.formatOnSave": true,
```

---

## The Command Line

You are going to need to have a minimal set of terminal commands at your disposal.

(Windows users can use the Git Bash terminal that is installed along with Git.)

Start the terminal app:

```sh
$ cd        // change directory
$ cd ~      // go to your home directory
$ cd <PATH> // Mac: copy and paste the folder you want to go to
$ cd Desk   // tab completion
$ cd ..     // go up one level
$ ls        // list files, dir on a PC
$ ls -al    // list file with flags that expand the command
$ pwd       // print working directory
```

## Examine the Starter Page

`cd` into today's working directory - and type:

```sh
code .
```

Open `index.html`, right or control click on it and choose 'Open with Live Server'.

Examine the page in the dev tools. Note the responsive navigation using the toggle device toolbar.

(Here's where the [responsive hamburger menu technique](https://medium.com/@heyoka/responsive-pure-css-off-canvas-hamburger-menu-aebc8d11d793) used in today's sample was found.)

We are currenly viewing a single page application - there is only one HTML file and we scroll up and down to view the content. We could mimic a multi page app using css.

## CSS Enhancements

### Friends Don't Let Friends Browse in Light Mode

Examine the CSS file.

As an enhancement, we will add settings for light and dark modes using [prefers-color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme).

The entire updated CSS file is available in the "other folder" of this repository if you prefer to copy and paste.

Here's what was added:

```css
@media (prefers-color-scheme: dark) {
  * {
    --textcolor: #eee;
    --bgcolor: #555;
    --bgcolor-darker: #333;
    --highlight: #ffc400;
  }
}
@media (prefers-color-scheme: light) {
  * {
    --textcolor: #333;
    --bgcolor: #fff;
    --bgcolor-darker: #ddd;
    --highlight: #ffc400;
  }
}

body {
  color: var(--textcolor);
  background: var(--bgcolor-darker);
}

.site-wrap {
  background: var(--bgcolor);
}

html {
  box-sizing: border-box;
  background: var(--bgcolor-darker);
}
```

And in the responsive nav block.

```css
.main-menu ul {
  list-style: none;
  margin: 0;
  padding-top: 2.5em;
  min-height: 100%;
  width: 200px;
  background-color: var(--bgcolor);
}
```

```css
.main-menu a {
  display: block;
  padding: 0.75rem;
  color: var(--textcolor);
  text-decoration: none;
}
```

```css
.main-menu a {
  text-decoration: none;
  display: inline-block;
  color: var(--textcolor);
}
```

Use the system preferences (Appearance on a Mac) to test.

Experiment by adding the following to make only one section visible at a time:

```css
/* hides all the sections */
section {
  display: none;
}
/* shows only one selection based on the location hash */
section:target {
  display: block;
}
```

Note the [section:target](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors/Using_the_:target_pseudo-class_in_selectors) selector. See a demo [here](https://john-doe.neocities.org/).

### Smooth Scrolling with Page Fragments

If we prefer a scrolling app, comment out the two CSS rules above and add:

```css
html {
  scroll-behavior: smooth;
}
```

Add jump links to the top of the page in each section:

```html
<!-- an id for the top -->
<body id="top">
  ...
  <!-- before the close of each of the sections -->
  <!--  use VS Code's multiple selections feature -->
  <a style="color: var(--highlight)" href="#top">Back to top</a>
  ...
</body>
```

Note: The menu scrolls off the screen and we want to to be available at all times.

We will anchor the menu to the top of the screen once the user has scrolled to the point where the menu would normally be out of sight using the css position property.

Edit the CSS in `nav.css` (inside the media query).

```css
.main-menu {
  display: block;
  position: static;
  background: #007eb6;
  width: 100%;
  position: sticky;
  top: 0px;
}
```

<!-- Note: the [responsive hamburger menu technique](https://medium.com/@heyoka/responsive-pure-css-off-canvas-hamburger-menu-aebc8d11d793) used in today's sample requires that we leave the first link in place. See the article and `nav.css` for more information. -->

## DOM Scripting Review

The HTML DOM (Document Object Model) specification allows JavaScript to access and manipulate the elements of an HTML document.

### .querySelectorAll()

Use `document.querySelectorAll('selector')` to find all matching elements on a page. You can use any valid CSS for the selector.

In the browser's console:

```js
var elems = document.querySelectorAll(".main-menu li");
```

Returns a [NodeList](https://developer.mozilla.org/en-US/docs/Web/API/NodeList).

### .querySelector()

Use `document.querySelector()` (without the 'All') to find the first matching element on a page.

In the browser's console:

```js
var elem = document.querySelector(".main-menu li a");
```

Returns the first HTML element or "Node" matched by the selector

## Looping - for and forEach()

In JavaScript, you can use a `for` to loop through any iterable object - including arrays and node lists.

```js
var elems = document.querySelectorAll(".main-menu a");

for (let i = 0; i < elems.length; i++) {
  console.log(i); // index
  console.log(elems[i]); // accessor > value
}
```

ES6 introduced the [`forEach()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) method for looping over arrays. We use forEach when we want to perform some sort of action on every item in an array.

The forEach method accepts a function as its argument. This is commonly known as a [callback function](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function). The term “callback function” refers to a function that we pass to another function.

The first argument in the callback is the current item in the loop. The second (optional) is the current index in the array.

```js
var elems = document.querySelectorAll(".main-menu a");

elems.forEach(function (item, index) {
  console.log(index); // index
  console.log(item.href); // value
});
```

## EXERCISE I - Generating Content From an Array

We will begin by replacing the existing nav with items from an array using a `for loop`.

Note the two script tags at the bottom of `index.html`:

```html
<script src="js/navitems.js"></script>
<script src="js/index.js"></script>
```

Examine `navitems.js`.

Note the difference between `navItemsObject` and `navItemsArray`. The latter is an array of values while the former offers an array of objects consisting of key/value pairs.

In the browser console:

```js
navItemsArray;
navItemsObject;
```

Compare `navList` and `navItemsArray` and note the `prototypes` in the inspector.

Both have a length property - `navList.length` and `navItemsArray.length` but the methods are different.

**Note that we have 8 items in the `navItemsArray` but only 6 in our `navList`.**

**In `index.js`**

Select the HTML element with the class `.main-menu` In `index.js`:

```js
const nav = document.querySelector(".main-menu");
```

Select all the links in nav we could write:

```js
const navList = document.querySelectorAll("#main-menu li a");
```

But here it is perhaps a bit more efficient to use `element.querySelector` (as opposed to `document.querySelector`):

```js
const nav = document.querySelector(".main-menu");
const navList = nav.querySelectorAll("li a");
```

Replace our placeholder nav items with content from an array

- use a `for` loop and `innerHTML`:

```js
const nav = document.querySelector(".main-menu");
const navList = nav.querySelectorAll("li a");

for (let i = 0; i < navList.length; i++) {
  console.log(i);
  navList[i].innerHTML = navItemsArray[i];
}
```

We can tell that the text being displayed in the UI is coming from the navItemsArray because they are now capitalized.

We are using the six existing `<li>` elements in the DOM but there are 8 items in our `navItemsArray` array.

So we will dynamically generate the nav from items in the array.

Edit the HTML to remove the navigation links:

```html
<nav id="main-menu" class="main-menu" aria-label="Main menu">
  <a
    href="#main-menu-toggle"
    id="main-menu-close"
    class="menu-close"
    aria-label="Close main menu"
  >
    <span class="sr-only">Close main menu</span>
    <span class="fa fa-close" aria-hidden="true"></span>
  </a>
  <!-- HERE -->
</nav>
```

Append a `<ul>` tag to nav using:

1. [document.createElement()](https://vanillajstoolkit.com/reference/dom-injection/#createelement): creates an element, e.g. `var div = document.createElement('div');`.
2. [append](https://vanillajstoolkit.com/reference/dom-injection/#append).

JavaScript offers a number of methods to determine the insertion point.

In the console one at a time:

```js
// Create a new HTML element and add some text
var elem = document.createElement("div");
elem.textContent = "I'm inserted via DOM scripting";
// Get the element to add your new HTML element before, after, or within
var target = document.querySelector(".main-menu");
// Inject the `div` element before the element
target.before(elem);
// Inject the `div` element after the element
target.after(elem);
// Inject the `div` element before the first item *inside* the element
target.prepend(elem);
// Inject the `div` element after the first item *inside* the element
target.append(elem);
```

Let's append a new div to the (now empty) nav.

**Delete eveything in `index.js` and add:**

```js
const nav = document.querySelector(".main-menu");

const navList = document.createElement("ul");
navList.textContent = "Hello world";
nav.append(navList);
```

Note the `<ul>` in the header.

Dynamically create the nav based on the number of items in the array using a for loop:

```js
const nav = document.querySelector(".main-menu");

const navList = document.createElement("ul");

for (let i = 0; i < navItemsArray.length; i++) {
  let listItem = document.createElement("li");
  let linkText = navItemsArray[i];
  listItem.innerHTML = '<a href="#">' + linkText + "</a>";
  navList.append(listItem);
}

nav.append(navList);
```

Note the use of quotes in the construction or concatination of our innerHTML: `listItem.innerHTML = '<a href="#">' + linkText + "</a>"`. We also used the addition operator (+).

Our nav bar now displays all the items in our array but the code is a bit ugly. This is an example of [imperative programming](https://tylermcginnis.com/imperative-vs-declarative-programming/). In order to prepare for React we need to adopt a more **declarative** style.

We will use [Functional Programming](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0) techniques.

<!-- (See the `filter` examples `students.js` in today's `other` folder. Use [RunJS](https://runjs.app/).) -->

First, switch out the old school concatenation for a _template string_:

```js
for (let i = 0; i < navItemsArray.length; i++) {
  let listItem = document.createElement("li");
  listItem.innerHTML = `<a href="#">${navItemsArray[i]}</a>`;
  navList.append(listItem);
}
```

### Template Literals

[Template Strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) use back ticks instead of quotes and have access to JS expressions inside plaeholders - `${ ... }`.

In earlier versions of JavaScript, if we wanted to dynamically create strings, we needed to use the addition operator (+). Modern JavaScript allows us to embed variables and other expressions right inside strings

Compare old school concatenation by running the following in the console:

```js
const name = "Yorik";
const age = 2;
const oldschool = "My dog " + name + " is " + age * 7 + "years old.";
const newschool = `My dog ${name} is ${age * 7} years old.`;
console.log("oldschool::", oldschool);
console.log("newschool::", newschool);
```

In order to use string interpolation, we need to use backticks (`). If you're using a standard QWERTY North American keyboard, the key is found in the top-left corner, above “Tab”. It shares a key with the tilde (~) character.

Strings created with backticks are known as “template strings”. For the most part, they function just like any other string, but they have this one super-power: they can embed dynamic segments.

We create a dynamic segment within our string by writing `${}`. Anything placed between the squiggly brackets will be evaluated as a JavaScript expression.

---

<!-- end aside  -->

Use `forEach()` instead of a for loop:

```js
navItemsArray.forEach(function (item) {
  let listItem = document.createElement("li");
  listItem.innerHTML = `<a href="#">${item}</a>`;
  navList.appendChild(listItem);
});
```

Use an arrow function in the final script:

```js
navItemsArray.forEach((item) => {
  let listItem = document.createElement("li");
  listItem.innerHTML = `<a href="#">${item}</a>`;
  navList.appendChild(listItem);
});
```

### Arrow Functions

[Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) are commonly used as a shorter syntax for anonymous functions although they have additional functionality.

Historically, functions in JavaScript have been written using the function keyword:

```js
function exclaim(string) {
  return string + "!";
}
```

In 2015, the language received an alternative syntax for creating functions: arrow functions. They look like this:

```js
const exclaim = (string) => string + "!";
```

Arrow functions are inspired by so-called lambda functions from other functional programming languages. Their main benefit is that they're much shorter and cleaner. Reducing "clutter" may seem like an insignificant benefit, but it can really help improve readability when working with anonymous functions?. For example, this:

```js
const arr = ["hey", "ho", "let's go"];

function makeString() {
  return arr
    .map(function (string) {
      return string + "!";
    })
    .join(" ");
}

makeString();
```

Becomes this:

```js
const arr = ["hey", "ho", "let's go"];

arr.map((string) => string + "!").join(" ");
// arr.map((string) => `${string} !`).join(" ");
```

Arrow functions might seem straightforward at first glance, but there are a few “gotchas” to be aware of. It's super common for folks to get tripped up by some of these rules.

There are two types of arrow functions: short and long form.

Short form:

```js
const add1 = (n) => n + 1;
```

Long form:

```js
const add1 = (n) => {
  return n + 1;
};
```

The short-form function's body must be a single expression while the long-form function's body can contain one or more statements.

When we add the curly braces and convert to the long-form, our function can now execute multiple instructions. For example, we can use the long-form if we want to perform a check before the main bit of logic:

```js
const add1 = (n) => {
  if (typeof n !== "number") {
    throw new Error("Argument provided must be a number");
  }

  return n + 1;
};
```

Note the parentheses in `(n) =>`. The parentheses are optional:

<!-- prettier-ignore -->
```js
// This is valid:
const logUser = user => {
  console.log(user);
}

// This is also valid:
const logUser = (user) => {
  console.log(user);
}
```

Parentheses are mandatory if we have more than 1 parameter:

```js
const updateUser = (user, properties, isAdmin) => {
  if (!isAdmin) {
    throw new Error("Not authorized");
  }

  user.setProperties(properties);
};

updateUser("Daniel", { id: 90 }, false);
```

The parentheses are also mandatory if we have no parameters:

```js
const sayHello = () => console.log("Hello!");
```

---

### Aside: React

Since we will be spending much of our time this semester in React, it is worthwhile to point out at this time that React - at its most basic - is an alternate way to create reusable DOM elements.

Open `other > React > 0-no-react.html` in a browser using [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) and complete the function.

The third file, `2-react-jsx.html`, uses [Babel](https://babeljs.io) to compile JSX - an html-like feature.

---

<!-- end aside  -->

## EXERCISE II - Content Generation with an Array of Objects

So far we have been working with a simple array. However most of the data you will encounter will consist of an array of objects Examples:

- [JSON Placeholder](https://jsonplaceholder.typicode.com/posts), [documentation](https://jsonplaceholder.typicode.com/)
- [City Growth](https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json), [documentation](https://gist.github.com/Miserlou/c5cd8364bf9b2420bb29)
- [Pokemon API](https://pokeapi.co/api/v2/ability/?limit=5&offset=0), [documentation](https://pokeapi.co)
- and our navItemsObject:

```js
const navItemsObject = [
  {
    label: "LOGO",
    link: "#",
  },
  {
    label: "Watchlist",
    link: "#watchlist",
  },
  {
    label: "Research",
    link: "#research",
  },
  {
    label: "Markets",
    link: "#markets",
  },
  {
    label: "Workbook",
    link: "#workbook",
  },
  {
    label: "Connect",
    link: "#connect",
  },
  {
    label: "Desktop",
    link: "#desktop",
  },
  {
    label: "FAQ",
    link: "#faq",
  },
];
```

Add the links using `navItemsObject` instead of `navItemsArray`.

Note the the 'dot' accessor notation for accessing a value from an object (and the addition of the anchor tags):

```js
navItemsObject.forEach(function (item) {
  let listItem = document.createElement("li");
  listItem.innerHTML = `<a href="${item.link}">${item.label}</a>`;
  navList.appendChild(listItem);
});
```

Navigate and inspect the code and note that we now have anchor tags with page fragment links in our html and are able to navigate within our page.

Note: if we wanted we could derive the hash (href) from the Array values:

```js
for (let i = 0; i < navItemsArray.length; i++) {
  let listItem = document.createElement("li");
  listItem.innerHTML = `<a href="#${navItemsArray[i].toLowerCase()}">${
    navItemsArray[i]
  }</a>`;
  navList.append(listItem);
}
```

(In real life this would rarely be the case.)

### Aside: Objects

Open `other > javascript > Objects > objects.html` in a browser tab.

```js
const me = {
  first: "Daniel",
  last: "Deverell",
  job: "web designer",
  links: {
    social: {
      twitter: "@dannyboynyc",
      facebook: "https://linkedin.com/danieldeverell",
    },
    web: {
      blog: "http://deverell.dev",
    },
  },
};

const first = me.first;
const last = me.last;

console.log(first);
```

Examine the sample object in the browser console:

```sh
last
me
me.links
var twitter = me.links.social.twitter
```

Add to script block:

```js
const { twitter, facebook } = me.links.social;
```

```js
const { twitter: twit } = me.links.social;
```

This is an example of [object destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) - a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables. We will be using it extensively in this class.

Create a multi-line template string and display it on the page:

```js
const content = `
<div>
  <h2>
    ${me.first} ${me.last}
  </h2>
    <span>${me.job}</span>
    <p>Twitter: ${twitter}</p>
    <p>Facebook: ${facebook}</p>
</div>
`;

document.body.innerHTML = content;
```

<!-- and an Array:

```js
const test = ["one", "two", "three", "four"];
const [foo, bar, ...rest] = test;
``` -->

---

<!-- end aside  -->

### Array Methods

JavaScript gives us several tools for iterating over the items in an array. We could have used a for loop, and it's arguably much simpler. There are no complicated callback functions! So why should we learn about `.forEach`?

Here's the biggest advantage: forEach is part of a family of array iteration methods. Taken as a whole, this family allows us to do all sorts of amazing things, like finding a particular item in the array, filtering a list, and much more.

All of the methods in this family follow the same basic structure. For example, they all support the optional index parameter we just looked at!

Let's look at another member of this family: the filter method.

#### Array.prototype.filter()

Note the inventors sample data in `navitems.js`:

```js
const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
];
```

Filter the list of inventors for those who were born in the 1500's.

In the console:

```js
const fifteen = inventors.filter(filterInventors);

function filterInventors(inventor) {
  if (inventor.year >= 1500 && inventor.year <= 1599) {
    return true; // keep it
  }
}

console.table(fifteen);
```

Refactor using an and `&&` operator together with an arrow function with implicit return:

```js
const fifteen = inventors.filter(
  (inventor) => inventor.year >= 1500 && inventor.year < 1600
);
console.table(fifteen);
```

Note the lack of a `return` statement. While they can be used within arrow functions, they are often unnecessary as the `return` is implicit.

Another filter example:

```js
const students = [
  { name: "Aisha", grade: 89 },
  { name: "Bruno", grade: 55 },
  { name: "Carlos", grade: 68 },
  { name: "Dacian", grade: 71 },
  { name: "Esther", grade: 40 },
];

const studentsWhoPassed = students.filter((student) => {
  return student.grade >= 60;
});

console.log(studentsWhoPassed);
/*
  [
    { name: 'Aisha', grade: 89 },
    { name: 'Carlos', grade: 68 },
    { name: 'Dacian', grade: 71 },
  ]
*/
```

In many ways, filter is very similar to forEach. It takes a callback function, and that callback function will be called once per item in the array.

Unlike forEach, however, filter produces a value. Specifically, it produces a new array which contains a subset of items from the original array.

Typically, our callback function should return a boolean value, either true or false. The filter method calls this function once for every item in the array. If the callback returns true, this item is included in the new array. Otherwise, it's excluded.

Note: The filter method doesn't modify or _mutate_ the original array. This is not true for all of the array methods and it is an important distinction.

```js
const nums = [5, 12, 15, 31, 40];

const evenNums = nums.filter((num) => {
  return num % 2 === 0;
});

console.log(nums); // Hasn't changed: [5, 12, 15, 31, 40]
console.log(evenNums); // [12, 40]
nums.pop();
console.log(nums); // Changed: [5, 12, 15, 31]
```

#### Array.prototype.map()

`map` is quite a lot like forEach. We give it a callback function, and it iterates over the array, calling the function once for each item in the array.

Here's the big difference, though: map produces a brand new array, full of transformed values.

The forEach function will always return undefined:

```js
onst nums = [1, 2, 3];

const result = nums.forEach(num => num + 1);

console.log(result); // undefined
```

In contrast, map will "collect" all the values we return from our callback, and put them into a new array:

```js
const nums = [1, 2, 3];

const result = nums.map((num) => num + 1);

console.log(result); // [2, 3, 4]
```

Provide an array of the inventors first and last names:

```js
var fullNames = inventors.map(function (inventor) {
  return `${inventor.first} ${inventor.last}`;
});

console.log("Full names: " + fullNames);
```

Notice the commas separating the names.

Refactor it to use an arrow function and join the results with a slash:

```js
const fullNames = inventors
  .map((inventor) => `${inventor.first} ${inventor.last}`)
  .join(" / ");

console.log("Full names: ", fullNames);
```

Array.map is frequently used to generate html:

```js
.map((inventor) => `<li>${inventor.first}, ${inventor.last}</li>`)
```

#### Array.prototype.sort()

Sort the inventors by birthdate, oldest to youngest:

```js
const ordered = inventors.sort(function (a, b) {
  if (a.year > b.year) {
    return 1;
  } else {
    return -1;
  }
});
```

#### Array.prototype.reduce()

How many years did all the inventors live?

```js
const totalYears = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0);
```

## EXERCISE III - Using Array.prototype.map()

Let's try creating the list items using `map()` and template strings:

```js
const nav = document.querySelector(".main-menu");

const markup = `
    <ul>
      ${navItemsObject.map(function (item) {
        return `<li><a href="${item.link}">${item.label}</a></li>`;
      })}
    </ul>
    `;

console.log(markup);

nav.innerHTML = markup;
```

Join the array to avoid the comma:

```js
const markup = `
    <ul>
      ${navItemsObject
        .map(function (item) {
          return `<li><a href="${item.link}">${item.label}</a></li>`;
        })
        .join("")}
    </ul>
    `;
```

Finally, refactor using an arrow function:

```js
const markup = `
<ul>
  ${navItemsObject
    .map((item) => `<li><a href="${item.link}">${item.label}</a></li>`)
    .join("")}
</ul>
`;
```

Note

- the use of nested template strings here
- `nav.append(navList)` is now `nav.innerHTML = markup` since we no longer use `document.createElement()`.

These methods, `.map`, `.filter` and the others are _the prefered_ means of working with data - especially in React. They are **declarative** as opposed to **imperative** and are important methods in the functional programmer's toolkit.

Note: examine the responsive navigation on small screens using the device toolbar. The close button has been lost due to the use of `nav.innerHTML = markup`. We essentially blew out all the html and replaced it with our own.

There are a number of ways to resolve this.

One method might be to just cut the code from `index.html` and paste it into our JavaScript:

```js
const markup = `
<ul>
  <a
  href="#main-menu-toggle"
  id="main-menu-close"
  class="menu-close"
  aria-label="Close main menu"
  >
  <span class="sr-only">Close main menu</span>
  <span class="fa fa-close" aria-hidden="true"></span>
  </a>
  ${navItemsObject
    .map((item) => `<li><a href="${item.link}">${item.label}</a></li>`)
    .join("")}
</ul>
`;
```

Another might be to leave the code in the HTML and add an element to the DOM to receive our generated HTML:

```html
<nav id="main-menu" class="main-menu" aria-label="Main menu">
  <a
    href="#main-menu-toggle"
    id="main-menu-close"
    class="menu-close"
    aria-label="Close main menu"
  >
    <span class="sr-only">Close main menu</span>
    <span class="fa fa-close" aria-hidden="true"></span>
  </a>
  <!-- HERE before the close of </nav> -->
  <span id="main-nav"></span>
</nav>
```

And add the markup to it:

```js
nav.querySelector("#main-nav").innerHTML = markup;
```

Add the join:

```js
const nav = document.querySelector(".main-menu");

const markup = `
  <ul>
    ${navItemsObject
      .map(function (item) {
        return `<li><a href="${item.link}">${item.label}</a></li>`;
      })
      .join("")}
  </ul>
  `;

nav.querySelector("#main-nav").innerHTML = markup;
```

## EXERCISE - Adding an SVG Image

Use the optional index in our map function to create a class name for the li's:

```js
${navItemsObject
  .map(
    (item, index) =>
      `<li class="navitem-${index}"><a href="${item.link}">${item.label}</a></li>`
  )
  .join("")}
```

Select the first list item on the nav, add a class and set the innerHTML so that we get a link which will return us to the top of the page:

```js
const logo = document.querySelector(".navitem-0");
logo.classList.add("logo");
logo.innerHTML = '<a href="#"><img src="img/logo.svg" /></a>';
```

Examine the SVG file in VS Code. Note the `fill` property for svg. Change it to white.

<!-- An interesting application of SVG:
- [Responsive logos](http://responsivelogos.co.uk) -->

Format the logo for both mobile and wide screen:

```css
li.logo img {
  padding-top: 0.25rem;
  width: 2.25rem;
}
```

<!-- Note the use of max-width above. We are using this because transitions do not animate width. -->

## EXERCISE - AJAX and APIs

_AJAX stands for Asynchronous JavaScript And XML. In a nutshell, it is the use of the XMLHttpRequest object to communicate with servers. It can send and receive information in various formats, including JSON, XML, HTML, and text files. AJAX’s most appealing characteristic is its “asynchronous” nature, which means it can communicate with the server, exchange data, and update the page without having to refresh the page._ - [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX/Getting_Started)

An API (Application Programming Interface) is a set of definitions, communication protocols, and tools for building software. In general terms, it is a set of clearly defined methods of communication among various components. A good API makes it easier to develop a computer program by providing all the building blocks, which are then put together by the programmer.

## EXERCISE - Adding Content

We will use the [NY Times developer](https://developer.nytimes.com) API for getting a data using my API key.

- [New York Times API](https://api.nytimes.com/svc/topstories/v2/nyregion.json?api-key=uQG4jhIEHKHKm0qMKGcTHqUgAolr1GM0), [documentation](https://developer.nytimes.com/)

Note there is a [hard limit](https://developer.nytimes.com/faq#a11) of 10,000 requests per day or 10 requests per minute. We will try to work around this by storing the data locally in the browser using Local Storage. Instead of requesting the data from the NY Times we will request it from our own browsers.

The specific API endpoint for this is their [top stories endpoint](https://developer.nytimes.com/docs/top-stories-product/1/overview). It lets us request the top stories from a specific section of their publication.

Start by removing the existing HTML content from the site-wrap div in `index.html` so you are left with an empty div:

```html
<div class="site-wrap"></div>
```

Store the API key, a template string with the complete URL, and the element we want to manipulate (`.site-wrap`) in a variable:

```js
const root = document.querySelector(".site-wrap");
const nytapi = "uQG4jhIEHKHKm0qMKGcTHqUgAolr1GM0"; // note this is my API key
const nytUrl = `https://api.nytimes.com/svc/topstories/v2/travel.json?api-key=${nytapi}`;
```

### The fetch() API

Web browsers offer a large number of [built-in web APIs](https://developer.mozilla.org/en-US/docs/Web/API).

We'll use the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) to get data from the New York Times.

`fetch()` doesn't return the data immediately, rather it returns a [promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises) that the data will eventually become available.

```js
fetch(nytUrl).then(function (response) {
  console.log("Response ::: ", response);
});
```

The response needs to be converted to JSON with `response.json()`.

We can then use the data in our app:

```js
fetch(nytUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (myJson) {
    console.log(myJson);
  });
```

Most developers will use arrow functions:

```js
fetch(nytUrl)
  .then((response) => response.json())
  .then((myJson) => console.log(myJson));
```

Try `console.log(myJson.results)`

Instead of logging it we will pass it to a `renderStories` function:

```js
fetch(nytUrl)
  .then((response) => response.json())
  // storing the data in localstorage to avoid hitting the API limit
  .then((myJson) => localStorage.setItem("stories", JSON.stringify(myJson)))
  .then(renderStories);
```

Examine the data and you'll see that the information we are interested in is located in `results`.

We will use a forEach loop to log each of the results:
In `renderStories` we take the data from local storage, convert it to json and run a `forEach` on every item that logs it to the console:

```js
function renderStories() {
  let data = JSON.parse(localStorage.getItem("stories"));
  data.results.forEach(function (story) {
    console.log(story);
  });
}
```

Let's use the techniques we covered earlier to create a DOM element for each of the stories:

```js
function renderStories() {
  let data = JSON.parse(localStorage.getItem("stories"));
  data.results.forEach(function (story) {
    var storyEl = document.createElement("div");
    storyEl.className = "entry";
    storyEl.innerHTML = `
      <h3>${story.title}</h3>
      `;
    console.log(storyEl);
    root.prepend(storyEl);
  });
}
```

Expand it to include images and abstracts:

```js
function renderStories() {
  let data = JSON.parse(localStorage.getItem("stories"));
  data.results.forEach((story) => {
    var storyEl = document.createElement("div");
    storyEl.className = "entry";
    storyEl.innerHTML = `
    <img src="${story.multimedia[0].url}" alt="${story.title}" />
      <div>
        <h3><a target="_blank" href="${story.short_url}">${story.title}</a></h3>
        <p>${story.abstract}</p>
      </div>
      `;
    root.prepend(storyEl);
  });
}
```

Note: not all NYTimes stories include images and our script could error if `story.multimedia[0]` was undefined. For this we will use a [Conditional (ternary) operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) for the image element:

```js
<img src="${story.multimedia ? story.multimedia[0].url : ""}" alt="${story.title}" />
```

Ternaries are popular in cases like this - in fact they are essential. You cannot write an `if(){} else(){}` statement inside a string literal. Template literals only support expressions.

Add some new css to support the new elements:

```css
.entry {
  display: grid;
  grid-template-columns: 2fr 6fr;
  grid-column-gap: 1rem;
  margin-bottom: 1rem;
}

.entry a {
  text-decoration: none;
  color: var(--textcolor);
  font-family: "Lobster", cursive;
  font-size: 1.5rem;
}
```

Note: examine the json and try incrementing the `[0]` in the ternary to get a better image.

Refactor using arrow functions and `.map()`:

```js
fetch(nytUrl)
  .then((response) => response.json())
  .then((myJson) => localStorage.setItem("stories", JSON.stringify(myJson)))
  .then(renderStories);

function renderStories() {
  let data = JSON.parse(localStorage.getItem("stories"));
  data.results.map((story) => {
    var storyEl = document.createElement("div");
    storyEl.className = "entry";
    storyEl.innerHTML = `
    <img src="${story.multimedia ? story.multimedia[0].url : ""}" alt="${
      story.title
    }" />

      <div>
        <h3><a target="_blank" href="${story.short_url}">${story.title}</a></h3>
        <p>${story.abstract}</p>
      </div>
      `;
    root.prepend(storyEl);
  });
}
```

## EXERCISE - News Section Headers

Our goal here is to make the nav bar clicks load new content from the New York Times API, store the data in local storage and render it to the page.

In `navItems.js`, replace `navItemsObject` with

```js
const navItemsObject = [
  {
    label: "Arts",
    link: "#arts",
  },
  {
    label: "Books",
    link: "#books",
  },
  {
    label: "Fashion",
    link: "#fashion",
  },
  {
    label: "Food",
    link: "#food",
  },
  {
    label: "Movies",
    link: "#movies",
  },
  {
    label: "Travel",
    link: "#travel",
  },
];
```

Examine the rendered page. Note: Arts , the first item in our new nav, does not appear in the nav because we are using the first li for our logo. We've blown it out with an `innerHTML` call.

Edit the logo related scripts:

```js
// const logo = document.querySelector(".navitem-0");
// logo.classList.add("logo");
// logo.innerHTML = '<a href="#"><img src="img/logo.svg" /></a>';

const logo = document.createElement("li");
const navList = nav.querySelector("nav ul");
logo.classList.add("logo");
logo.innerHTML = '<a href="#"><img src="img/logo.svg" /></a>';
navList.prepend(logo);
```

Add categories and navItems variables to `index.js`:

```js
const categories = navItemsObject.map((item) => item.link);
console.log(categories);
```

```js
const navItems = document.querySelectorAll("li[class^='navitem-']");
console.log(navItems);
```

Add event listeners to each of the nav items:

```js
navItems.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    console.log("categories[index]:::", categories[index]);
    fetchArticles(categories[index]);
  });
});
```

This function calls a new function `fetchArticles` when we click on one of the navigation items.

Refactor our `fetch` call to a `fetchArticles` function that generates a url based on the section:

```js
function fetchArticles(section) {
  section = section.substring(1);
  if (!localStorage.getItem(section)) {
    console.log("section not in local storage, fetching");
    fetch(
      `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${nytapi}`
    )
      .then((response) => response.json())
      .then((myJson) => localStorage.setItem(section, JSON.stringify(myJson)))
      .then(renderStories(section))
      .catch((error) => {
        console.warn(error);
      });
  } else {
    console.log("section in local storage");
    renderStories(section);
  }
}
```

Refactor our `renderStories` function to generate html based on the section:

```js
async function renderStories(section) {
  let data = await JSON.parse(localStorage.getItem(section));
  if (data) {
    data.results.map((story) => {
      var storyEl = document.createElement("div");
      storyEl.className = "entry";
      storyEl.innerHTML = `
      <img src="${story.multimedia ? story.multimedia[0].url : ""}" alt="${
        story.title
      }" />

      <div>
        <h3><a target="_blank" href="${story.short_url}">${story.title}</a></h3>
        <p>${story.abstract}</p>
      </div>
      `;
      root.prepend(storyEl);
    });
  } else {
    console.log("data not ready yet");
  }
}
```

Set up the arts section to be displayed by default:

```js
fetchArticles("arts");
```

Set an active class name:

```js
function setActiveTab(section) {
  const activeTab = document.querySelector("a.active");
  if (activeTab) {
    activeTab.classList.remove("active");
  }
  const tab = document.querySelector(`li a[href="${section}"]`);
  tab.classList.add("active");
}
```

Call the function

```js
async function renderStories(section) {
  setActiveTab(`#${section}`);
  // ...
}
```

## Instructor Notes - students may ignore eveything after this point

### Immediately Invoked Function Expression

Move everything [out of](https://vanillajstoolkit.com/boilerplates/iife/) the global scope

```js
(function () {
  "use strict";

  // Code goes here...
})();
```

'use strict': with strict mode you cannot use undeclared variables.

e.g.:

```js
const stories = data.results.slice(0, limit);

stories.forEach(story => {
const storyEl = document.createElement('div');
storyEl.className = 'entry';
storyEl.innerHTML = `
```

### Local Storage

Implement [local storage](https://gomakethings.com/saving-html-to-localstorage-with-vanilla-js/)

```js
function renderStories(data) {
  ...
 localStorage.setItem('articles', root.innerHTML);
 ...
}
```

Style the new category headers:

```css
.section-head {
  font-family: Lobster;
  font-weight: normal;
  color: #007eb6;
  font-size: 2.5rem;
  text-transform: capitalize;
  padding-bottom: 0.25rem;
  padding-top: 4rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid #007eb6;
}
```
