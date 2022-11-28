export default (...args) => ({
    type: 'div',
    attr: {
        class: 'container'
    },
    children: args
})