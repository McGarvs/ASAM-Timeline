import './styles/Event.css';

function Event(props) {
    console.log("EVENT-DATA", props.date, props.desc)
    return (
        <div className={"Event-Container"}>
            <h1>{props.date}</h1>
            <p>{props.desc}</p>
        </div>
    );
}

export default Event;