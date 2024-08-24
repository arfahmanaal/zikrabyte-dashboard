"use client"
import React, {useState, useEffect }from "react";
import axios from "axios";
import styles from  "./WelcomeCard.module.css"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const WelcomeCard = () => {
  const [data, setData] = useState<{ username: string; email: string }>({
    username: "Loading...",
    email: "Loading...",
  });
  const getUserDetails = async () => {
    try {
      const res = await axios.get('./api/users/user');
      setData({
        username: res.data.data.username,
        email: res.data.data.email,
      });
    } catch (error: any) {
      console.log("Error fetching user details:", error.message);
    }
  };
  useEffect(() => {
    getUserDetails();
  }, []); 
  return (
    <div className={styles.container}>
    <Card>
      <CardHeader>
        <CardTitle>Welcome, {data.username}!</CardTitle>
        <CardDescription>
          We are a web design team that combines high-end design with strategic SEO to elevate brands and increase website traffic.
        </CardDescription>
      </CardHeader>
    </Card>
    </div>
  );
};

export default WelcomeCard;
