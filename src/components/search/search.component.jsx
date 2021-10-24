import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
    const [term, setTerm] = useState('programming');
    const [debouncedTerm, setDebouncedTerm] = useState(term);
    const [results, setResults] = useState([]);
    
    //final throttling api algo with all dependencies of state
    useEffect(() => {
        //throttling api calls with setTimeout
        const timeoutId = setTimeout(() => {
            setDebouncedTerm(term);
        }, 1000);

        //clean up to cancel timeoutRequest
        return () => {
            clearTimeout(timeoutId);
        }
    }, [term]);

    //this useEffect only runs if the users stops typing
    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: debouncedTerm
                }
            })
            setResults(data.query.search);
        };
        search();
    }, [debouncedTerm]);

    //used to remove html tags
    const removeTags = (str) => {
        if ((str===null) || (str==='')){
            return false;
        } else {
            str = str.toString();
        }
            
        return str.replace( /(<([^>]+)>)/ig, '');
    }

    const renderResults = results.map((result) => {
        return(
            <div className="item" key={result.pageid}>
                <div className="right floated content">
                    <a 
                        href={`https://en.wikipedia.org?curid=${result.pageid}`} 
                        className="ui button"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Go
                    </a>
                </div>
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