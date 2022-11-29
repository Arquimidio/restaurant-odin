export default (content = 'Click me', classes = '') => ({
    type: 'button',
    attr: {
        class: 'btn ' + classes
    },
    text: content
})