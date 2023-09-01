import { useEffect, useState } from 'react';
import './App.css';
import LoginSignUp from './components/AuthPages/LoginSignUp';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {
  const [isloggin,setLogin] = useState(false);

  const token = JSON.parse(localStorage.getItem('token'));
  if(token){
    setLogin(!isloggin);
  }
  return (
    <Router>
      <Routes>
        <Route path='/' element = {isloggin ? <LoginSignUp/> : <p>Welcom To Epence tracker</p>}>

        </Route>
      </Routes>
    </Router>
  )
}

export default App;
