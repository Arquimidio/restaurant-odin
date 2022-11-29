export default (className, ...args) => ({
    type: 'div',
    children: args,
    attr: {
        class: className
    }
})