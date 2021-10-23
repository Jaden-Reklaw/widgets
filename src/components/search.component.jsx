import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
    console.log(results);
    //used for componentDidMount
    // useEffect(() => {
    //     console.log('running useEffect componentDidMount');
    // }, []);

    //used for componentDidUpdate
    // useEffect(() => {
    //     console.log('running useEffect componentDidUpdate');
    // });

    //used for componentDidUpdate based on data change

    // useEffect(() => {
    //     console.log('running useEffect componentDidUpdate on Term change');
    // }, [term]);

    //method 1 to use async request
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

    //method 2 immediately envoke with () after the function
    // useEffect(() => {
    //     (async () => {
    //         await axios.get("dlkfja")
    //     })();
    // }, [term]);

    //method 3 simple then
    // useEffect(() => {
    //     axios.get("djkfskjh").then(response => {
    //         console.log(response.data)
    //     });
    // }, [term]);

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
        </>
    );
}
 
export default Search;