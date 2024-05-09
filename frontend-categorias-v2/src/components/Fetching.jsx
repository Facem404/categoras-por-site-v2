import '../index.css';
import Cards from './Cards';
import { useMemo, useCallback, useState, useEffect } from 'react';
import IdCopiar from './IdCopiar';

// eslint-disable-next-line react/prop-types
function Fetching({ valueDominio }) {
    const [datos, setDatos] = useState([]);
    const [enlaces, setEnlaces] = useState([]);
    const [clase, setClase] = useState([]);

    const sites = useMemo(
        () => [
            'MLA',
            'MLM',
            'MLB',
            'MLC',
            'MEC',
            'MPE',
            'MCO',
            'MLU',
            'MLV',
            'MBO',
            'MCR',
            'MRD',
            'MSV',
            'MGT',
            'MHN',
            'MNI',
            'MPA',
            'MPY',
            'CBT',
        ],
        [],
    );
    const fetchCategoriaDominio = useCallback(
        async (valueDominio) => {
            if (valueDominio != null && valueDominio != undefined) {
                let resultadosTotales = [];
                let arrayConEnlaces = [];
                for (let i = 0; i < sites.length; i++) {
                    let site = sites[i];
                    let enlace = `https://api.mercadolibre.com/catalog_domains/${site}-${valueDominio}/categories`;
                    const response = await fetch(enlace);
                    const data = await response.json();
                    resultadosTotales.push({ sites, data });
                    arrayConEnlaces.push(enlace);
                }
                setClase(resultadosTotales[0].data.length);
                setDatos(resultadosTotales);
                setEnlaces(arrayConEnlaces);
            }
        },
        [sites],
    );
    //a
    useEffect(() => {
        fetchCategoriaDominio(valueDominio);
    }, [fetchCategoriaDominio, valueDominio]);

    return (
        <div className="main-wrapper">
            <IdCopiar uber={datos} />

            <div className="container-de-cards">
                {/*<p>Valor obtenido en Top: {valueDominio}</p>*/}
                <Cards
                    uber={datos}
                    sites={sites}
                    enlaces={enlaces}
                    clase={clase}
                />
            </div>
        </div>
    );
}

export default Fetching;
