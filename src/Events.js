import './styles/Events.css';
import Event from "./Event";

function Events(props) {
    return (
        <div className={"timeline"}>
            {props.data.map((item, index) => <Event key={index}
                                                    index={index}
                                                    date={item.Date}
                                                    desc={item.Desc}
                                                    comment={item.Comment}
                                                    source={item.Source}/>)}
        </div>
    );
}

export default Events;