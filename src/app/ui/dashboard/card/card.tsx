
import styles from "./card.module.css";
interface CardItem {
  id: number;
  title: string;
  number: string;
  
}

const Card = ({ item }: { item: CardItem }) => {
  return (
    <div className={styles.container}>
     
      <div className={styles.texts}>
        <span className={styles.title}>{item.title}</span>
        <span className={styles.number}>{item.number}</span>
        
      </div>
    </div>
  );
};

export default Card;
