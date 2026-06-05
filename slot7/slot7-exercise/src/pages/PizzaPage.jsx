import BookingSection from "../components/BookingSection"
import Header from "../components/Header"
import HeroSection from "../components/HeroSection"
import Menu from "../components/Menu"
import { useTheme } from "../contexts/ThemeContext"

const PizzaPage = () => {

    return (
        <div className='bg-black'>
            <Header/>
            <HeroSection/>
            <Menu/>
            <BookingSection/>
        </div>
    )
}

export default PizzaPage;