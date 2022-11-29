import food from './images/food.png';
import PageWrapper from './helper-components/PageWrapper';
import SideDisplay from './helper-components/SideDisplay';
import Button from './helper-components/Button';
import Wrapper from './helper-components/Wrapper';

const HeroTitle = () => ({ type: 'h1', text: 'Well prepared, tasteful vegetarian and vegan food with everything you could wish!'});
const HeroParagraph = () => ({ text: 'You don\'t need to eat tasteless food, this world can be very colorful and tasteful. Vegetarian food like you will never see anywhere else!' });
const HeroText = () => ({ 
    type: 'div', 
    children: [HeroTitle(), HeroParagraph(), Wrapper('hero-btns', Button('Contact us'), Button('Know more'))], 
    attr: { class: 'hero-text' } 
})
const HeroImage = () => ({ type: 'div', children: [{ type: 'img', attr: { src: food }}]});
const Hero = SideDisplay(HeroText(), HeroImage());


export default PageWrapper({
    children: [Hero()]
})