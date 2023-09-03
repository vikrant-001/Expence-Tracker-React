import { Fragment, useEffect, useRef, useState } from "react"
import classes from "./ExpenceForm.module.css"
const ExpenceForms = () => {
    const moneyRef = useRef('');
    const discriptionRef = useRef('');
    const cateRef = useRef('');

    const [userData , setUserData] = useState([]);
    const[changeState,setChangeSate] = useState(false);

    const submitHandler = async (event) => {
        event.preventDefault();
        if(!moneyRef || !discriptionRef || !cateRef){
            alert('please enter all the Data');
            return;
        }
        try{
            const response = await fetch('https://expecetracker-default-rtdb.firebaseio.com/Expence.json',{
                method:'POST',
                body:JSON.stringify({
                    moneySpent:moneyRef.current.value,
                    discription:discriptionRef.current.value,
                    category:cateRef.current.value,
                }),
                headers:{
                    'Content-Type': 'application/json' 
                },
            });
            const data = await response.json();
            console.log("Data Added" ,data);
            setChangeSate(!changeState);
            
        }

        catch(error){
            console.log(error);
            alert(error);
        }
    }

    const fetchDataHandler = async () =>{
        try{
            const response = await fetch('https://expecetracker-default-rtdb.firebaseio.com/Expence.json');
            const data = await response.json();
            console.log("user expence", data);

            let userExpence = Object.values(data);
            console.log(userExpence);
            setUserData(userExpence)
            
        }
        catch(error){
            alert(error);
        }

    }
    useEffect(() => {
        fetchDataHandler()
    },[changeState])



    return (
        <Fragment>
        <form onSubmit={submitHandler} className={classes.fromcont}>
            <div className={classes.fromConte}>
                <div className= {classes.forms}>
                    <label>Money Spent</label>
                    <input type='text' ref={moneyRef}></input>
                </div>

                <div className= {classes.forms}>
                    <label>Discription</label>
                    <input type='text' ref={discriptionRef}></input>
                </div>

                <div className= {classes.forms}>
                    <label>Category</label>
                    <input type='text' ref={cateRef}></input>
                </div>

                <div className= {classes.forms}>
                    <button type='submit'>Add Expence</button>
                </div>
            </div>
        </form>
        <div className={classes.userCont}>
            {
                userData.map((value) => (
                    <div key={value.discription + 'a91'} className={classes.userValue}>
                        <p>{value.category}</p>
                        <p>{value.discription}</p>
                        <p>{value.moneySpent}</p>
                        <div className={classes.userBtn}>
                            <button>Edit</button>
                            <button>Delete</button>
                        </div>
                    </div>
                ))
            }
        </div>
        </Fragment>
        )
    
}

export default ExpenceForms