import React, {useState, useEffect} from 'react';
import axios from "axios";

export default function Products(props) {

    const [state,setState] = useState({
        products: [],
        loader: true
    });
    useEffect(() => {
        const getData = () => {
            axios.get('/api/dashboard/products')
                .then((response) => {
                    setState({
                        products: response.data,
                        loader: false
                    })
                })
        };

        getData();
    }, []);

    return (
        <div>Products</div>
    )
}
