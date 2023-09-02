import { useContext} from 'react';
import './App.css';
import LoginSignUp from './components/AuthPages/LoginSignUp';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import AuthContext from './components/AuthContext/Auth-context';
import Complete from './components/AuthPages/Complete';

function App() {
  const authCtx = useContext(AuthContext);
  const login = authCtx.isLoggedIN;
  console.log(login)
  return (
    <Router>
      <Routes>
        <Route path='/' element = {!login ? <LoginSignUp/> : <HomePage/>}>
          <Route path= '/complete'  element = {<Complete/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App;
