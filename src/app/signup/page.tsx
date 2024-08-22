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
    const router = useRouter();
    const [alertDiv, setAlertDiv] = useState("alertHider");
    const [user, setUser] = useState<User>({
        email: "",
        username: "",
        password: "",
    });
    
    const onSignup = async (event: FormEvent) => {
        event.preventDefault();
        try {
            const response = await Axios.post("/api/users/signup", user);
            router.push("/login");
            
        } 
        catch (error:any) {
            setAlertDiv("failAlertDiv");
            console.error("Error occurred on signup page:", error.message);
        }
    };
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setAlertDiv("alertHider");
        const { name, value } = event.target;
        setUser(prevUser => ({ ...prevUser, [name]: value }));
    };

    return (<>
      <div className={`${style} ${style[alertDiv]}`}>
    <h5>Please Enter Unique userName and Email</h5>
    </div> 
<div className={style.container}>
            <div className={style.wrapper}>
                <h1 className={style.topText}>Sign Up to Zikrabyte</h1>
                <form onSubmit={onSignup}>
                    <div className={style.inputSection}>
                        <input id="username"
                            name="username"
                            placeholder="Enter your username"
                            required
                            type="text"
                            className={style.inputs}
                            value={user.username}
                            onChange={handleInputChange}
                        />
                        <input
                            id="email"
                            name="email"
                            placeholder="janedoe@email.com"
                            required
                            type="email"
                            className={style.inputs}
                            value={user.email}
                            onChange={handleInputChange}
                        />
                        <input
                            id="password"
                            name="password"
                            placeholder="Password"
                            required
                            type="password"
                            className={style.inputs}
                            value={user.password}
                            onChange={handleInputChange}
                        />
                    </div>
                    <input
                        type="submit"
                        value="Sign Up"
                        className={style.submitBtn}
                    />
                </form>
                <a href="/login">Already a Member</a>
            </div>
        </div>
    </>
    );
}

export default SignUpPage;
