
import './App.css';
import Luxury from './Luxury';
import Sedans from './Sedans';
import Suvs from './Suvs';

function App() {
  return (
    <div className="App">
        <div className="container">
          
               <Sedans/>
              <Suvs />
              <Luxury /> 
        </div> 
    </div>
    
  );
}

export default App;
