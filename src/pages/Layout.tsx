import { Outlet } from 'react-router-dom';
import Navigation from '../components/common/Navigation';
import Footer from '../components/common/Footer';

function Layout() {
    return (
        <div style={{ backgroundColor: '#000000' }} className="text-white min-h-screen">
            <Navigation />
            <Outlet />
            <Footer />
        </div>
    );
}

export default Layout;