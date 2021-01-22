import React from 'react'
import { useDispatch } from "./state/GlobalContext";
import { NUMBERS_CONTEXT, PERSON_CONTEXT } from './state/reducers';

const ComponentB = () => {
    const dispatch = useDispatch();

    console.log("Component B re-render")

    const changeAge = (age) => {
        dispatch({ type: NUMBERS_CONTEXT.SET_AGE, payload: { age: age}})
    }

    return (
        <div>
           ComponentB 
            <button onClick={() => changeAge(1337)}>Change age</button>
        </div>
    )
}

export default ComponentB
