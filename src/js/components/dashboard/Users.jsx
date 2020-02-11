import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function Users(props) {
    const [state,setState] = useState({
        users: [],
        loader: true
    });
    useEffect(() => {
        const getData = () => {
            axios.get('/api/users')
                .then((response) => {
                    setState({
                        users: response.data,
                        loader: false
                    })
                })
        };

        getData();
    }, []);

    return (
        <div>Users</div>
    )
}
