import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";
import "./style.css";

function App() {
    const cards = data.map(
        elem => < Card
            img={elem.img}
            rating={elem.rating}
            reviewCount={elem.reviewCount}
            country={elem.country}
            title={elem.title}
            price={elem.price}
        />
    );
    return (
        <>
            <Navbar />
            <Hero />
            <div className="card-list">
                {cards}
            </div>
        </>
    );
}

export default App;