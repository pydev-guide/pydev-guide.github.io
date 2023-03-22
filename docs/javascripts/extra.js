// //  Smooth-scrolling for internal links... but this breaks Anchor links
// document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
//   anchor.addEventListener("click", function (e) {
//     e.preventDefault();
//     const href = this.getAttribute("href");
//     document.querySelector(href).scrollIntoView({
//       behavior: "smooth",
//     });
//     // document.location.hash = href;
//   });
// });

// https://github.com/byrnereese/mkdocs-git-committers-plugin
document.querySelectorAll(".contributors img[data-src]").forEach((img) => {
  img.src = img.getAttribute("data-src");
});
