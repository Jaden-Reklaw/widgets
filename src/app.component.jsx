import React, {useState} from "react";
import { items } from "./items";
import { options } from "./options";
import Accordion from "./components/accordion/accordion.component";
import Search from "./components/search/search.component";
import Dropdown from "./components/dropdown/dropdown.component";
import Translate from "./components/translate/translate.component";

const App = () => {
    const [selected, setSelected] = useState(options[0]);
    const [showDropdown, setShowDropdown] = useState(true);
    return(
        <>
            <h1>Widgets App</h1>
            {/* <Accordion items={items} /> */}
            {/* <Search /> */}
            {/* <button
                onClick={() => setShowDropdown(!showDropdown)}
            >
                Toggle Dropdown
            </button>
            {showDropdown ?
                <Dropdown 
                    selected={selected}
                    onSelectedChange={setSelected}
                    options={options}
                /> : null
            } */}
            <Translate />
        </>
    );
}

export default App;