document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// https://github.com/byrnereese/mkdocs-git-committers-plugin
document.querySelectorAll(".contributors img[data-src]").forEach((img) => {
  img.src = img.getAttribute("data-src");
});
