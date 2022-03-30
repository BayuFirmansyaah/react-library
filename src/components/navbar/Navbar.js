import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <Link to='/'> 
                <h2 className="navbar-brand">Library's</h2>
            </Link>
            <div className="nav-link">
                <Link to="/">Home</Link>
                <Link to="/trending">Trending</Link>
                <Link to="/new-book">New Book</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;