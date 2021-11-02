import React from "react";

const Link = ({className, href, children}) => {
    const linkClicked = event => {
        //allow for command click
        if(event.metaKey || event.ctrlKey) {
            return;
        }

        event.preventDefault(); //stops the page from loading
        window.history.pushState({}, '', href);//change url with out refreshing the screen

        //each route could detect the url has changed
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    };
    return (
        <a 
            href={href} 
            className={className}
            onClick={linkClicked}
        >
            {children}
        </a>
    );
}
 
export default Link;