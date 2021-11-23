import './styles/Events.css';

function Event(props) {
    if (props.source){
        console.log("SRC:", props.source);
    }
    return (
        <div className={(props.index % 2 === 0) ? "container left" : "container right"}>
            <div className={"date"}>{props.date}</div>
            <i className={"icon"}></i>
            <div className={"content"}>
                <h2>{props.desc}</h2>
                <p>{props.comment}</p>
                {props.source && <img src={"https://" + props.source}
                                      width="160" height="140"
                                      alt="This is bad alt text!" />}
            </div>
        </div>
    );
}

export default Event;