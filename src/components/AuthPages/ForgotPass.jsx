import { useRef } from "react"
import classes from "./Login.module.css"

const ForgotPass = () =>{
    const emailRef = useRef();
    const submitHandler = async () => {
        if(!emailRef.current.value){
            alert("enter Email");
            return;
        }

        try{
            const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyCJHhjWfvJsQgX9BVv3VbjxgZTJMV2_9rE',{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json' 
                },
                body:JSON.stringify({
                    requestType:"PASSWORD_RESET",
                    email:emailRef.current.value,
                })
                
            });
            const data = await response.json();
            console.log("respass link Sent",data);
        }

        catch(error){
            console.log(error);
        }
    }
    return (<form onSubmit={submitHandler} className={classes.loginMain}>
            <div className={classes.elelog}>
                <label>Email</label>
                <input type="email" ref={emailRef}></input>
            </div>
            <div className={classes.loginbtn}>
                <button type='submit' > Submit</button>
            </div>
            
    </form>)
}
export default ForgotPass