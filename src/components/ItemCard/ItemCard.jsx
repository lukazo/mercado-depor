import {useState} from 'react';
import './ItemCard.css';

const ItemCard = ({titulo, precio}) => {

    const [qtyProd, setQtyProd] = useState(0);
    
    const restaQtyProd = () => {
        if(qtyProd) {
            setQtyProd(qtyProd - 1);
        }
    }

    return (
        <article className="itemCard">
            <img src="https://placehold.it/250X200" alt="Producto de prueba"/>
            <div className="container-producto">
                <h3>{titulo}</h3>
                <div className="qtyProd">
                    <button 
                        onClick={restaQtyProd}
                        disabled={!qtyProd ? 'disabled' : null}    
                    >
                        -
                    </button>
                    <input type="text" value={qtyProd} readOnly/>
                    <button onClick={() => setQtyProd(qtyProd + 1)}>+</button>
                </div>
                <p>${precio}</p>
            </div>
        </article>
    );
}
export default ItemCard;