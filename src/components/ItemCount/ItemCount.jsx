import {useState, useContext} from 'react';
import {Store} from '../../store'

const ItemCount = ({itemDetail, maxProd = 15}) => {

    const [data, setData] = useContext(Store)

    const onAdd = () => {
        setData({
            ...data, 
            cantidad: data.cantidad + qtyProd,
            items: [...data.items, itemDetail]
        })
    }
    
    const [qtyProd, setQtyProd] = useState(0);
    
    const restaQtyProd = () => {
        if(qtyProd) {
            setQtyProd(qtyProd - 1);
        }
    }
    return (
        <div className="qtyProd">
            <button className="countProd"
                onClick={restaQtyProd}
                disabled={!qtyProd ? 'disabled' : null}    
            >
                -
            </button>
            <input type="text" value={qtyProd} readOnly/>
            <button className="countProd"
                onClick={() => setQtyProd(qtyProd + 1)}
                disabled={qtyProd >= maxProd}                
            >+</button>
            <button onClick={onAdd}>Agregar al carrito</button>
        </div>
    );
}

export default ItemCount;