import NavBar from "./NavBar";
import Base from "./Base";
import Footer from "./Footer";
import makeElement from "./makeElement";

function cleanPage(pageContainer) {
    while(pageContainer.firstChild) {
        pageContainer.firstChild.remove();
    }
}

function renderBase() {
    const container = document.getElementById('content-container');
    const toRender = [NavBar, Base, Footer];
    toRender.forEach(element => makeElement(element(container)));
}

function renderPage(Page) {
    const contentContainer = document.getElementById('content');
    cleanPage(contentContainer);
    makeElement(Page(contentContainer));
}

export {
    renderPage,
    renderBase
};