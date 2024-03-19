# Introduction

- [Introduction](#introduction)
  - [Code of Conduct](#code-of-conduct)
  - [Resources](#resources)
    - [Github](#github)
    - [Reading](#reading)
  - [Homework](#homework)
  - [Homework - week one and two](#homework---week-one-and-two)
  - [Summary of Tools and Technology](#summary-of-tools-and-technology)
  - [Today's Exercise](#todays-exercise)
    - [Today's VSCode Extensions](#todays-vscode-extensions)
  - [The Command Line](#the-command-line)
  - [Examine the Starter Page](#examine-the-starter-page)
  - [CSS Enhancements](#css-enhancements)
    - [Friends Don't Let Friends Browse in Light Mode](#friends-dont-let-friends-browse-in-light-mode)
  - [Aside: CSS targeting with Page Fragments](#aside-css-targeting-with-page-fragments)
    - [Smooth Scrolling with Page Fragments](#smooth-scrolling-with-page-fragments)
  - [DOM Scripting Review](#dom-scripting-review)
    - [.querySelectorAll()](#queryselectorall)
    - [.querySelector()](#queryselector)
  - [Looping - for and forEach()](#looping---for-and-foreach)
  - [EXERCISE I - Generating Content From an Array](#exercise-i---generating-content-from-an-array)
    - [Template Literals](#template-literals)
    - [Arrow Functions](#arrow-functions)
  - [EXERCISE II Content Generation with an Array of Objects](#exercise-ii-content-generation-with-an-array-of-objects)
  - [Array Methods](#array-methods)
    - [Array.prototype.filter()](#arrayprototypefilter)
    - [Array.prototype.map()](#arrayprototypemap)
    - [Array.prototype.sort()](#arrayprototypesort)
    - [Array.prototype.reduce()](#arrayprototypereduce)
  - [EXERCISE III - Using Array.prototype.map()](#exercise-iii---using-arrayprototypemap)
  - [Responsive Navigation Bug](#responsive-navigation-bug)
    - [Modular Code](#modular-code)
  - [APIs: Local Storage and Fetch](#apis-local-storage-and-fetch)
  - [Adding Content](#adding-content)
    - [The fetch() API](#the-fetch-api)
  - [News Navigation](#news-navigation)
    - [Immediately Invoked Function Expression](#immediately-invoked-function-expression)

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
- [Syllabus](https://docs.google.com/document/d/e/2PACX-1vSvH_TktouJo7Skfyoe2QWGmncYT-H0GhwjL9svjMLFz5OOwFkpY8zz809w-7qZDw/pub)
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

## Homework - week one and two

- Install [Git](https://git-scm.com)
- Install [NodeJS](https://nodejs.org)
- Create a Github account
- Create a Netlify account

If necessary you should read MDN on [Basic DOM Manipulation](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents#active_learning_basic_dom_manipulation) and do the [exercise](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents#active_learning_basic_dom_manipulation).

Read [Fetching Data from the Server](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data) and do the [exercise](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data#the_fetch_api.).

Mozilla Develpers Network offers a series of [JavaScript tutorials](https://developer.mozilla.org/en-US/docs/Web/javascript#for_complete_beginners).

For our current purposes, special attention should be paid to the following JavaScript tutorials on MDN:

- [JavaScript Objects](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects)
- [Client Side Storage](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage)
- [Asynchronous JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous) 

---

## Summary of Tools and Technology

A listing of applications and technologies you will be introduced to in the class include:

- Intermediate/advanced HTML, CSS and JavaScript
- React, NODE, MongoDB, ExpressJS
- Visual Studio Code and the Terminal
- Git and Github
- Styled Components (CSS in JS)

## Today's Exercise

In today's class we will implement [this single page web site](https://boisterous-begonia-022b07.netlify.app/) with content almost entirely generated using JavaScript (try selecting `view > developer > View Source` in Chrome).

In creating this page we will focus on techniques that are critical, not just for working effectively with DOM manipulation, but for working with React and other JavaScript frameworks.

In this class we will be using [Visual Studio Code](https://code.visualstudio.com/) as our editor. We will discuss its features on an as-needed basis.

Start VSCode, press `cmd + shift + p` and type in the word `shell`. Select `Install code command in PATH`.

![Image of layout](other/images/vscode.png)

---

### Today's VSCode Extensions

- Live Server in VS Code
- Prettier and edit the project settings in the `.vscode` directory as per the instructions to enable format on save for JavaScript

e.g.:

```
"editor.formatOnSave": true,
"editor.defaultFormatter": "esbenp.prettier-vscode",
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

Note the responsive navigation on small screen and the response to changing the OS between light and dark mode.

Examine the CSS file. Note the use of [viewport sized typography](https://css-tricks.com/viewport-sized-typography/) for the `h1`.

We are using a common [responsive hamburger menu technique](https://medium.com/@heyoka/responsive-pure-css-off-canvas-hamburger-menu-aebc8d11d793).

We are currenly viewing a single page application - there is only one HTML file and we scroll up and down to view the content.

Aside: "All the News That Fits We Print!" is an old joke. "All the News That's Fit to Print," is the actual slogan of The New York Times. 

## CSS Enhancements

### Friends Don't Let Friends Browse in Light Mode

As an enhancement, we will add settings for light and dark modes using [prefers-color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme).

The entire updated CSS file is available in the "other folder" of this repository as `NEW-styles.css`. Copy and paste the contents into `styles.css` and view the changes via the Source Control diff.

We begin by declaring CSS variables for color in a [prefers-color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme) media query. 

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
```

We then use these variables throughout the CSS file e.g.:

```css

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

Use the system preferences (Appearance on a Mac) to test.

## Aside: CSS targeting with Page Fragments

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

---

### Smooth Scrolling with Page Fragments

We will use a single page scrolling app. Comment out the two CSS rules above and add:

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
  <!--  USE VS Code's multiple selections feature - Command-d on a Mac -->
  <a href="#top">Back to top</a>
  ...
</body>
```

In order to select and style the new links we could add a class, but in this case it is easier to use an attribute selector:

```css
a[href="#top"] {
  display: block;
  padding-bottom: 2rem;
  color: var(--highlight);
}
```

Note: The navigation scrolls off the screen and we want to to be available at all times.

We will anchor the menu to the top of the screen once the user has scrolled to the point where the menu would normally be out of sight using the css position property.

Edit the CSS in `nav.css` (inside the media query).

```css
.main-menu {
  ...
  position: sticky; 
  top: 0px;
}
```

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
var elem = document.querySelector(".main-menu li");
```

Returns the first HTML element or "Node" matched by the selector

## Looping - for and forEach()

We can use a `for` to loop through any iterable object - including arrays and node lists.

```js
var elems = document.querySelectorAll(".main-menu a");

for (let i = 0; i < elems.length; i++) {
  console.log('index: ', i); 
  console.log(`elems[${i}].href: `, elems[i].href); 
}
```

ES6 introduced the [`forEach()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) method for looping over arrays. We use forEach when we want to perform some sort of action on every item in an array.

The forEach method accepts a function as its argument. This is commonly known as a [callback function](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function). The term “callback function” refers to a function that we pass to another function.

The first argument in the callback is the current item in the loop. The second (optional) is the current index in the array.

```js
var elems = document.querySelectorAll(".main-menu a");

elems.forEach(function (item, index) {
  console.log('index: ', index);  
  console.log('item.href: ', item.href);  
});
```

## EXERCISE I - Generating Content From an Array

We will begin by replacing the existing nav with items from an array using a `for loop`.

Note the two script tags at the bottom of `index.html`:

```html
<script src="js/modules/navitems.js"></script>
<script src="js/index.js"></script>
```

Examine `navitems.js`.

Note the difference between `navItemsObject` and `navItemsArray`. The latter is an array of values while the former offers an array of objects consisting of key/value pairs.

In the browser console:

```js
navItemsArray;
navItemsObject;
```

Compare `elems` ( `var elems = document.querySelectorAll(".main-menu a")`) and `navItemsArray` and note the `prototypes` in the inspector. The first is a NodeList and the latter an Array.

Both have a length property - `elems.length` and `navItemsArray.length` but the methods / functionality are different.

In `index.js`, select the HTML element with the class `.main-menu` In `index.js`:

```js
const nav = document.querySelector(".main-menu");
```

To select all the links in nav we could write:

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

_We know that the text being displayed in the UI is coming from the navItemsArray because they are now capitalized._

So we will dynamically generate the nav from items in the array.

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

Delete eveything in `index.js` and add:

```js
const nav = document.querySelector(".main-menu");

const navList = document.createElement("ul");
navList.textContent = "Hello world";
nav.append(navList);
```

Note the new `<ul>` in the header.

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

Our nav bar now displays all the items in our array but the code is a bit ugly. This is an example of [imperative programming](https://tylermcginnis.com/imperative-vs-declarative-programming/). In order to prepare for React we will adopt a more **declarative** style.

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

### Template Literals

Template Literals, aka [Template Strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) use back ticks instead of quotes and use plaeholders - `${ ... }` instead of `+` signs for JS expressions.

Compare old school concatenation by running the following in the console:

```js
const name = "Yorik";
const age = 2;
const oldschool = "My dog " + name + " is " + age * 7 + "years old.";
const newschool = `My dog ${name} is ${age * 7} years old.`;
console.log("oldschool::", oldschool);
console.log("newschool::", newschool);
```

In order to use string interpolation, we use backticks (`). The key is found in the top-left corner, above “Tab”. It shares a key with the tilde (~) character.

We create a dynamic segment within our string by writing `${}`. Anything placed between the squiggly brackets will be evaluated as a JavaScript expression.

---

### Arrow Functions

[Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) are commonly used as a shorter syntax for anonymous functions.

Historically, functions in JavaScript have been written using the function keyword:

```js
function exclaim(string) {
  return string + "!";
}
```

The equivalent arrow function looks like this:

```js
const exclaim = (string) => string + "!";
```

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

The parentheses are optional:

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

## EXERCISE II Content Generation with an Array of Objects

So far we have been working with a simple array. However most of the data you will encounter will consist of an array of objects Examples:

- [JSON Placeholder](https://jsonplaceholder.typicode.com/posts), [documentation](https://jsonplaceholder.typicode.com/)
- [City Growth](https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json), [documentation](https://gist.github.com/Miserlou/c5cd8364bf9b2420bb29)
- [Pokemon API](https://pokeapi.co/api/v2/ability/?limit=5&offset=0), [documentation](https://pokeapi.co)
- and our navItemsObject:

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

Add the links using `navItemsObject` instead of `navItemsArray`.

Note the the 'dot' accessor notation (`item.link`) for accessing a value from an object (and the addition of the anchor tags):

```js
navItemsObject.forEach(function (item) {
  let listItem = document.createElement("li");
  listItem.innerHTML = `<a href="${item.link}">${item.label}</a>`;
  navList.appendChild(listItem);
});
```

Navigate and inspect the code and note that we now have anchor tags with page fragment links in our html and are able to navigate within our page.

## Array Methods

JavaScript gives us several tools for iterating over the items in an array. We could have used a for loop, and it's arguably much simpler. So why should we learn about `.forEach`?

`forEach` is part of a family of array looping or "iteration" methods. Taken as a whole, this family allows us to do all sorts of things, like finding a particular item in the array, filtering an Array, and much more.

All of the methods in this family follow the same basic structure. For example, they all support the optional index parameter.

Let's look at another member of this family: the filter method.

### Array.prototype.filter()

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
const fifteen = inventors.filter(
  function(inventor) {
    return inventor.year >= 1500 && inventor.year < 1600
  } 
);
console.table(fifteen);
```

Note the use of the [`&&` operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND).

We typically see this with an arrow function (with implicit return):

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
```

In many ways, filter is very similar to forEach. It takes a callback function, and that callback function will be called once per item in the array.

Unlike forEach, however, filter produces a value. Specifically, it produces or "returns" a new array which contains a subset of items from the original array.

The callback function inside filter should return a boolean value, either true or false. The filter method calls this function once for every item in the array. If the callback returns true, this item is included in the new array. Otherwise, it's excluded.

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

### Array.prototype.map()

`map` is similar to forEach. We provide a callback function, and it iterates over the array, calling the function once for each item in the array.

Here's the big difference, though: map produces a brand new array, full of transformed values.

The forEach function will always return undefined:

```js
const nums = [1, 2, 3];

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

### Array.prototype.sort()

Sort the inventors by birthdate, oldest to youngest:

```js
const ordered = inventors.sort(function (a, b) {
  if (a.year > b.year) {
    return 1;
  } else {
    return -1;
  }
});
console.table(ordered);
```

### Array.prototype.reduce()

How many years did all the inventors live?

```js
const totalYears = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0);
```

These  **declarative** as opposed to **imperative** methods, `.map`, `.filter`, `reduce`, `sort` and others are _the prefered_ means of working with data - and are especially important for the effective use of React. 

## EXERCISE III - Using Array.prototype.map()

Let's create the list items using `Array.map()` and template strings:

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

Note the use of nested template strings here. We are using a template string to create the markup for the list items, and then we are using another template string to create the markup for the entire list.

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
    .map( item => `<li><a href="${item.link}">${item.label}</a></li>`)
    .join("")}
</ul>
`;
```


- `nav.append(navList)` is now `nav.innerHTML = markup` since we no longer use `document.createElement()`.

## Responsive Navigation Bug

Examine the responsive navigation on small screens using the device toolbar. The close button has been lost due to the use of `nav.innerHTML = markup`. We essentially blew out all the html and replaced it with our own - the anchor tag is missing.

There are a number of ways to resolve this.

One might be to just cut the anchor tag from `index.html` and paste it into our JavaScript:

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

We will leave the code in the HTML and add an element to the DOM to receive our generated navigational HTML:

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
  <!-- ADD HERE before the close of </nav> -->
  <span id="main-nav"></span>
</nav>
```

And add the markup to it:

```js
nav.querySelector("#main-nav").innerHTML = markup;
```

### Modular Code 

Add `type="module"` to the script tag in `index.html`:

```js
<script type="module" src="js/index.js"></script>
```

Create `src/js/modules/nav.js` and move the code from `index.js` to it in an exported function:

```js
export function makeNav() {
  const nav = document.querySelector(".main-menu");
  const markup = `
<ul>
${navItemsObject
  .map(
    (item, index) =>
      `<li class="navitem-${index}"><a href="${item.link}">${item.label}</a></li>`
  )
  .join("")}
</ul>
`;
  nav.querySelector("#main-nav").innerHTML = markup;
}
```

Import the function in `index.js` and call it:

```js
import { makeNav } from "./modules/nav.js";

makeNav();
```

We should export and import the `navItemsObject` as well. 

Remove `<script src="js/modules/navitems.js"></script>` from index.html

In navitems.js at the bottom: `export default navItemsObject;`

In `modules/nav.js` at the top:

```js
import navItemsObject from "./navitems.js";
```

We are using the `import` and `export` statements. These are part of the [ES6 module system](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules). Note the difference between `export default` and `export`.

## APIs: Local Storage and Fetch

An API - Application Programming Interface - is a set of definitions, communication protocols, and tools for building web sites. In general terms, it is a set of clearly defined methods of communication among various components. A good API makes it easier to develop by providing building blocks for us to use.

We covered the browser APIs [fetch]() and [local storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) in the previous session. We will review them now.

## Adding Content

We will use the [NY Times developer](https://developer.nytimes.com) API for getting a data using my API key.

- [New York Times API](https://api.nytimes.com/svc/topstories/v2/nyregion.json?api-key=uQG4jhIEHKHKm0qMKGcTHqUgAolr1GM0), [documentation](https://developer.nytimes.com/)

Note there is a [limit](https://developer.nytimes.com/faq#a11) of 10,000 requests per day or 10 requests per minute. We will  work around this by storing the data locally in the browser's [local storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage). 

Instead of requesting the data from the NY Times we will request it from our own browsers.

The specific API endpoint for this is their [top stories endpoint](https://developer.nytimes.com/docs/top-stories-product/1/overview). It lets us request the top stories from a specific section of their publication.

Start by removing the existing HTML content (all the sections and the site wrap div) from the site-wrap div in `index.html` and add some boilerplate:

```html
<main class="site-wrap">
  <h2>Welcome!</h2>
  <p>
    All the news you need for your leisure activities courtesy of the New
    York Times.
  </p>
  <p>To get started make a selection above.</p>
</main>
```

Store the API key, a template string with the complete URL, and the element we want to manipulate (`.site-wrap`) in a variable:

```js
const root = document.querySelector(".site-wrap");
const nytapi = "uQG4jhIEHKHKm0qMKGcTHqUgAolr1GM0"; // note this should be your API key
const nytUrl = `https://api.nytimes.com/svc/topstories/v2/travel.json?api-key=${nytapi}`;
```

<!-- KgGi6DjX1FRV8AlFewvDqQ8IYFGzAcHM -->

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

Note that despite the method being named `json()`, the result is not JSON but is instead the result of taking JSON as input and parsing it to produce a JavaScript object.

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

Most prefer to use arrow functions (for obvious reasons):

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
  data.results.forEach( (story) => {
    let storyEl = document.createElement("div");
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
    let storyEl = document.createElement("div");
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

Add some new css to support the new elements into the break point CSS so it only applies to the wide screen view:

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

<!-- Create a module for the fetching operatiosn in `app/js/modules/fetch-stories.js`:

```js
const root = document.querySelector(".site-wrap");
const nytapi = "KgGi6DjX1FRV8AlFewvDqQ8IYFGzAcHM"; // note this should be your API key
const nytUrl = `https://api.nytimes.com/svc/topstories/v2/travel.json?api-key=${nytapi}`;

export function fetchArticles() {
  fetch(nytUrl)
    .then((response) => response.json())
    .then((myJson) => localStorage.setItem("stories", JSON.stringify(myJson)))
    .then(renderStories);
}

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

Import and call the function in `index.js`:

```js
import { makeNav } from "./modules/nav.js";
import { fetch } from "./modules/fetch-stories.js";

makeNav();
fetch();
``` -->

## News Navigation

Currently were are requesting and displaying the travel section of the New York Times. Our goal is to display different sections depending on the navigation item clicked.

Nav bar clicks wil load new content from the New York Times API, store the data in local storage and render it to the page.

Add categories and navItems variables to `index.js`:

```js
import navItemsObject from "./modules/navitems.js";

const categories = navItemsObject.map((item) => item.link);
console.log('categories: ', categories);
```

```js
const navItems = document.querySelectorAll("li[class^='navitem-']");
console.log('navItems: ', navItems);
```

Add event listeners to each of the nav items:

```js
for (let i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener("click", () => {
    fetchArticles(categories[i]);
  });
}
```

**IMPORTANT:** code order is critical here. The event listeners must be added after the nav items are created (via `makeNav()`). 

<!-- Comment out the `fetch()` call: -->

```js
import { makeNav } from "./modules/nav.js";
import navItemsObject from "./modules/navitems.js";

makeNav();

const categories = navItemsObject.map((item) => item.link);
console.log("categories: ", categories);

const navItems = document.querySelectorAll("nav li a");
console.log("navItems: ", navItems);

for (let i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener("click", () => {
    fetchArticles(categories[i]);
  });
}
```

We will refactor the fetch function to accept a section and use that section in the NYTimes URL:

`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${nytapi}`

```js
const root = document.querySelector(".site-wrap");
const nytapi = "KgGi6DjX1FRV8AlFewvDqQ8IYFGzAcHM"; // note this should be your API key
// const nytUrl = `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${nytapi}`;
```

We also store the data in local storage and only request it if it is not already there.

```js
function fetchArticles(section) {
  console.log("before", section);
  section = section.substring(1);
  console.log("after", section);
  if (!localStorage.getItem(section)) {
    console.log("section not in local storage, fetching");
    fetch(
     nytUrl
    )
      .then((response) => response.json())
      .then((myJson) => localStorage.setItem(section, JSON.stringify(myJson)))
      // .then(renderStories(section))
      .catch((error) => {
        console.warn(error);
      });
  } else {
    console.log("section in local storage");
    // renderStories(section);
  }
}
```

Refactor our `renderStories` function to generate html _based on the section we passed to the fetch call_:

```js
function renderStories(section) {
  let data = JSON.parse(localStorage.getItem(section));
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

There is an issue. We click once on the navigation item and the data is loaded but we receive the response "data not ready yet" from the renderStories function.

```js
function fetchArticles(section) {
  section = section.substring(1);
  if (!localStorage.getItem(section)) {
    console.log("section not in local storage, fetching");
    fetch(
      `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${nytapi}`
    )
      .then((response) => response.json())
      .then((data) => setLocalStorage(section, data))
      .catch((error) => {
        console.warn(error);
      });
  } else {
    console.log("section in local storage");
    renderStories(section);
  }
}

function setLocalStorage(section, myJson) {
  localStorage.setItem(section, JSON.stringify(myJson));
  renderStories(section);
}
```

<!-- Set up the arts section to be displayed by default:

```js
fetch("arts");
``` -->

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

Add supporting CSS:

```css
nav a {
  opacity: 0.9;
}

nav .active {
  font-weight: bold;
  opacity: 1;
}
```

### Immediately Invoked Function Expression

Move everything [out of](https://vanillajstoolkit.com/boilerplates/iife/) the global scope

```js
(function () {
  "use strict";

  // Code goes here...
})();
```

