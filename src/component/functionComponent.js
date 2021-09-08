import React, { useState } from "react";

export default function TEST2 (){
const [var1,datasave] = useState("sadikin ");
const increment2=()=>{
    datasave(var1+"araf ");
}
return(
    <div>
        <h1>time {var1} </h1>
        <button onClick={increment2}>click to increase</button>
    </div>
)    
}