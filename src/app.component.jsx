import React, {useState} from "react";
import { items } from "./items";
import { options } from "./options";
import Accordion from "./components/accordion/accordion.component";
import Search from "./components/search/search.component";
import Dropdown from "./components/dropdown/dropdown.component";
import Translate from "./components/translate/translate.component";
import Route from './components/route/route.component';
import Header from "./components/header/header.component";

const App = () => {
    const [selected, setSelected] = useState(options[0]);
    
    return(
        <>
            <Header />
            <h1>Widgets App</h1>
            <Route path="/">
                <Accordion items={items}/>
            </Route>
            <Route path="/search">
                <Search />
            </Route>
            <Route path="/dropdown">
                <Dropdown
                    label="Select a Color"
                    options={options} 
                    selected={selected}
                    onSelectedChange={setSelected}
                />
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
        </>
    );
}

export default App;