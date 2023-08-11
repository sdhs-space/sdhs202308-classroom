const $fullPage = document.querySelector(".fullpage");
const $fullPageChilCount = $fullPage.childElementCount - 1;
let currentFullPageIndex = 0;
let look = false;

history.scrollRestoration = "manual";

document.addEventListener("mousewheel", function (event) {
  if (look) return;
  const isScrollDown = 0 < event.deltaY;
  if (isScrollDown && currentFullPageIndex < $fullPageChilCount) {
    currentFullPageIndex++;
  } else if (!isScrollDown && currentFullPageIndex > 0) {
    currentFullPageIndex--;
  }
  $fullPage.style.transform = `translateY(-${currentFullPageIndex * 100}%)`;
  look = true;
  setTimeout(function () {
    look = false;
  }, 500);
});
