import Katie from "../images/Katie.png";
import star from "../images/star.png";
function Card(props) {
    return (
        <div className="card">
            <img    
                className="card-image"
                src={props.img}
                alt="Person image"
            />
            <div className="card-stats">
                <div>
                    <img
                        className="card-star"
                        src={star}
                        alt="star icon"
                    />
                    <span>{props.rating} <span className="grey">({props.reviewCount}) • {props.country}</span></span>
                </div>
                <div>
                    {props.title}
                </div>
                <div>
                    <b>From ${props.price}</b> / person
                </div>
            </div>
        </div>
    );
}
 
export default Card;