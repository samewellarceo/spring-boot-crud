import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import Link from "next/link";
import axios from 'axios';
import Head from "next/head";

import { API_BASE_URL } from 'api-config.js';

const Item = () => {
    const router = useRouter();
    const itemId = router.query.id;
    const [item, setItem] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchGet = async () => {
            try {
                const res = await axios.get(`${API_BASE_URL}/api/items/${itemId}`);
                setItem(res.data);
            } catch (error) {
                console.error(error);
                setIsLoading(true);
            }
        };

        fetchGet();
    }, [itemId]);

    return (
        <>
            <Head>
                <title>Item Detail</title>
            </Head>
            <div className="bg-white p-4 rounded-lg shadow-md">
                {isLoading ? (
                    <p className="text-gray-600 font-medium">Loading...</p>
                ) : (
                    <div>
                        <h1 className="text-2xl font-medium">Item Details</h1>
                        <p className="text-gray-600">Item Name: <strong>{item.name}</strong></p>
                        <p className="text-gray-600">Category: <strong>{item.category}</strong></p>
                        <p className="text-gray-600">Quantity: <strong>{item.quantity}</strong></p>
                        <Link href={'/items'}>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-6 rounded">Back</button>
                        </Link>
                    </div>
                )}
            </div>
        </>
    );
}
 
export default Item;