import { Link } from "react-router-dom"

function Header() {
    return (
        <header className='header'>
            <Link to="/" className="link"><h1 className='title'>This is a header </h1></Link>
        </header>
    )
}

export default Header