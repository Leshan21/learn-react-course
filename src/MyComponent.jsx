import React, {useState} from 'react'

function MyComponent(){
    const [name, setName] = useState("Guest");

    const clickHandeler = () => {
        setName("Leshan");
    }


    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={clickHandeler}>click me</button>

        </div>
    );
}

export default MyComponent