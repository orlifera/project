import React from 'react'
import { useLocation } from 'react-router-dom'
import MobileNav from './MobileNav';
import MobileWatchNav from './watchlist/MobileWatchNav';

const MobileNavSwitcher: React.FC = () => {

    const location = useLocation();

    const locations: string[] = ['/watchlist', '/watchlist/watched', '/watchlist/add']
    return (
        <>
            {locations.includes(location.pathname) ? <MobileWatchNav /> : <MobileNav />}
        </>
    )
}

export default MobileNavSwitcher
