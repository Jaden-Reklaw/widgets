import React from "react";
import { items } from "./items";
import Accordion from "./components/accordion.component";
import Search from "./components/search.component";

const App = () => {
    return(
        <>
            <h1>Widgets App</h1>
            {/* <Accordion items={items} /> */}
            <Search />
        </>
    );
}

export default App;