import './css/main.css';
import { renderBase, renderPage} from './Pages';
import Homepage from './Homepage';
import Menu from './Menu';
import Contact from './Contact';


document.addEventListener('DOMContentLoaded', () => {
    const AllPAges = [Homepage, Menu, Contact]
    renderBase();
    const links = document.querySelectorAll('.nav-link');
    links.forEach((link, i) => link.addEventListener('click', () => {
        renderPage(AllPAges[i])
    }))
    renderPage(Homepage);
})