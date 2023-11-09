
import './Producto.css';
import { useNavigate } from "react-router-dom";

const Producto = ({ Id, Imagen, Nombre, Descripcion, Precio, SKU, Stock }) => {
    const navigate = useNavigate();
    return (
        <div className='Producto'>
            <img src={Imagen} alt={Nombre} />
            <h2 className='Item Nombre'>{Nombre}</h2>
            <div className="Compra">
                <h3 className='Item Precio'>{Precio}</h3>
                <button className='Item Btn' onClick={() => navigate("/myapp-Ejercicio3/producto/" + Id)}>VER MAS</button>
            </div>
            {/* <div className="Compra">
                <p className='Item SKU'>SKU: {SKU}</p>
                <p className='Item Stock'>Disponibles: {Stock}</p>
            </div>
            <p className='Item Descripcion'>{Descripcion}</p> */}

        </div>
    );
}

export default Producto;
