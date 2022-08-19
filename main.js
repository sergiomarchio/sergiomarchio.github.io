
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
schemeChanged(prefersDarkScheme);

prefersDarkScheme.addEventListener("change", schemeChanged);

document.querySelector('.theme-selector').onclick = switchTheme;


// Updates body class to match system theme, if desired
function schemeChanged(prefersDark) {
  if (document.body.classList.contains("system-theme")) {
    if (prefersDark.matches) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  }
}

function switchTheme() {
    document.body.classList.toggle("dark-theme");
}
