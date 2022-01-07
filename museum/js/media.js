const mediaQuery = window.matchMedia("(max-width: 1024px)");

function handleChange(e) {
  if (e.matches) {
    document.getElementById("seek").value = "40";
    document.getElementById("seek-value").value = "37";
  }
}
mediaQuery.addListener(handleChange);
handleChange(mediaQuery);
