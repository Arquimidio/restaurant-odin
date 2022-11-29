import Wrapper from "./Wrapper";

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
        {
            type: 'span',
            text: name,
            attr: {
                class: 'menu-item-name'
            }
        },
        {
            type: 'span',
            text: price,
            attr: {
                class: 'menu-item-price'
            }
        },
        {
            type: 'span',
            text: promo,
            attr: {
                class: 'menu-item-promo'
            }
        }
    ]
})