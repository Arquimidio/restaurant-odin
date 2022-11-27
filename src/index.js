import './css/main.css';
import { renderBase, renderPage} from './Pages';
import Homepage from './Homepage';

document.addEventListener('DOMContentLoaded', () => {
    const AllPAges = [Homepage]
    renderBase();
    const links = document.querySelectorAll('.nav-link');
    links.forEach((link, i) => link.addEventListener('click', () => {
        renderPage(AllPAges[i])
    }))
    renderPage(Homepage);
})