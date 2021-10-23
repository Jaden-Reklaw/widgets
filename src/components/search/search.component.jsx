import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
    console.log(results);
    
    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term
                }
            })
            setResults(data.query.search);
        };
        if(term) search();
    }, [term]);

    const removeTags = (str) => {
        if ((str===null) || (str===''))
        return false;
    else
        str = str.toString();
    return str.replace( /(<([^>]+)>)/ig, '');
    }

    const renderResults = results.map((result) => {
        return(
            <div className="item" key={result.pageid}>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    {removeTags(result.snippet)}
                </div>
            </div>
        );
    });

    return (
        <> 
            <h1>Search Component</h1>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input 
                        type="text" 
                        className="input"
                        onChange={event => setTerm(event.target.value)}
                        value={term} 
                    />
                </div>
            </div>
            <div className="ui celled list">
                {renderResults}
            </div>
        </>
    );
}
 
export default Search;