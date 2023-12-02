import Joke from "./src/components/Joke.jsx";
import jokesData from "./jokesData";
function App() {
    const jokesElem = jokesData.map(joke =>
        <Joke setup={joke.setup} punchline={joke.punchline} />);
    return (
        <div>
            {jokesElem}
        </div>
    );
}

export default App;