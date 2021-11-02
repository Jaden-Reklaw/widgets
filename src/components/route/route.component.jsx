import { useState, useEffect } from "react";

const Route = ({path, children}) => {
    //Route could update piece of state tracking the current page
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    //each route could detect the url has changed
    useEffect(() => {
        const onLocationChange = () => {
            setCurrentPath(window.location.pathname);
        };

        window.addEventListener('popstate', onLocationChange);

        return () => {
            window.removeEventListener('popstate', onLocationChange);
        };

    }, []);
    return currentPath === path ? children : null;
}
 
export default Route;