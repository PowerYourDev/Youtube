import {FC} from "react"
import { useDispatch, useSelector } from "react-redux"

import { increment,decrement,updateValue } from "./redux/sliceReducers/changingValueSlice"


type state={
    value:{
        value:number
    }
    
}

// type propsName={
//    name:string
// }

type PassByValue=(value:number)=>void


const Value:FC = () => {
    const dispatch =useDispatch()

    const number= useSelector((state:state)=>state.value.value)

const more=()=>{
    dispatch(increment())
}

const less=()=>{
    dispatch(decrement())
}

const PassByValue:PassByValue=(value)=>{
    dispatch(updateValue(value))
}

  return (
    <div>value {number} ,

    <button onClick={more}>increment</button>

    <button onClick={less}>decrement</button>
     
    <button onClick={()=>PassByValue(5)}>decrement</button>

    </div>
  )
}

export default Value