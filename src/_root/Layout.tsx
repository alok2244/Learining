import MenuBar from '@/components/MenuBar/MenuBar';
import NavigationMenuTop from '@/components/Nav/NavigationMenuTop';
import { Outlet } from 'react-router-dom';
import { Footer } from '@/components/footer';



const Layout = () => {
    return (
        <div className='w-full'>
            <NavigationMenuTop />
            <MenuBar />
            <Outlet /> {/* Render nested content */}
            <Footer />
        </div>
    );
}

export default Layout;