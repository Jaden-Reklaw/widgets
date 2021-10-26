import React, {useState, useEffect} from "react";

const Convert = ({language, text}) => {
    useEffect(() => {
        console.log('language', language, 'text', text);
    }, [language, text])
    return (  
        <>
        
        </>
    );
}
 
export default Convert;