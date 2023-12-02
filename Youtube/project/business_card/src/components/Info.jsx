import Avatar from "./../images/avatar.png";
import Boji from "./../images/boji.jpg"
import Facebook from "./../images/facebook.svg";
import Instagram from "./../images/instagram.svg";
function About() {
    return (
        <header>
            <img
                src={Boji}
                width={317}
                height={317}
                
            />
            <h2 className="name">Tuấn Hiền</h2>
            <h5 className="job">CS Student</h5>
            <h6 className="site">0378464400</h6>
            <div className="contact">
                <div className="facebook">
                    <embed
                        src={Facebook}
                        width={20}
                        height={20}
                    />
                    <h6>FaceBook</h6>
                </div>
                
                <div className="instagram">
                    <embed
                        src={Instagram}
                        width={20}
                        height={22}
                    />
                    <h6>Instagram</h6>  
                </div>
            </div>
        </header>
    );
}

export default About;