import { useState, useEffect } from 'react';
import { API_BASE_URL } from 'api-config.js';
import { useRouter } from 'next/router'
import Head from 'next/head';
import axios from 'axios';

import ItemForm from '../../components/ItemForm.js';

const EditPage = () => {
    const router = useRouter();
    const itemId = router.query.id;
    const [item, setItem] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        const fetchGet = async () => {
            try {
                const res = await axios.get(`${API_BASE_URL}/api/items/${itemId}`);
                setItem(res.data);
                setIsLoading(false);
            } catch (error) {
                console.error(error);
            }
        };

        fetchGet();
    }, [itemId]);


    return (
        <>
            <Head>
                <title>Edit Item</title>
            </Head>
            {isLoading ? (
                <p className="text-lg">Loading...</p>
            ) : (
                <div>
                    <h1 className="text-2xl font-bold py-3">Edit Page: </h1>
                    <ItemForm item={item}/>
                </div>
            )}
        </>
    )
}

export default EditPage
