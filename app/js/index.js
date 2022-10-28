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

// nav.innerHTML = markup;
nav.querySelector("#main-nav").innerHTML = markup;

const logo = document.querySelector(".navitem-0");
logo.classList.add("logo");
logo.innerHTML = '<a href="#"><img src="img/logo.svg" /></a>';
