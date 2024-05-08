import { useState, useEffect } from 'react';
/* eslint-disable react/prop-types */
function ArbolCategorias({ idCategoria }) {
    const [arbol, setArbol] = useState([]);

    useEffect(() => {
        const fetchArbol = async () => {
            const response = await fetch(
                `https://api.mercadolibre.com/categories/${idCategoria}`,
            );
            const data = await response.json();

            if (data.path_from_root) {
                setArbol(data.path_from_root);
            }
        };

        fetchArbol();
    }, [idCategoria]);

    return (
        <ul className="arbol-categorias">
            {arbol.map((arbolItem, arbolIndex) => (
                <li key={arbolIndex}>{arbolItem.name}</li>
            ))}
        </ul>
    );
}

export default ArbolCategorias;
