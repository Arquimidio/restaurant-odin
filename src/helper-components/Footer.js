function FooterContent(...args) {
    return {
        type: 'div',
        attr: {
            class: 'container'
        },
        children: args
    }
}

export default (parent) => ({
    type: 'footer',
    parent,
    children: [FooterContent({ type: 'div', text: 'Vegtopia © 2022 | All Rights Reserved'})]
})