import React , {useState , useContext} from "react"
import { ThemeContext } from "./App";
export default function CounterHooks({initialCount}){
    const [state, setState] = useState({count : initialCount}) // it return array of 1st value state and secound function setState
   // state will contain an object which is having count.
   const style  = useContext(ThemeContext)
   
    // console.log(useContext(ThemeContext));
//    console.log(setState);
   console.log("Render Counterhooks");
   
    return(
        
        <>
            <button style={style} onClick={() => setState(prevState => {return {count : prevState.count -1}})}>-</button>
            <p>{state.count}</p>
            <button style={style} onClick={() => setState(prevState => {return {count : prevState.count +1}})}>+</button>

        </>
    )
}

// export default function CounterHooks({initialCount}){
    
//     const [count, setCount] = useState(initialCount) // it return array of 1st value state and secound function setState
   
   
   
//     return(
//         <>
//             <br></br>
//             <button onClick={() => setCount(prevState => prevState -1)}>-</button>
//             <p>{count}</p>
//             <button onClick={() => setCount(prevState => prevState +1)}>+</button>

//         </>
//     )
// }