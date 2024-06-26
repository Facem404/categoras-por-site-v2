import ArbolCategorias from './ArbolCategorias';
import '../index.css';
/* eslint-disable react/prop-types */
function Cards({ uber, sites, enlaces, clase }) {
    return (
        <>
            {uber.map((dato, index) => (
                <div
                    key={index}
                    className={
                        index === uber.length - 1
                            ? `card card-wide altura-${clase}`
                            : `card card-width altura-${clase}`
                    }>
                    <div className="box-h4-a">
                        <h2>{sites[index]}</h2>
                        <a href={enlaces[index]} target="_blank">
                            Categorías del dominio
                        </a>
                    </div>
                    <ul className="ul-card">
                        {dato.data &&
                            Array.isArray(dato.data) &&
                            dato.data.map((subItem, subIndex) => (
                                <li key={subIndex}>
                                    {subItem.id} -{' '}
                                    <a
                                        href={`https://api.mercadolibre.com/categories/${subItem.id}`}
                                        target="_blank">
                                        Enlace
                                    </a>{' '}
                                    - {subItem.name}
                                    <ArbolCategorias idCategoria={subItem.id} />
                                </li>
                            ))}
                    </ul>
                    {/* Agrega más elementos según la estructura de tus datos */}
                </div>
            ))}
        </>
    );
}

export default Cards;
