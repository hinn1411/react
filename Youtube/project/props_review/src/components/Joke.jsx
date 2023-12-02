
function Joke(props) {
    return (
        <div className="joke">
            {props.setup && <div>setup: {props.setup}</div>}
            <div>punchline: {props.punchline}</div>
            <hr></hr>
        </div>
    );
}

export default Joke;