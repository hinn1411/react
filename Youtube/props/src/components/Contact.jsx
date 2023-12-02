import React from "react";
import envelope from "../images/envelope.svg";
import phone from "../images/phone.svg";

function Contact(props) {
    return (
        <div className="contact-card">
            <img src={props.img}  />
            <h3>{props.name}</h3>
            <div className="info-group">
                <img src={phone} className="icon" />
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img src={envelope} className="icon"  />
                <p>{props.email}</p>
            </div>  
        </div>
    );
}

export default Contact;