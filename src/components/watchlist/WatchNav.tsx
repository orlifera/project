import React from 'react'
import { NavLink } from 'react-router-dom'

const WatchNav: React.FC = () => {
    return (
        <nav className='navbar'>
            <ul className='nav-list'>
                <li className='nav-li'>
                    <NavLink className='link nav-link' to='/' end>Home</NavLink>
                </li>
                <li className='nav-li'>
                    <NavLink className='link nav-link' to='/watchlist' end>Watchlist</NavLink>
                </li>
                <li className='nav-li'>
                    <NavLink className='link nav-link' to='/watchlist/watched' end>Watched</NavLink>
                </li>
                <li className='nav-li'>
                    <NavLink className='link nav-link ' to='/watchlist/add' end>Add Movie</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default WatchNav
