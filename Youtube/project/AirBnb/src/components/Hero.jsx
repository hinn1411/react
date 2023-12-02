import grid_images from "../images/grid-images.png";

function Hero() {
    return (
        <section className="hero">
            <img
                src={grid_images}
                alt="Images"
                className="hero-image"
            />
                <h1 className="hero-header">Online Experiences</h1>
                <p className="hero-text">
                    Join unique interactive activities led by one-of-a-kind
                    hosts—all without leaving home.
                </p>
        </section>
    );
}

export default Hero;