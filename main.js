import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css"
import "./css/responsive.css"
import "./css/general.css"

/* NAVIGATION */
var icon = document.getElementById("icon");
var icon1 = document.getElementById("a");
var icon2 = document.getElementById("b");
var icon3 = document.getElementById("c");
var nav = document.getElementById('nav');

icon.addEventListener('click', function() {
  icon1.classList.toggle('a');
  icon2.classList.toggle('c');
  icon3.classList.toggle('b');
  nav.classList.toggle('show');
});
