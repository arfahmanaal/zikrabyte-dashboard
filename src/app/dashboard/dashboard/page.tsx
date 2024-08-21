import { cards } from "@/app/lib/data";
import Card from "@/app/ui/dashboard/card/card";
import Chart from "@/app/ui/dashboard/chart/chart";
import styles from "@/app/ui/dashboard/dashboard.module.css";
import Transactions from "@/app/ui/dashboard/LatestProjects/ProjectList";
import WelcomeCard from "@/app/ui/dashboard/WelcomeCard/WelcomeCard";

const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        
        <div className={styles.cards}>
          {cards.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
        <Transactions />
        <Chart />
        <WelcomeCard/>
      </div>
     
    </div>
  );
};

export default Dashboard;
