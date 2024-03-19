const root = document.querySelector(".site-wrap");
const nytapi = "KgGi6DjX1FRV8AlFewvDqQ8IYFGzAcHM"; // note this is my API key
const nytUrl = `https://api.nytimes.com/svc/topstories/v2/travel.json?api-key=${nytapi}`;

export function fetch() {
  fetch(nytUrl)
    .then((response) => response.json())
    // .then((myJson) => localStorage.setItem("stories", JSON.stringify(myJson)))
    .then((data) => console.log(data));
}

function renderStories() {
  // let data = JSON.parse(localStorage.getItem("stories"));
  // data.results.map((story) => {
  //   var storyEl = document.createElement("div");
  //   storyEl.className = "entry";
  //   storyEl.innerHTML = `
  //   <img src="${story.multimedia ? story.multimedia[0].url : ""}" alt="${
  //     story.title
  //   }" />
  //     <div>
  //       <h3><a target="_blank" href="${story.short_url}">${story.title}</a></h3>
  //       <p>${story.abstract}</p>
  //     </div>
  //     `;
  //   root.prepend(storyEl);
  // });
}
