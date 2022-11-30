import './css/main.css';
import './css/form.css';
import { renderBase, renderPage} from './Pages';
import Homepage from './Homepage';
import Menu from './Menu';
import Contact from './Contact';


document.addEventListener('DOMContentLoaded', () => {
    renderBase();
    const allPAges = [Homepage, Menu, Contact];
    const links = document.querySelectorAll('.nav-link');

    links.forEach((link, i) => link.addEventListener('click', () => {
        renderPage(allPAges[i])
        document.querySelector('.selected')?.classList.remove('selected');
        link.classList.add('selected')
    }))
    
    renderPage(Homepage);
    links[0].classList.add('selected');
})