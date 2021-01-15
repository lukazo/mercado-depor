import {useContext} from 'react';
import './CartWidget.css';
import {AiOutlineCloseCircle} from 'react-icons/ai';
import {Store} from '../../store'

const CartWidget = ({show, action}) => {
    const [data, setData] = useContext(Store)
    
    // const total = [data.precio].reduce((acc, valorActual) => acc + data.items.precio * data.items.cantidad, 0)
    // console.log(total)

    const eliminaProducto = (itemId) => {

    }
    
    return (
        <>
            <article>
                <div className={`cartWidget ${show ? 'openWidget' : "closedWidget"}`}>
                    <button className="cierreCart" onClick={action}><AiOutlineCloseCircle /></button>
                    <div>
                        {
                            data.items.map(item => 
                                <article key={item.id} className="itemContainer">
                                    <p>{item.nombre}</p>
                                    <p>{data.cantidad}</p>
                                    <p>{parseInt(data.precio)}</p>
                                    <button onClick={eliminaProducto}>X</button>
                                </article>
                            )
                        }                
                    </div>
                </div>
            </article>
            <div className={`falseOverlay ${show ? 'openWidget' : "closedWidget"}`} onClick={action}></div>
        </>
    )
}

export default CartWidget;