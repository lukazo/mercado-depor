import {useContext} from 'react'
import {Store} from '../../store'

const Cart = () => {
   const [data, setData] = useContext(Store);

   return (
        <>
        <h1>Carrito</h1>
        <div className="itemContainer">
            <p>Item</p>
            <p>Cantidad</p>
            <p>Subtotal</p>
        </div>
        {
            data.items.map((item) => 
                <div key={item.id} className='itemContainer'>
                    <h2>{item.nombre}</h2>
                    <h2>{item.qty}</h2>
                    <h2>{data.precio}</h2>
                </div>
            )
        }
        </>
   )
}

export default Cart;