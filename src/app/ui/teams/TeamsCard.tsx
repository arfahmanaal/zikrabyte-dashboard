import styles from "./TeamsCard.module.css";

const TeamsCard = () => {
  const teamMembers = [
    {
      name: "Christopher",
      position: "Designer",
      profile: "/tm1.png",
    },
    {
      name: "Jazzmine",
      position: "Developer",
      profile: "/tm2.png",
    },
    {
      name: "Stephine",
      position: "Tester",
      profile: "/tm3.png",
    },
    {
      name: "William",
      position: "Manager",
      profile: "/tm4.png",
    },
  ];

  return (
    <div className={styles.container}>
      {teamMembers.map((member, index) => (
        <div key={index} className={styles.card}>
          <img src={member.profile} alt={member.name} className={styles.profile} />
          <div className={styles.info}>
            <div className={styles.name}>{member.name}</div>
            <div className={styles.position}>{member.position}</div>
          </div>
    <div className={styles.card1}>
      <div className={styles.socialContainer}>
        <a href="#" className={styles.containerOne}>
          <img src="/ig.png" alt="Instagram" />
        </a>

        <a href="#" className={styles.containerTwo}>
          <img src="/twitter.png" alt="Twitter" />
        </a>

        <a href="#" className={styles.containerThree}>
          <img src="/lin.png" alt="LinkedIn" />
        </a>

        <a href="#" className={styles.containerFour}>
          <img src="/wa.png" alt="WhatsApp" />
        </a>
      </div>
    </div>
        </div>
      ))}
    </div>
  );
};

export default TeamsCard;
