import '../index.css';
// eslint-disable-next-line react/prop-types
function Top({ onValueDominio }) {
    const handleClick = (event) => {
        event.preventDefault();
        const valorObtenidoSubmit = event.target.input.value
            .toUpperCase()
            .replace(/\s+/g, '');

        onValueDominio(valorObtenidoSubmit);
    };

    return (
        <div>
            <div>
                <form onSubmit={handleClick}>
                    <input
                        type="text"
                        name="input"
                        placeholder="Ingrese un valor"
                    />
                    <button type="submit">Buscar</button>
                </form>
            </div>
        </div>
    );
}

export default Top;
