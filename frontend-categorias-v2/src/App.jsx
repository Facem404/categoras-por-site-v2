import Top from './components/Top';
import Fetching from './components/Fetching';
import Foot from './components/Foot';
import { useState } from 'react';

function App() {
    const [valueDominio, setValueDominio] = useState(null);
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const handleValueDominio = (value) => {
        setValueDominio(value);
    };

    return (
        <div className={`main-wrapper ${darkMode ? 'dark-mode' : ''}`}>
            <Top
                onValueDominio={handleValueDominio}
                darkMode={darkMode}
                toggleDarkMode={toggleDarkMode}
            />
            <Fetching valueDominio={valueDominio} />
            <Foot />
        </div>
    );
}

export default App;
