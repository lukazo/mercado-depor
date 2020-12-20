import './CartWidget.css';
import {AiOutlineCloseCircle} from 'react-icons/ai';

const CartWidget = ({show, action}) => {
    return (
        <>
            <article>
                <div className={`cartWidget ${show ? 'openWidget' : "closedWidget"}`}>
                    <button className="cierreCart" onClick={action}><AiOutlineCloseCircle /></button>
                    <p>Widget de productos</p>
                </div>
            </article>
            <div className={`falseOverlay ${show ? 'openWidget' : "closedWidget"}`} onClick={action}></div>
        </>
    )
}

export default CartWidget;