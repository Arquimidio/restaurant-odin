import food from './food.jpg';

function Hero(){

    return {
        type: 'div',
        children: [
            { type: 'h1', text: 'I\'m The hero section :D'},
            { type: 'img', attr: { src: food }}
        ]
    }
}

export default (parent) => ({
    parent,
    type: 'section',
    children: [Hero()]
}) 