import {BrowserRouter, Route, Routes} from 'react-router-dom'
import PizzaPage from '../pages/PizzaPage'

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<PizzaPage />} />
            </Routes>
        </BrowserRouter> 
    )
}