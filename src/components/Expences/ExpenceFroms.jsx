import { useRef } from "react"
import classes from "./ExpenceForm.module.css"
const ExpenceForms = () => {
    const moneyRef = useRef();
    const discriptionRef = useRef();
    const cateRef = useRef();

    const submitHandler = () => {

    }
    return (
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
                    <button type='submit'>Add Product</button>
                </div>
            </div>
        </form>)
    
}

export default ExpenceForms