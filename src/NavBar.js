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

function NavBar(parent) {
    return {
        type: 'header',
        parent,
        children: [Nav()]
    }
}

export default NavBar;