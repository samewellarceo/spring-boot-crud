import ItemForm from '../../components/ItemForm';
import Head from 'next/head';

const CreateItem = () => {
    return (
        <>
            <Head>
                <title>Create Item Page</title>
            </Head>
            <h1 className="text-2xl font-bold py-4">Create Item Page</h1>
            <ItemForm />
        </>
    );

}
 
export default CreateItem;