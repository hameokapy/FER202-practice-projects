import { useCart } from "../../contexts/CartContext"
import { Button } from "react-bootstrap"

export default function Cart() {
    const {cart, clearCart, deleteFromCart, totalPrice, totalItems} = useCart();

    return (
        <div style={{textAlign:'center', padding:'1rem'}}>
            <Button onClick={clearCart}>Clear cart</Button>
            <div style={{margin:"1rem", backgroundColor:"yellow", width:"50%", marginInline:"auto"}}>
                <h4>Cart List:</h4>
                <p>Cart list in progress...</p>
            </div>
            <p>Total price: {totalPrice}</p>
            <p>Total items: {totalItems}</p>
        </div>
    )
}