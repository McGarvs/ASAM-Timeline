import './styles/Events.css';

function Event(props) {
    // console.log("EVENT-DATA", props.date, props.desc)
    return (
        <div className={(props.index % 2 === 0) ? "container left" : "container right"}>
            <div className={"date"}>{props.date}</div>
            <i className={"icon"}></i>
            <div className={"content"}>
                <h2>{props.desc}</h2>
                <p>{props.comment}</p>
            </div>

        </div>
    );
}

export default Event;