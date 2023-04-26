import { useState, useEffect } from 'react';
import { API_BASE_URL } from 'api-config.js';
import Head from 'next/head.js';
import Axios from 'axios';

import List from '../../components/List.js';

const ItemsList = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() => {
        const fetchGet = async () => {
            try {
                const res = await Axios.get(`${API_BASE_URL}/api/items`);
                setItems(res.data);
            } catch (error) {
                console.log(error);
                setIsLoading(true);
            }
        };

        fetchGet();
    }, []);

    return (
        <>
            <Head>
                <title>Items List Page</title>
            </Head>
            <h1 className="text-2xl font-bold py-4 text-center">List of Items</h1>
            <List isLoading={isLoading} data={items} setItems={setItems} />
        </>
    );
}
 
export default ItemsList;