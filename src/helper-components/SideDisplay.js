export default (left, right) => () => ({
    type: 'div',
    attr: {
        class: 'side-display'
    },
    children: [left, right]
})