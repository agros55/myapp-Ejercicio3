import { useParams } from "react-router-dom";
import Products from '../Productos/data';
const InfoProd = () => {
    let { id } = useParams();;
    let Product = Products.find(prod => prod.Id == id);
    return (
        <div className="InfoProd">
            <h1>{Product.Nombre}</h1>
            <img src={Product.Imagen2} alt="" />
            <p>{Product.Descripcion}</p>
            <p>{Product.Precio}</p>
            <p>{Product.Stock}</p>
            <p>{Product.SKU}</p>
        </div>
    );
}

export default InfoProd;