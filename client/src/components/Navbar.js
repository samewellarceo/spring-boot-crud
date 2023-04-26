import { useRouter } from 'next/router';
import Link from 'next/link';

const Navbar = () => {
    const router = useRouter();
    const currentUrl = router.asPath;

    return (
        <nav className='class="bg-gray-800 p-2 flex'>
            <Link className={`font-medium mr-4 ${currentUrl == "/" ? "text-yellow-400" : "text-white"}`} href="/">Home</Link>
            <Link className={`font-medium mr-4 ${currentUrl == "/items" ? "text-yellow-400" : "text-white"}`} href="/items">Items</Link>
        </nav>
    );
}
// #10b981
export default Navbar;