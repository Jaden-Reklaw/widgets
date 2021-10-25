import React, {useState} from "react";

const Dropdown = ({options, selected, onSelectedChange}) => {
    const [open, setopen] = useState(false)

    const renderedOptions = options.map((option, index) => {
        if(option.value === selected.value) return null;
        return (
            <div 
                key={index} 
                className="item"
                onClick={() => onSelectedChange(option)}
            >
                {option.label}
            </div>
        );
    });

    return (
        <>
            <div className="ui form">
                <div className="field">
                    <label className="label">Select a Color</label>
                    <div 
                        onClick={() => setopen(!open)} 
                        className={`ui selection dropdown ${open ? 'visible active' : ''}`}
                    >
                        <i className="dropdown icon"></i>
                        <div className="text">{selected.label}</div>
                        <div className={`menu ${open ? 'visible transition' : ''}`}>
                            {renderedOptions}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Dropdown;