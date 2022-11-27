import food from './images/food.jpg';
import Container from './Container'
import PageWrapper from './PageWrapper';

function Hero(){
    return {
        type: 'div',
        children: [
            { type: 'h1', text: 'I\'m The hero section :D'},
            { type: 'img', attr: { src: food }}
        ]
    }
}

export default PageWrapper({
    children: [Hero()]
})