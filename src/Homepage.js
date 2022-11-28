import food from './images/food.png';
import PageWrapper from './helper-components/PageWrapper';
import SideDisplay from './helper-components/SideDisplay';

const HeroTitle = () => ({ type: 'h1', text: 'Well prepared, tasteful vegan food with everything you could wish!'});
const HeroParagraph = () => ({ text: 'You don\'t need to eat tasteless food, this world can be very colorful and tasteful. Vegetarian food like you will never see anywhere else. You will not even notice the difference, come and visit us!' });
const HeroText = () => ({ type: 'div', children: [HeroTitle(), HeroParagraph()], attr: { class: 'hero-text' } })
const HeroImage = () => ({ type: 'div', children: [{ type: 'img', attr: { src: food }}]});
const Hero = SideDisplay(HeroText(), HeroImage());


export default PageWrapper({
    children: [Hero()]
})