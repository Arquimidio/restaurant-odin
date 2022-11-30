import NavBar from "./helper-components/NavBar";
import Base from "./helper-components/Base";
import Footer from "./helper-components/Footer";
import makeElement from "./makeElement";

const pageCache = {};

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

function renderPage(Page, name) {
    const contentContainer = document.getElementById('content');
    cleanPage(contentContainer);

    if(name in pageCache) {
        contentContainer.append(pageCache[name]);
        console.log(`From cache: ${name}`)
    } else {
        pageCache[name] = makeElement(Page(contentContainer))
        console.log(`From renderer: ${name}`)
    }
}

export {
    renderPage,
    renderBase
};