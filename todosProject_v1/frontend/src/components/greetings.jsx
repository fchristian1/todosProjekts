import React from "react";
import { isUserLogin } from "../context/authentication";
import { DEBUG } from "../context/config";

function Greetings() {
    return <div className={"w-full"}>{isUserLogin() ? <h1>Welcome</h1> : <h1>Not logged in</h1>}</div>;
}

export default Greetings;
