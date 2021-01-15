import {useState, useContext} from 'react';
import {useHistory} from 'react-router-dom';
import {Store} from '../../store'

const ItemCount = ({itemDetail, maxProd = 15}) => {

    const history = useHistory()
    const [data, setData] = useContext(Store)

    const onAdd = () => {
        setData({
            ...data, 
            cantidad: data.cantidad + qtyProd,
            items: [...data.items,{nombre: itemDetail.nombre, precio: itemDetail.precio, qty: qtyProd, id: itemDetail.id}],
            precio: itemDetail.precio * qtyProd
        })
        console.log(data)
        history.push('/cart');
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