import {useState} from 'react';

const ItemCount = ({maxProd = 15}) => {
    const [qtyProd, setQtyProd] = useState(0);
    
    const restaQtyProd = () => {
        if(qtyProd) {
            setQtyProd(qtyProd - 1);
        }
    }
    return (
        <div className="qtyProd">
            <button 
                onClick={restaQtyProd}
                disabled={!qtyProd ? 'disabled' : null}    
            >
                -
            </button>
            <input type="text" value={qtyProd} readOnly/>
            <button 
                onClick={() => setQtyProd(qtyProd + 1)}
                disabled={qtyProd >= maxProd}                
            >+</button>
        </div>
    );
}

export default ItemCount;