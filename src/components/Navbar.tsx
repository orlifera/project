import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {

    const location = useLocation();

    location.pathname === '/watchlist' ? console.log('watchlist') : console.log('not watchlist');
    return (
        <nav className='navbar'>
            <ul className='nav-list'>
                <li className='nav-li'><NavLink className='link nav-link' to="/">Home</NavLink></li>
                <li className='nav-li'><NavLink className='link nav-link' to="/gallery">Galleria</NavLink></li>
                <li className='nav-li'><NavLink className='link nav-link' to="/wish">Wishlist</NavLink></li>
                <li className='nav-li'><NavLink className='link nav-link' to="/watchlist">Watchlist</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navbar;