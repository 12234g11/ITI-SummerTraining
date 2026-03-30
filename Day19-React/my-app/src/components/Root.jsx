import React, { useState } from 'react'
import Form from './Form';
import Show from './Show';
export default function Root() {
    const[data,setUserData]=useState([]);
    const setDataFromFormToRoot = (newUser)=>{
      setUserData([...data, newUser]);
    }
    // console.log(data);
  return (
    <>
        <Form setDataFromFormToRoot={setDataFromFormToRoot}></Form>
        <Show finalUserData={data}></Show>
    </>
  )
}
