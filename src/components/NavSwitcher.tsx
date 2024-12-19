
import { useLocation } from 'react-router-dom'
import WatchNav from './watchlist/WatchNav';
import Navbar from './Navbar';

const NavSwitcher: React.FC = () => {
    const location = useLocation();

    const locations = ['/watchlist', '/watchlist/watched', '/watchlist/add'];

    const isMovieDetails = /^\/movie\/.+$/.test(location.pathname);

    return (
        <>
            {locations.includes(location.pathname) || isMovieDetails ? <WatchNav /> : <Navbar />}
        </>
    )

}

export default NavSwitcher
