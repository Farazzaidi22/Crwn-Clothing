import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom'


function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home}></Route>
      </Switch>
      <HomePage/>
    </div>
  );
}

export default App;
