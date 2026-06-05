import menu1 from '../assets/images/menu1.jpg'
import menu2 from '../assets/images/menu2.jpg'
import menu3 from '../assets/images/menu3.jpg'
import menu4 from '../assets/images/menu4.jpg'

export const pizzas = [
    {
        id: 1,
        name: "Margherita Pizza",
        oldPrice: 10.99,
        salePrice: 8.99,
        image: menu1,
        onSale: true
    },
    {
        id: 2,
        name: "Pepperoni Pizza",
        oldPrice: 12.99,
        salePrice: 10.99,
        image: menu2,
        onSale: false
    },
    {
        id: 3,
        name: "Vegetarian Pizza",
        oldPrice: 11.99,
        salePrice: 9.99,
        image: menu3,
        onSale: true
    },
    {
        id: 4,
        name: "Hawaiian Pizza",
        oldPrice: 13.99,
        salePrice: 11.99,
        image: menu4,
        onSale: false
    }
];