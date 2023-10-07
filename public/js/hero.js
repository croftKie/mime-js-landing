const card = document.querySelector(".container>.card");
const buttons = document.querySelector(".container>.buttons");

const card_data = [
  {
    title: "MimeJS",
    description:
      "MimeJS is a component based framework that uses vanilla JavaScript and HTML Templating. Think React, without the JSX.",
    image_path: "./public/assets/mime.png",
  },
  {
    title: "Components",
    description:
      "You build components for navs, heros, forms using a single set of HTML/CSS/JS files.",
    image_path: "./public/assets/puzzle-piece.png",
  },
  {
    title: "Templates",
    description:
      "Many components make up a HTML template. Components can be reused across many templates.",
    image_path: "./public/assets/templates.png",
  },
  {
    title: "Compile and Deploy",
    description:
      "MimeJS compiles all components into a single page per template, alongside its assets. Ready to deploy.",
    image_path: "./public/assets/compile.png",
  },
];

Array.from(buttons.children).forEach((button, index) => {
  button.addEventListener("click", (e) => changeActive(e, index));
});

function changeActive(e, index) {
  Array.from(buttons.children).forEach((button) => {
    button.classList.remove("active_button");
  });

  e.target.classList.add("active_button");

  card.children[0].innerText = card_data[index].title;
  card.children[1].src = card_data[index].image_path;
  card.children[2].innerText = card_data[index].description;
}
