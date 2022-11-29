export default (...args) => ({
    type: 'div',
    attr: {
        class: 'menu-grid'
    },
    children: args
})