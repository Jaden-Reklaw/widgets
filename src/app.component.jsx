import React, {useState} from "react";
import { items } from "./items";
import { options } from "./options";
import Accordion from "./components/accordion/accordion.component";
import Search from "./components/search/search.component";
import Dropdown from "./components/dropdown/dropdown.component";

const App = () => {
    const [selected, setSelected] = useState(options[0]);

    return(
        <>
            <h1>Widgets App</h1>
            {/* <Accordion items={items} /> */}
            {/* <Search /> */}
            <Dropdown 
                selected={selected}
                onSelectedChange={setSelected}
                options={options}
            />
        </>
    );
}

export default App;