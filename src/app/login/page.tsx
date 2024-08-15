import React from 'react'
import style from "./login.module.css"

const page = () => {
  return (
    <>
    <div className={style.loginContainer}>
      <form action= {""} className={style.inputForm} >
    <h2 className={style.topText}>Login to Zikrabyte</h2>
        <input type='text' placeholder='Enter Your Username' required id='userName' className={style.inputs} />
        <input type='password' placeholder='Enter Password' required id='password' className={style.inputs} />
        <input type='submit' value={"Submit"} className={style.submitBtn}></input>
      </form>
    </div>
    </>
  )
}

export default page