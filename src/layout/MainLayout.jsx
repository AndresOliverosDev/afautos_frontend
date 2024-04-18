import user from './user.json';
import { Sidebar } from '../components/sidebar'

const MainLayout = ({ children }) => {
    return (
        <div className='h-full flex flex-col lg:flex-row gap-3 w-full'>
            <Sidebar user={user} />
            {children}
        </div>
    );
}
export default MainLayout;