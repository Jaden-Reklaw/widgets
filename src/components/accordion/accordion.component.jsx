import React, { useState } from "react";

const Accordion = ({items}) => {
    //Hooks only go at the top
    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClick = (index) => {
        setActiveIndex(index);
    }

    const renderedItems = items.map((item, index) => {
        const isActive = index === activeIndex ? 'active' : '';
        return( 
            <React.Fragment key={index}>
                <div 
                    className={`title ${isActive}`}
                    onClick={() => onTitleClick(index)}
                >
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`content ${isActive}`}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        );
    });
    
    return (
        <>
            <h1>Accordion Component</h1>
            <div className="ui styled accordion">
                {renderedItems}
            </div>
        </>
    );
}
 
export default Accordion;