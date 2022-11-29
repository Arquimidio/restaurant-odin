import Image from "./Image";
import Button from "./Button"
import Logo from "../images/logo.png"

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
        children: [Image(Logo), NavList(), Button('Call Us', 'btn-primary')]
    }
}

export default (parent) => ({
    type: 'header',
    parent,
    children: [Nav()]
})