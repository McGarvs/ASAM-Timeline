import './styles/Events.css';
import Event from "./Event";

function Events(props) {
    return (
        <div className={"EventList-Container"}>
            {props.data.map((item, index) => <Event key={index} date={item.Date} desc={item.Desc} comment={item.Comment}/>)}
        </div>
    );
}

export default Events;