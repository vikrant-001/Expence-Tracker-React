import { Fragment, useContext, useEffect, useRef, useState } from "react";
import AuthContext from '../AuthContext/Auth-context' ;
import classes from "./EditDetails.module.css"

const EditDetails = () => {

    const authCtx = useContext(AuthContext)
    const [userData ,setUserData] = useState(null);
    console.log('user ',userData)

    const nameRef = useRef();
    const photoRef = useRef();

    const editHandler = (event) =>{
        event.preventDefault();
        nameRef.current.value = userData.displayName;
        photoRef.current.value = userData.photoUrl;
    }

    const saveHandler = async(event) => {
        event.preventDefault();
        if(!nameRef.current.value || !photoRef.current.value){
            alert("Enter All Data");
            return;
        }
        try{
            const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCJHhjWfvJsQgX9BVv3VbjxgZTJMV2_9rE',{
            method:'POST',
            body:JSON.stringify({
                idToken:authCtx.token,
                displayName:nameRef.current.value,
                photoUrl:photoRef.current.value,
                returnSecureToken:true,
            }),
            headers:{
                'Content-Type': 'application/json'
            }
            })

            const data = await response.json();
            console.log(data)

            console.log("Profile Updated" ,data);
        }

        catch(error){
            alert(error);
        }
    }

    const fetchUserData = async() =>{
        try{
            const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyCJHhjWfvJsQgX9BVv3VbjxgZTJMV2_9rE',{
            method:'POST',
            body:JSON.stringify({
                idToken:authCtx.token
            }),
            headers:{
                'Content-Type': 'application/json'
            }
            });
            const data = await response.json();
            setUserData(data.users[0]);
            console.log("UserData",data);
        } 

        catch(error){
            alert(error);
        }
    }

    useEffect(() => {
        fetchUserData();
    },[]);

    if(userData === null){
        return;
    }
    console.log(useState.email);

   


    return (<Fragment>
        <div className={classes.mainUser}>
            <p className={classes.userEmail}>{`Email : ${userData.email}`}</p>
            <p className={classes.userName}>{`Name : ${userData.displayName}`}</p>
            <p className={classes.userPhoto}>{`Photo : ${userData.photoUrl}`}</p>
            
            <form>
                <div className={classes.userinputs}>
                    <label>Name</label>
                    <input type="text" ref={nameRef}></input>

                    <label>Photo Url</label>
                    <input type="text" ref={photoRef}></input>
                </div>

                <div className={classes.userBtn}>
                    <button onClick={editHandler}>Edit</button>
                    <button onClick={saveHandler}>Save</button>
                </div>
                 
            </form>
            </div>
        </Fragment>
    )
}

export default EditDetails;