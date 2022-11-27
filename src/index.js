import makeElement from "./makeElement";
const mainContainer = document.getElementById('content');

function NavLinks(...args) {
    return args.map((text) => ({
        type: 'li',
        children: [{
            type: 'a',
            text,
            attr: {
                href: '/'
            }
        }]
    }))
}

function NavList() {
    return {
        type: 'ul',
        children: NavLinks('Home', 'Menu', 'Contact')
    }
}

function Nav() {
    return {
        type: 'nav',
        children: [NavList()]
    }
}

function NavBar() {
    makeElement({
        type: 'header',
        parent: document.body(),
        children: [Nav()]
    })
}

NavBar();