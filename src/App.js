import Events from './Events';
import data from '../convert/data.json'
import './styles/App.css';

function App() {
  return (
    <div>
      <h1>Timeline</h1>
      <Events data={data}/>
    </div>
  );
}

export default App;
