import NavBar from "./NavBar";
import Footer from "./Footer";
import makeElement from "./makeElement";
const mainContainer = document.getElementById('content');

function cleanPage() {
    while(mainContainer.firstChild) {
        mainContainer.firstChild.remove();
    }
}

function renderPage(Page) {
    cleanPage();
    const content = [NavBar, Page, Footer];
    content.forEach(element => makeElement(element(mainContainer)));
}

export default renderPage;