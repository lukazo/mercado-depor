//import {useContext} from 'react';
import './CartWidget.css';
import {AiOutlineCloseCircle} from 'react-icons/ai';
//import {Store} from '../../store'

const CartWidget = ({show, action}) => {
   // const [data, setData] = useContext(Store)
    
    return (
        <>
            <article>
                <div className={`cartWidget ${show ? 'openWidget' : "closedWidget"}`}>
                    <button className="cierreCart" onClick={action}><AiOutlineCloseCircle /></button>
                </div>
                <div>
                    
                </div>
            </article>
            <div className={`falseOverlay ${show ? 'openWidget' : "closedWidget"}`} onClick={action}></div>
        </>
    )
}

export default CartWidget;