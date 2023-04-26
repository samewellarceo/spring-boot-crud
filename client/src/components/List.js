import Link from "next/link";
import Delete from "./Delete";

const List = ({ isLoading, data, setItems }) => {
    return (
        <>
            {
                isLoading ? (
                <p className="text-lg">Loading...</p>
                ) : (
                    <>
                        <table className="table-auto w-full text-left">
                            <thead>
                                <tr className="bg-gray-800 text-white">
                                    <th className="px-4 py-2 text-center">ID</th>
                                    <th className="px-4 py-2 text-center">Name</th>
                                    <th className="px-4 py-2 text-center">Category</th>
                                    <th className="px-4 py-2 text-center">Quantity</th>
                                    <th className="px-4 py-2 text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map(element => (
                                    <tr key={element.id} className="bg-gray-100">
                                        <td className="border px-4 py-2 text-center">{element.id}</td>
                                        <td className="border px-4 py-2">{element.name}</td>
                                        <td className="border px-4 py-2 text-center">{element.category}</td>
                                        <td className="border px-4 py-2 text-center">{element.quantity}</td>
                                        <td className="border px-4 py-2 text-center">
                                            <Link 
                                                href={`/items/show?id=${element.id}`}
                                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                                            >Show</Link>
                                            <Link href={`/items/edit?id=${element.id}`}
                                                className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mr-2"
                                            >Edit</Link>
                                            <Delete id={element.id} setItems={setItems} />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <Link href={'/items/new'}>
                            <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-6 rounded">Create New</button>
                        </Link>
                    </>
                )
            }
        </>
    );
}
 
export default List;