import logo from './logo.svg';
import './App.css';
import { SongList, Calendar, Test } from './components/components';

function App() {
    return (
        <div className="App">
            <header className="App-header" id="header">
                <SongList/>
                {/* <Calendar/> */}
                {/* <Test/> */}
            </header>
        </div>
    );
}

export default App;
