import React, { useState } from 'react';
import Dropdown from '../dropdown/dropdown.component';
import { translateOptions } from '../../translateOptions';
import Convert from '../convert/convert.component';

const Translate = () => {
    const [language, setLanguage] = useState(translateOptions[0]);
    const [text, setText] = useState('');

    return (
        <>
            <h1>Translate Component</h1>
            <div className="ui form">
                <div className="field">
                    <label>Enter Text</label>
                    <input type="text" onChange={(e) => setText(e.target.value)} />
                </div>
            </div>
            <Dropdown 
                options={translateOptions}
                selected={language}
                onSelectedChange={setLanguage}
            />
            <hr />
            <h3 className="ui header">Output</h3>
            <Convert text={text} language={language}/>
        </>
    );
}
 
export default Translate;