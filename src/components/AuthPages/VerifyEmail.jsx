import { useContext, useRef } from "react"
import AuthContext from "../AuthContext/Auth-context";
import classes from "./VerfiyEmail.module.css"

const VerifyEmail = () => {
    const otpRef = useRef();
    const authCtx = useContext(AuthContext);

    const sentOTPHandler = async (event) =>{
        event.preventDefault();
        try{
            const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyCJHhjWfvJsQgX9BVv3VbjxgZTJMV2_9rE',{
                method:'POST',
                body:JSON.stringify({
                    requestType:"VERIFY_EMAIL",
                    idToken:authCtx.token,
                }),
                headers:{
                    'Content-Type': 'application/json' 
                }
            });

            const data = await response.json();
            console.log('Otp Sent',data); 
        }

        catch(error){
            alert(error);
        }
    }

    const submitHandler = async (event) =>{
        event.preventDefault();
        try{
            const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCJHhjWfvJsQgX9BVv3VbjxgZTJMV2_9rE',{
                method:'POST',
                body:JSON.stringify({
                    oobCode:otpRef.current.value,
                }),
                headers:{
                    'Content-Type': 'application/json' 
                }
            });
            const data = await response.json();
            console.log('Email get verified',data);
        }
        catch(error){
            alert(error);
        }
    }
     
    return (<div className={classes.verifyMAin}>
        <button onClick={sentOTPHandler}>Verify Email</button>
        <form>
            <div>
                <label>Enter your OTP</label>
                <input type='text' ref={otpRef}></input>
            </div>
            
            <div>
                <button onClick={submitHandler}>Submit</button>
            </div>
        </form>
    </div>)
}

export default VerifyEmail;