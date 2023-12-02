import logo from "../images/logo.png"
function Navbar() {
    return (
        <nav>
            <img src={logo} alt="AirBnb logo"
            className="nav-logo"/>
        </nav>
    );
}

export default Navbar;

