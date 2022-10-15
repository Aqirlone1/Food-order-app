import React, {useState} from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from '../UI/Button'
import ErrorModel from "../UI/ErrorModel";

const AddUser = props => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredUserAge, setEnteredUserAge] = useState('');
    const [error, setError] = useState();

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };
    const ageChangeHandler = (event) => {
        setEnteredUserAge(event.target.value);
    };


    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredUserAge.trim().length === 0) {
            setError({
                title: "invalid Name/Age",
                message: "please enter a valid name and age (non-empty values)"
            });
            return;
        }
        if (+enteredUserAge < 1) {
            setError({
                title: "invalid Age",
                message: "please enter a valid age (positive value)"
            });
            setEnteredUserAge("");
            return;
        }

        function isNumber(str) {
            if (str.trim() === '') {
                return false;
            }

            return !isNaN(str);
        }

        if (isNumber(enteredUsername)) {
            setError({
                title: "invalid Name",
                message: "please enter a valid Name"
            });
            setEnteredUsername("");
            return;
        }
        // console.log(enteredUsername,enteredUserAge);
        props.onAddUser(enteredUsername, enteredUserAge);
        setEnteredUserAge("");
        setEnteredUsername("");
    };
    const errorHandler =props =>{
        setError(null);
    };

    return (
        <div>
            {error && <ErrorModel onConfirm={errorHandler} title={error.title} message={error.message}/>}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor='username'>Username</label>
                    <input value={enteredUsername} onChange={usernameChangeHandler} id="username" type='text'/>
                    <label htmlFor='age'>Age</label>
                    <input value={enteredUserAge} onChange={ageChangeHandler} id="age" type='number'/>
                    <Button type='submit'>Add user</Button>
                </form>
            </Card>
        </div>

    );

};
export default AddUser;