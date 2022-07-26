import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Pricing from './Components/Header/Pricing/Pricing';

function App() {
    return (
        <div className='App'>
            <Header></Header>
            <h1 className='text-6xl'>welcome</h1>
            <Pricing></Pricing>
        </div>
    );
}

export default App;
