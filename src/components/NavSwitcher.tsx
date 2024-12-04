import React from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './Navbar';
import WatchNav from './watchlist/WatchNav';

const NavSwitcher: React.FC = () => {

    const location = useLocation();

    const locations: string[] = ['/watchlist', '/watchlist/watched', '/watchlist/add']

    return (
        <>
            {locations.includes(location.pathname) ? <WatchNav /> : <Navbar />}
        </>
    )
}

export default NavSwitcher
