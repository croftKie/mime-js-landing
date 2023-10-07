const get_started_button = document.getElementById("get_started");
const get_started_section = document.getElementById("get_started_section");
const progress_button = document.getElementById("progress_button");
const progress_section = document.querySelector(".progress_container");
const docs_button = document.getElementById("docs_button");
const mime_button = document.getElementById("mime_button");

get_started_button.addEventListener("click", () => {
  const position = get_started_section.getBoundingClientRect().top;
  window.scrollTo({ top: position, behavior: "smooth" });
});

progress_button.addEventListener("click", () => {
  const position = progress_section.getBoundingClientRect().top;
  window.scrollTo({ top: position, behavior: "smooth" });
});

mime_button.addEventListener("click", () => {
  window.open("https://www.npmjs.com/package/mime-js", "_blank");
});
