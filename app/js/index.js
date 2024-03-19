import { makeNav } from './modules/nav.js'
import navItemsObject from './modules/navitems.js'

const root = document.querySelector('.site-wrap')
const nytapi = 'KgGi6DjX1FRV8AlFewvDqQ8IYFGzAcHM' // note this should be your API key
// const nytUrl = `https://api.nytimes.com/svc/topstories/v2/travel.json?api-key=${nytapi}`;

makeNav()

const categories = navItemsObject.map(item => item.link)
console.log('categories: ', categories)

const navItems = document.querySelectorAll("li[class^='navitem-']")
console.log('navItems: ', navItems)

for (let i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener('click', () => {
        fetchArticles(categories[i])
    })
}

function fetchArticles(section) {
    section = section.substring(1)
    if (!localStorage.getItem(section)) {
        console.log('section not in local storage, fetching')
        fetch(
            `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${nytapi}`
        )
            .then(response => response.json())
            .then(data => setLocalStorage(section, data))
            .catch(error => {
                console.warn(error)
            })
    } else {
        console.log('section in local storage')
        renderStories(section)
    }
}

function setLocalStorage(section, myJson) {
    localStorage.setItem(section, JSON.stringify(myJson))
    renderStories(section)
}

function renderStories(section) {
    setActiveTab(`#${section}`)
    let data = JSON.parse(localStorage.getItem(section))
    if (data) {
        data.results.map(story => {
            var storyEl = document.createElement('div')
            storyEl.className = 'entry'
            storyEl.innerHTML = `
      <img src="${story.multimedia ? story.multimedia[0].url : ''}" alt="${
                story.title
            }" />
      <div>
        <h3><a target="_blank" href="${story.url}">${story.title}</a></h3>
        <p>${story.abstract}</p>
      </div>
      `
            root.prepend(storyEl)
        })
    } else {
        console.log('data not ready yet')
    }
}

function setActiveTab(section) {
    const activeTab = document.querySelector('a.active')
    if (activeTab) {
        activeTab.classList.remove('active')
    }
    const tab = document.querySelector(`li a[href="${section}"]`)
    tab.classList.add('active')
}
