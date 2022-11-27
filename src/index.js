import makeElement from "./makeElement";
import NavBar from "./NavBar";
const mainContainer = document.getElementById('content');

makeElement(NavBar(mainContainer));