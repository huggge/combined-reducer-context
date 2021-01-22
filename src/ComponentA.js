import React from "react";
import { useGlobalState } from "./state/GlobalContext";
import {NUMBERS_CONTEXT, PERSON_CONTEXT} from "./state/reducers"

const ComponentA = () => {
    const globalState = useGlobalState();
    
    console.log("Component A re-render")

    return <div>Component A
        <button onClick={() => console.log(globalState)}>Log global state</button>
    </div>;
};

export default ComponentA;
