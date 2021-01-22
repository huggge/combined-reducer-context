import React from "react";
import { useGlobalState } from "./state/GlobalContext";

const ComponentC = () => {
    const globalState = useGlobalState();

    console.log("Component C re-render");

    return <div>ComponentC</div>;
};

export default ComponentC;


