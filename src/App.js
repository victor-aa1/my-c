
import { Routes, Route } from 'react-router-dom';

import Navigation from './routes/Navbar/Nav-bar'
import Home from './routes/home/home-comp';
import Authentication from './routes/authentication/Authentication';
import Shop from './routes/shop/Shop'


const App =() => {
  
  return(
    
    <Routes>
      <Route path='/' element={<Navigation />}>
        
        <Route index element={<Home />}/>
        {/* displays def home comp when path is set to index */}
        
        <Route path='auth' element={<Authentication />} />
        <Route path='shop' element={<Shop />}/>
     </Route>
    </Routes>
    
  );
}

export default App;
