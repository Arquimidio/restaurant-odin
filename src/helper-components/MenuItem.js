import Wrapper from "./Wrapper";

function ItemSpan(text, className) {
    return {
        text,
        attr: {
            class: className
        }
    }
}

export default (name, image, price, promo) => ({
    type: 'div',
    attr: {
        class: 'menu-item'
    },
    children: [
        Wrapper('menu-item-img', {
            type: 'img',
            attr: {
                src: image
            }
        }),
        ItemSpan(name, 'menu-item-name'),
        ItemSpan(price, 'menu-item-price'),
        ItemSpan(promo, 'menu-item-promo')
    ]
})