import './App.css'
import Banner from './components/Banner/Banner';
import NavBar from './components/navbar/NavBar';
import RowPost from './components/RowPost/RowPost';
import { originals,actions } from './urls';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title={'Netflix Orginals'}/>
      <RowPost url={actions} title={'Actions'} isSmall/>
    </div>
  );
}

export default App;
