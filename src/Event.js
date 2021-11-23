import './styles/Events.css';

function Event(props) {
    // console.log("EVENT-DATA", props.date, props.desc)
    return (
        <div className={(props.index % 2 === 0) ? "container right" : "container left"}>
            <h2>{props.date}</h2>
            <p>{props.desc}</p>
        </div>
    );
}

export default Event;