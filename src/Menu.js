import MenuGrid from './helper-components/MenuGrid';
import MenuItem from './helper-components/MenuItem';
import PageWrapper from './helper-components/PageWrapper';
import Salad from './images/salad.png'
import Beans from './images/beans.png'
import Burguer from './images/burger.png'
import Soup from './images/soup.png'
import Pasta from './images/pasta.png'
import HotDog from './images/hotdog.png'
import Beef from './images/beef.png'
import Pierogi from './images/pierogi.png'

export default PageWrapper({
    children: [MenuGrid(
        MenuItem('Salad Mix', Salad, '$12'),
        MenuItem('Rice N\' Beans', Beans, '$18'),
        MenuItem('Pierogi', Pierogi, '$30'),
        MenuItem('La Pasta', Pasta, '$14'),
        MenuItem('Soy Beef', Beef, '$28'),
        MenuItem('Carrot Soup', Soup, '$16'),
        MenuItem('Soy Burguer', Burguer, '$22'),
        MenuItem('Hot Dog', HotDog, '$20'),
    )]
})