import { useContext, useRef } from "react"
import AuthContext from "../AuthContext/Auth-context"
import classes from "./Complete.module.css"

const Complete = () => {
    const nameRef = useRef();
    const urlRef = useRef();

    const authCtx = useContext(AuthContext);
    const  submitHandler = async (event) => {
        event.preventDefault();
        if(!nameRef.current.value || !urlRef.current.value){
            alert("Enter All Data");
            return;
        }
        try{
            const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCJHhjWfvJsQgX9BVv3VbjxgZTJMV2_9rE',{
            method:'POST',
            body:JSON.stringify({
                idToken:authCtx.token,
                displayName:nameRef.current.value,
                photoUrl:urlRef.current.value,
                returnSecureToken:true,
            }),
            headers:{
                'Content-Type': 'application/json'
            }
            })

            const data = await response.json();
            console.log(data)

            alert("Profile Updated" ,data);
        }

        catch(error){
            alert(error);
        }
    }

    return (<form onSubmit={submitHandler} className={classes.copleteHead}>
        <div className={classes.compEle}>
            <label>Enter Your Name</label>
            <input type="text" ref={nameRef}/>
        </div>
        <div className={classes.compEle}>
            <label>Photo URL</label>
            <input type="text" ref={urlRef}/>
        </div>

        <button type='submit'>Submit</button>
        
    </form>)
}

export default Complete;