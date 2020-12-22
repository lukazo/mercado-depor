import {useState, useEffect} from 'react';
import ProductDetail from './ProductDetail';

const Detail = ({nombre, precio, description}) => {

    const [product, setProduct] = useState(null)

    const detalleProducto = 
        {
            nombre: `${nombre}`,
            description: `${description}`,
            precio: `${precio}`,
        }
    

    const getProduct = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(detalleProducto);
        }, 2000)
    })

    const getProductDB = async () => {
        try {
            const getDetalle = await(getProduct);
            setProduct(getDetalle)
        } catch(error) {
            return console.log(error)
        }
    }

    useEffect(() => {
        getProductDB();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // useEffect(() => {
    //     getProduct.then(response => setProduct(response)).catch(error => console.log(error))
    // })
    
    return (
        <>
            {
                product ?
                <>
                    <li>
                        <ProductDetail item={product} />
                    </li>
                </>
                : <p>Cargando detalle...</p>
            }
            <section>
                otros productios recomendados
            </section>   
        </>
    );
}

export default Detail;