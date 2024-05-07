import '../index.css';
import Cards from './Cards';
import { useMemo, useCallback, useState, useEffect } from 'react';
// eslint-disable-next-line react/prop-types
function Fetching({ valueDominio }) {
    const [datos, setDatos] = useState([]);

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
            let resultadosTotales = [];

            for (let i = 0; i < sites.length; i++) {
                let site = sites[i];

                const response = await fetch(
                    `https://api.mercadolibre.com/catalog_domains/${site}-${valueDominio}/categories`,
                );
                const data = await response.json();

                resultadosTotales.push({ sites, data });
            }
            setDatos(resultadosTotales);
        },
        [sites],
    );
    //a
    useEffect(() => {
        fetchCategoriaDominio(valueDominio);
    }, [fetchCategoriaDominio, valueDominio]);

    return (
        <div className="container-de-cards">
            <p>Valor obtenido en Top: {valueDominio}</p>
            <Cards uber={datos} sites={sites} />
        </div>
    );
}

export default Fetching;
