import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Index from './Pages/Index';
import Image1 from './Pages/Images/Image1';
import Images2 from './Pages/Images/Images2';
import Images3 from './Pages/Images/Images3';

function App() {
  return (
    <Router>
      <Index/>
      <Routes>
      <Route path='/Image1' element={<Image1/>}/>
      <Route path='/Image2' element={<Images2/>}/>
      <Route path='/Image3' element={<Images3/>}/>
      </Routes>
    </Router>
  
  );
}

export default App;
