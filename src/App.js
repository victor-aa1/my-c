
import { Routes, Route } from 'react-router-dom';

import Navigation from './routes/Navbar/Nav-bar'
import Home from './routes/home/home-comp';
import Authentication from './routes/authentication/Authentication';

const Shop = ()=> {
  return <h1>Shop page</h1>;
}

const App =() => {
  
  return(
    
    <Routes>
      <Route path='/' element={<Navigation />}>
        
        <Route index element={<Home />}/>
        {/* displays def home comp when path is set to index */}
        <Route path='shop' element={<Shop />}/>
        <Route path='auth' element={<Authentication />} />
     </Route>
    </Routes>
    
  );
}

export default App;
