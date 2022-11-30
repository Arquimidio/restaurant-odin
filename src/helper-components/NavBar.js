import Image from "./Image";
import Button from "./Button"
import Logo from "../images/logo.png"
import Phone from "../icons/phone.png"

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
        children: [Image(Logo, 'logo'), NavList(), Button('Call Us!', 'btn-primary', Phone)]
    }
}

export default (parent) => ({
    type: 'header',
    parent,
    children: [Nav()]
})