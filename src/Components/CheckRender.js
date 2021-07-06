import { useQuery } from "@apollo/client";
import { useState, useRef, useMemo}  from "react";
import { GET_ONE_USER } from "../query/user";



export const CheckRender = () => {
  const [state, setState] = useState(0)
  const [state2, setState2] = useState(1);
  const {data, loading, error, refetch} = useQuery(GET_ONE_USER, {
    variables:{
      id: state2
    }
  })
 
  const renders = useRef(0);
  console.log(data)
  console.log('render')
 
  const getUser = async () => {
    await setState2(() => state2+1)
  }
  
  return (
    <div>
      <h1>Renders: {renders.current++}</h1>
      <label>Count: {state}</label>
      <button onClick={() => {setState(state => state +1)}}>Counter state</button>
      <br></br>
      <label>Count: {state2}</label>
      <button onClick={() => {setState2(state2 => state2 +1)}}  >Counter state</button>
      <label>{!loading ? data.getUser.username : "Loading"}</label>
      <button onClick={() => getUser()} >Get User</button>
    </div>
  )
}
