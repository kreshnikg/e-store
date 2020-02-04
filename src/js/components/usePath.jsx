import React, {useState, useEffect} from 'react';

export default function usePath(props) {

    const [path, setPath] = useState(window.location.pathname);
    const listenToPopstate = () => {
        setPath(window.location.pathname);
    };

    useEffect(() => {
        window.addEventListener("popstate",listenToPopstate);

        return () => window.removeEventListener("popstate",listenToPopstate);
    }, []);

    return path;
}
