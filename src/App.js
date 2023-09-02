import { useContext} from 'react';
import './App.css';
import LoginSignUp from './components/AuthPages/LoginSignUp';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import AuthContext from './components/AuthContext/Auth-context';
import Complete from './components/AuthPages/Complete';
import EditDetails from './components/AuthPages/EditDetails';
import VerifyEmail from './components/AuthPages/VerifyEmail';
import ForgotPass from './components/AuthPages/ForgotPass';

function App() {
  const authCtx = useContext(AuthContext);
  const login = authCtx.isLoggedIN;
  console.log(login)
  return (
    <Router>
      <Routes>
        <Route path='/forgot' element = {<ForgotPass/>}></Route>
        <Route path='/' element = {!login ? <LoginSignUp/> : <HomePage/>}>
          <Route path= '/complete'  element = {<Complete/>}/>
          <Route path='/editDetails' element = {<EditDetails/>}/>
          <Route path='/verifyEmail' element = {<VerifyEmail/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App;
