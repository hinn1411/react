import facebook from "../images/facebook-icon.png";
import twitter from "../images/twitter-icon.png";
import instagram from "../images/instagram-icon.png";
import github from "../images/github-icon.png";

function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <img src={twitter} />
                <img src={facebook} />
                <img src={instagram} />
                <img src={github} />
            </div>
        </footer>
    );
}

export default Footer;