import {useContext} from 'react';
import {useState, useEffect} from 'react';
import './CartWidget.css';
import {AiOutlineCloseCircle} from 'react-icons/ai';
import {Store} from '../../store'

const CartWidget = ({show, action}) => {
    const [data, setData] = useContext(Store)

    const [total, setTotal] = useState(0);

    useEffect(() => { 
        //const totalCarrito = [data.precio].reduce((acc, valorActual) => acc + data.precio * data.qty, 0)
        //setTotal(totalCarrito);
     }, [])

    const eliminaProducto = () => {
        
    }
    
    return (
        <>
            <article>
                <div className={`cartWidget ${show ? 'openWidget' : "closedWidget"}`}>
                    <button className="cierreCart" onClick={action}><AiOutlineCloseCircle /></button>
                    <div>
                        <div className="itemContainer">
                            <p>Item</p>
                            <p>Cantidad</p>
                            <p>Subtotal</p>
                        </div>
                        {
                            data.items.map(item => 
                                <article key={item.id} className="itemContainer">
                                    <p>{item.nombre}</p>
                                    <p>{item.qty}</p>
                                    <p>{parseInt(data.precio)}</p>
                                    <button onClick={eliminaProducto}>X</button>
                                </article>
                            )
                        }                
                        <div className="totalContainer">
                            <h2>Total:</h2>
                            <h3>{total}</h3>
                        </div>
                    </div>
                </div>
            </article>
            <div className={`falseOverlay ${show ? 'openWidget' : "closedWidget"}`} onClick={action}></div>
        </>
    )
}

export default CartWidget;