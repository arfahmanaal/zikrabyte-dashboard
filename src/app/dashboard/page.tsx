import { cards } from "../lib/data";
import Card from "../ui/dashboard/card/card";
import Chart from "../ui/dashboard/chart/chart";
import styles from "../ui/dashboard.module.css";
import Transactions from "../ui/dashboard/LatestProjects/ProjectList";
import WelcomeCard from "../ui/dashboard/WelcomeCard/WelcomeCard";
import Newsletter from "../ui/dashboard/Newsletter/Newsletter"; 

const Dashboard = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.main}>
          <div className={styles.welcomeCard}>
            <WelcomeCard />
          </div>
          <div className={styles.cards}>
            {cards.map((item) => (
              <Card item={item} key={item.id} />
            ))}
          </div>
        </div>
        <div className={styles.sidebar1}>
          <div className={styles.transactions}>
            <Transactions />
          </div>
          <div className={styles.newsletter}>
            <Newsletter />
          </div>
        </div>
        <div className={styles.chart}>
          <Chart />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
