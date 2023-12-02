import Contact from "./components/Contact";
import cat from "./images/cat.jpg";
import "./style.css";   
function App() {
    return (
        <>
            < Contact
                img={cat}
                name="Mr. Whiskerson"
                phone="(212) 555-1234"
                email="taki1411@gmail.com"
            />
            < Contact
                img={cat}
                name="B"
                phone="2"
                email="B@gmail.com"
            />
            < Contact
                img={cat}
                name="C"
                phone="3"
                email="C@gmail.com"
            />
            < Contact
                img={cat}
                name="D"
                phone="4"
                email="D@gmail.com" />
        </>
    );
}   

export default App;