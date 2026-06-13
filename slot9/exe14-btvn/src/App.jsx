import Exe1 from "./components/Exe1";
import Exe2 from "./components/Exe2";
import { CartProvider } from "./contexts/CartContext";
import { ThemeProvider} from "./contexts/ThemeContext"

const App = () => {

  return (
    <>
      <ThemeProvider>
        <Exe1/>
        <CartProvider>
          <Exe2/>
        </CartProvider>
      </ThemeProvider>
    </>
  )
}

export default App