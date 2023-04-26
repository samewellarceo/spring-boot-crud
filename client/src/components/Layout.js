import Header from './Header';
import Footer from './Footer';

const Layout = ({children}) => {
    return (
        <div className="flex flex-col h-screen bg-gray-200">
            <Header/>
            <main className="flex-1 p-6">
                {children}
            </main>
            <Footer/>
        </div>
    );
}
 
export default Layout;