"use client";
import Axios from "axios";
import React, { ChangeEvent, FormEvent, useState } from "react";
import style from "./signup.module.css";
import { useRouter } from "next/navigation";

interface User {
    email: string;
    username: string;
    password: string;
}

const SignUpPage: React.FC = () => {
    const [BtnText, setBtnText] = useState("Sign Up");
    const router = useRouter();
    const [alertDiv, setAlertDiv] = useState("alertHider");
    const [user, setUser] = useState<User>({
        email: "",
        username: "",
        password: "",
    });
    
    const onSignup = async (event: FormEvent) => {
        event.preventDefault();
        setBtnText("Processing...")
        try {
            const response = await Axios.post("/api/users/signup", user);
            router.push("/login");
            
        } 
        catch (error:any) {
            setBtnText("Sign Up")
            setAlertDiv("failAlertDiv");
            console.error("Error occurred on signup page:", error.message);
        }
    };
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setAlertDiv("alertHider");
        const { name, value } = event.target;
        setUser(prevUser => ({ ...prevUser, [name]: value }));
    };

    return (
    <>
        <div className={`${style} ${style[alertDiv]}`}>
        <h5>Please Enter Unique userName and Email</h5>
        </div> 
        <div className={style.container}>
             <form onSubmit={onSignup} className={style.signForm}>
             <h1 className={style.topText}>Sign Up</h1>
                <div className={style.inputFieldWrapper}>
                        <div className={style.inputField}>
                        <label htmlFor='username' className={style.inputLabel}>USERNAME</label>
                        <input id="username" name="username" placeholder="Enter your username" required type="text" className={style.inputs} value={user.username} onChange={handleInputChange}/>
                        </div>
                        <div className={style.inputField}>
                        <label htmlFor='email' className={style.inputLabel}>Email</label>
                        <input id="email" name="email" placeholder="janedoe@email.com" required type="email" className={style.inputs} value={user.email} onChange={handleInputChange}/>
                        </div>
                        <div className={style.inputField}>
                        <label htmlFor='password' className={style.inputLabel}>PASSWORD</label>
                        <input id="password" name="password" placeholder="Password" required type="password" className={style.inputs} value={user.password} onChange={handleInputChange} />
                        </div>
                        <input type="submit" value={BtnText} className={style.submitBtn} />
                    </div>
                    <a href="/login">Already a Member</a>
            </form>
        </div>
    </>
    );
}

export default SignUpPage;
