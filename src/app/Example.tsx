"use client"
import React from 'react'
import { useContext } from 'react';
import { UserContext } from '../../context/userContext';

interface User{
    name:string;
    email:string;
}
const Example = () => {
    const context = useContext(UserContext);
    const user = context?.user as User | null;
  return (    <>
    <h2>User Profile</h2>
    {user && (
      <>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
      </>
    )}
  </>

  )
}

export default Example