const nav = document.querySelector(".main-menu");
const root = document.querySelector(".site-wrap");
const nytapi = "MVcboclcF77iFZX4gAiE7z0OdLdvvZ2A";

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

const logo = document.createElement("li");
const navList = nav.querySelector("nav ul");
logo.classList.add("logo");
logo.innerHTML = '<a href="#"><img src="img/logo.svg" /></a>';
navList.prepend(logo);

async function renderStories(section) {
  console.log("section", section);
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

const categories = navItemsObject.map((item) => item.link);
console.log(categories);

function fetchArticles(section) {
  setActiveTab(section);
  section = section.substring(1);
  if (!localStorage.getItem(section)) {
    console.log("ran");
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
    console.log("didn't ran");
    renderStories(section);
  }
}

const navItems = document.querySelectorAll("li[class^='navitem-']");
console.log("navItems:::::", navItems);

navItems.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    // e.preventDefault();
    console.log("categories[index]:::", categories[index]);
    fetchArticles(categories[index]);
  });
});

function setActiveTab(section) {
  const activeTab = document.querySelector("a.active");
  if (activeTab) {
    activeTab.classList.remove("active");
  }
  const tab = document.querySelector(`li a[href="${section}"]`);
  tab.classList.add("active");
}

fetchArticles("#arts");
