import { makeNav } from "./modules/nav.js";
// import { fetch } from "./modules/fetch-stories.js";

const root = document.querySelector(".site-wrap");
const nytapi = "KgGi6DjX1FRV8AlFewvDqQ8IYFGzAcHM"; // note this is my API key
const nytUrl = `https://api.nytimes.com/svc/topstories/v2/travel.json?api-key=${nytapi}`;

fetch(nytUrl)
  .then((response) => response.json())
  .then((myJson) => localStorage.setItem("stories", JSON.stringify(myJson)))
  .then(renderStories);

function renderStories() {
  let data = JSON.parse(localStorage.getItem("stories"));
  data.results.forEach((story) => {
    let storyEl = document.createElement("div");
    storyEl.className = "entry";
    storyEl.innerHTML = `

        <img src="${story.multimedia ? story.multimedia[0].url : ""}" 
          alt="${story.title}" />

            <div>
              <h3><a target="_blank" href="${story.short_url}">${
      story.title
    }</a></h3>
          <p>${story.abstract}</p>
        </div>
    `;
    root.prepend(storyEl);
  });
}

makeNav();
// fetch();
