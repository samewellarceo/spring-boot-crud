import { API_BASE_URL } from 'api-config.js';
import axios from 'axios';

const Delete = ({ id, setItems }) => {
    const handleDelete = async () => {
        var deleteConfirmed = confirm("Are you sure you want to delete this item?");

        if (deleteConfirmed) {
            await axios.delete(`${API_BASE_URL}/api/items/${id}`);
            setItems(prevItems => prevItems.filter(item => item.id !== id));
        }
    }
    
    return (
        <>
            <button onClick={handleDelete} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
        </>
    );
}
 
export default Delete;