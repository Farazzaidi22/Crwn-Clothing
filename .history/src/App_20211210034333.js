import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' component={HomePage}></Route>
        <Route path='/' component={ShopPage}></Route>
      </Routes>
    </div>
  );
}

export default App;
