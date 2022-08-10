let open = false;

const center = document.querySelector(".center");
const bar = document.querySelector(".bar");

center.addEventListener("click", (e) => {
  if (!open) {
    bar.classList.add("mid");
    setTimeout(() => {
      bar.classList.add("open");
    }, 250);
    open = true;
  } else {
    bar.classList.remove("open");
    setTimeout(() => {
      bar.classList.remove("mid");
    }, 250);
    open = false;
  }
});
