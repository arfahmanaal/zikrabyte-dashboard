
import React from "react";
import styles from  "./WelcomeCard.module.css"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const WelcomeCard = () => {
  return (
    <div className={styles.container}>
    <Card>
      <CardHeader>
        <CardTitle>Welcome, [userName]!</CardTitle>
        <CardDescription>
          We are a web design team that combines high-end design with strategic SEO to elevate brands and increase website traffic.
        </CardDescription>
      </CardHeader>
    </Card>
    </div>
  );
};

export default WelcomeCard;
