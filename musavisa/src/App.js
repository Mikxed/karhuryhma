import logo from './logo.svg';
import './App.css';
import { SongList, Calendar } from './components/components';

function App() {
    return (
        <div className="App">
            <header className="App-header" id="header">
                {/* <SongList/> */}
                <Calendar/>
            </header>
        </div>
    );
}

export default App;
