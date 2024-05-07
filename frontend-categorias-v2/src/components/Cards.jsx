// eslint-disable-next-line react/prop-types
function Cards({ uber, sites }) {
    console.log(sites);
    return (
        <div className="card">
            <div>
                {/* Aquí puedes mapear los datos recibidos y renderizar las tarjetas */}
                {/* eslint-disable-next-line react/prop-types*/}
                {uber.map((dato, index) => (
                    <div key={index}>
                        {/* Renderiza cada tarjeta utilizando los datos */}
                        <h4>{sites[index]}</h4>
                        <ul>
                            {dato.data &&
                                Array.isArray(dato.data) &&
                                dato.data.map((subItem, subIndex) => (
                                    <p key={subIndex}>
                                        {subItem.id} - {subItem.name}
                                    </p>
                                ))}
                        </ul>
                        {/* Agrega más elementos según la estructura de tus datos */}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Cards;
