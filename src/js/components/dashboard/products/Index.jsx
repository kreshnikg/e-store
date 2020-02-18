import React, {useState, useEffect} from 'react';
import axios from "axios";

export default function Index(props) {

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
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Emertimi</td>
                        <td>Brendi</td>
                        <td>Kategoria</td>
                        <td>sasia</td>
                        <td>Cmimi</td>
                    </tr>
                </thead>
                <tbody>
                {state.products.map(product => {
                    return (
                        <tr key={product.produkti_id}>
                            <td>{product.produkti_id}</td>
                            <td>{product.emertimi}</td>
                            <td>{product.brendi_id}</td>
                            <td>{product.kategoria_id}</td>
                            <td>{product.sasia}</td>
                            <td>{product.cmimi}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
}
