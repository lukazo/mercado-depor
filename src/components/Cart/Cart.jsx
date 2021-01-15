import {useContext} from 'react'
import {Store} from '../../store'

const Cart = () => {
   const [data, setData] = useContext(Store);

   return (
        <>
        <h1>Carrito</h1>
        {
            data.items.map((item, index) => 
                <div key={index} className='itemContainer'>
                    <h2>{item.nombre}</h2>
                    <h2>{item.precio}</h2>
                </div>
            )
        }
        </>
   )
}

export default Cart;