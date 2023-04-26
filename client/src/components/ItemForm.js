import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Link from 'next/link';

import { API_BASE_URL } from 'api-config.js';

const ItemForm = ({ item = {} }) => {
    const router = useRouter();
    const [name, setName] = useState(item.name || '');
    const [category, setCategory] = useState(item.category || '');
    const [quantity, setQuantity] = useState(item.quantity || '');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const data = { name, category, quantity };
            const url = item.id
                ? `${API_BASE_URL}/api/items/${item.id}`
                : `${API_BASE_URL}/api/items`;

            await axios[item.id ? 'put' : 'post'](url, data);
            
            router.push("/items");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form className="bg-white p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
            <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name:</label>
                <input
                className="border border-gray-400 p-2 w-full"
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label htmlFor="category" className="block text-gray-700 font-medium mb-2">Category:</label>
                <input
                className="border border-gray-400 p-2 w-full"
                type="text"
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label htmlFor="quantity" className="block text-gray-700 font-medium mb-2">Quantity:</label>
                <input
                className="border border-gray-400 p-2 w-full"
                type="number"
                id="quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                />
            </div>
            <button type="submit" className="bg-green-500 hover:bg-blue-600 text-white font-bold mr-2 py-2 px-4 rounded">Save</button>
            <Link href={'/items'}>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold mr-2 py-2 px-4 rounded">Back</button>
            </Link>
        </form>
    );
};

export default ItemForm;