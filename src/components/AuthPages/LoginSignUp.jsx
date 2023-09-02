import {  useContext, useRef, useState } from "react"
import classes from "./Login.module.css";
import AuthContext from "../AuthContext/Auth-context";
const LoginSignUp = () => {

    const [login,setLogin] = useState(true);
     
    const emailRef = useRef();
    const passwordRef = useRef();

    const authCtx = useContext(AuthContext);

    const toggleHandler = () => {
        setLogin(!login);
    }
    const submitHandler2 = async (event) => {
        event.preventDefault();
        if(!emailRef.current.value || !passwordRef.current.value){
            alert("Please Enter All Details");
            return;
        }

        try{
            const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCJHhjWfvJsQgX9BVv3VbjxgZTJMV2_9rE',{
                method:'POST',
                body:JSON.stringify({
                    email:emailRef.current.value,
                    password:passwordRef.current.value,
                    returnSecureToken:true,
                }),
                headers:{
                    "Content-Type": "application/json",
                }
            });

            const data = await response.json();
            console.log('loginData' ,data);
            authCtx.token = data.idToken;
            authCtx.login(authCtx.token);

        }

        catch(error){
            console.log(error);
        }
    }

    const submitHandler = async (event) => {
        event.preventDefault();
        if(!emailRef.current.value || !passwordRef.current.value){
            alert('Please Enter all details');
            return;
        }
        try{
            const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCJHhjWfvJsQgX9BVv3VbjxgZTJMV2_9rE',{
                method:'POST',
                body:JSON.stringify({
                    email:emailRef.current.value,
                    password:passwordRef.current.value,
                    returnSecureToken:true,
                }),
                headers:{
                    "Content-Type": "application/json",
                }
            });

            const data = await response.json();
            console.log(data);

        }
        catch(error){
            console.log("Somthing went wrong in Api calls",error)
        }
    }
  
    return <form  onSubmit = {login ? submitHandler2 : submitHandler} className={classes.loginMain}>
        <div className={classes.forms}>
            <div className={classes.elelog}>
                <label>Enter Your Email</label>
                <input type="email" ref={emailRef}/>
            </div>

            <div className={classes.elelog}>
                <label>Your Password</label>
                <input type="password" ref={passwordRef}/>
            </div>


            <div className={classes.togglelogin} onClick={toggleHandler}>{login ? 'Create an Account' : 'Login to existing'}</div>
        </div>

        <div className={classes.loginbtn}>
            <button  type='submit'>{login ? 'Login' : 'Sign Up'}</button>
        </div>
        
    </form>
}

export default LoginSignUp