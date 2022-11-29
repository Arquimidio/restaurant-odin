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
    children: [FooterContent({ type: 'div', text: 'Sou um rodapé :O'})]
})