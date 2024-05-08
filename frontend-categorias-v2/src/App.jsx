import Top from './components/Top';
import Fetching from './components/Fetching';
import Foot from './components/Foot';
import { useState } from 'react';

function App() {
    const [valueDominio, setValueDominio] = useState(null);

    const handleValueDominio = (value) => {
        setValueDominio(value);
    };

    return (
        <div className="main-wrapper">
            <Top onValueDominio={handleValueDominio} />
            <Fetching valueDominio={valueDominio} />
            <Foot />
        </div>
    );
}

export default App;
