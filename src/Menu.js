import MenuGrid from './helper-components/MenuGrid';
import MenuItem from './helper-components/MenuItem';
import PageWrapper from './helper-components/PageWrapper';
import Salad from './images/salad.png'
import Beans from './images/beans.png'
import Burguer from './images/burger.png'
import Soup from './images/soup.png'
import Pasta from './images/pasta.png'
import HotDog from './images/hotdog.png'

export default PageWrapper({
    children: [MenuGrid(
        MenuItem('Salad Mix', Salad, '$12'),
        MenuItem('Rice N\' Beans', Beans, '$18'),
        MenuItem('Soy Burguer', Burguer, '$22'),
        MenuItem('Carrot Soup', Soup, '$16'),
        MenuItem('La Pasta', Pasta, '$14'),
        MenuItem('Hot Dog', HotDog, '$20')
    )]
})