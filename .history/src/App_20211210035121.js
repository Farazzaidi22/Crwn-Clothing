import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<HomePage/>}/>
        <Route path='/shop'   element={</>}
      </Routes>
    </div>
  );
}

export default App;
