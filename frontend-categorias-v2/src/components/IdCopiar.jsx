/* eslint-disable react/prop-types */
import '../index.css';
function IdCopiar({ uber }) {
    // Inicializar un array para almacenar todos los códigos alfanuméricos
    const todosLosCodigos = [];

    // Recorrer los primeros 8 elementos de uber
    for (let i = 0; i < 8 && i < uber.length; i++) {
        const datos = uber[i].data;

        // Recorrer los datos de cada elemento de uber
        for (let j = 0; j < datos.length; j++) {
            const codigo = datos[j].id;

            // Agregar el código al array de todos los códigos
            todosLosCodigos.push(codigo);
        }
    }

    // Generar la cadena de texto con el patrón de "código1, código2, código3, ..."
    const cadenaFinal = todosLosCodigos.join(', ');

    const copiarAlPortapapeles = () => {
        navigator.clipboard.writeText(cadenaFinal);
    };
    return (
        <div className="portapapeles">
            <p>{cadenaFinal}</p>
            <button
                className="boton-portapapeles"
                onClick={copiarAlPortapapeles}>
                Copiar al portapapeles
            </button>
        </div>
    );
}

export default IdCopiar;
