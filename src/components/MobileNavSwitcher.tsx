
import { useLocation } from 'react-router-dom'
import MobileWatchNav from './watchlist/MobileWatchNav';
import MobileNav from './MobileNav';

const NavSwitcher: React.FC = () => {
    const location = useLocation();

    const locations = ['/watchlist', '/watchlist/watched', '/watchlist/add'];

    const isMovieDetails = /^\/movie\/.+$/.test(location.pathname);

    return (
        <>
            {locations.includes(location.pathname) || isMovieDetails ? <MobileWatchNav /> : <MobileNav />}
        </>
    )

}

export default NavSwitcher
