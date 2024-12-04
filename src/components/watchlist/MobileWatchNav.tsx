import { NavLink } from 'react-router-dom';

const MobileWatchNav = () => {
    return (
        <nav id='mobile-nav' className='navbar'>
            <ul className='nav-list'>
                <li className='nav-li'>
                    <NavLink className='link nav-link' to="/" end>
                        Home
                    </NavLink>
                </li>
                <li className='nav-li'>
                    <NavLink className='link nav-link' to="/watchlist" end>
                        Da Vedere
                    </NavLink>
                </li>
                <li className='nav-li'>
                    <NavLink className='link nav-link' to="/watchlist/watched" end>
                        Già visti
                    </NavLink>
                </li>
                <li className='nav-li'>
                    <NavLink className='link nav-link btn' to="/watchlist/add" end>
                        Aggiungi
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default MobileWatchNav;