
function NavLinks(...args) {
    return args.map((text) => ({
        type: 'li',
        text,
        attr: {
            class: 'nav-link'
        }
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
        attr: {
            class: 'container'
        },
        children: [NavList()]
    }
}

export default (parent) => ({
    type: 'header',
    parent,
    children: [Nav()]
})