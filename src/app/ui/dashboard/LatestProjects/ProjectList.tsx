import styles from "./projectList.module.css";

const Transactions = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Projects</h2>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <td>Name</td>
            <td>Deadline</td>
            <td>Status</td>
            
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
               Create landing page
              </div>
            </td>
            <td>15.08.2024</td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                Pending
              </span>
            </td>
           
            
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
              Build e-commerce Application
              </div>
            </td>
            <td>16.08.2024</td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>Done</span>
            </td>
            
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
               
                Create dashboard UI
              </div>
            </td>
            <td>14.08.2024</td>
            <td>
              <span className={`${styles.status} ${styles.cancelled}`}>
                Cancelled
              </span>
            </td>
            
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
              Develop store website
              </div>
            </td>
            <td>24.08.2024</td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                Pending
              </span>
            </td>
            
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
