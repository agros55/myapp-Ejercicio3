import { useParams } from "react-router-dom";
import Products from '../Productos/data';

import './InfoProd.css';

const InfoProd = () => {
    let { id } = useParams();;
    let Product = Products.find(prod => prod.Id == id);
    return (
        <div className="InfoProd">
            <img src={Product.Imagen2} alt="" />
            <div className="Info">
                <h1 className="Nombre">{Product.Nombre}</h1>
                <p className="Precio">{Product.Precio}</p>
                <h3 className="Label">Descripción: </h3>
                <p className="Descripcion">{Product.Descripcion}</p>
                <h3 className="Label">Cantidad disponible: </h3>
                <p className="Stock">{Product.Stock}</p>
                <h3 className="Label">SKU: </h3>
                <p className="SKU">{Product.SKU}</p>
            </div>
        </div>
    );
}

export default InfoProd;