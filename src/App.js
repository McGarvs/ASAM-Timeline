import Events from './Events';
import data from './convert/data.json'
import './styles/App.css';

function App() {
    // console.log(data)
    return (
        <div>
            <h1>Asian American History (ASAM125) Timeline</h1>
            <Events data={data}/>
            <h1>By: Dylan McGarvey</h1>
        </div>
    );
}

export default App;
