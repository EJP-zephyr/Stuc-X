import './index.css';
import Routing from './components/Routing';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </div>  
  )
}

export default App;
