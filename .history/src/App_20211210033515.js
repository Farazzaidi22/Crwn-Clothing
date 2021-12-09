import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopePage from './pages/shop/shope.component';
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' component={HomePage}></Route>
        <Route exact path='/' component={HomePage}></Route>
      </Routes>
      <HomePage/>
    </div>
  );
}

export default App;
