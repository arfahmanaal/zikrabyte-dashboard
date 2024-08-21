import Image from 'next/image';
import styles from './TeamsCard.module.css';

const TeamsCard = () => {
  const teamMembers = [
    {
      name: 'Christopher',
      position: 'Designer',
      profile: '/tm1.png',
    },
    {
      name: 'Jazzmine',
      position: 'Developer',
      profile: '/tm2.png',
    },
    {
      name: 'Stephine',
      position: 'Tester',
      profile: '/tm3.png',
    },
    {
      name: 'William',
      position: 'Manager',
      profile: '/tm4.png',
    },
  ];

  return (
    <div className={styles.container}>
      {teamMembers.map((member, index) => (
        <div key={index} className={styles.card}>
          <Image
            src={member.profile}
            alt={member.name}
            className={styles.profile}
            width={100} 
            height={100} 
          />
          <div className={styles.info}>
            <div className={styles.name}>{member.name}</div>
            <div className={styles.position}>{member.position}</div>
          </div>
          <div className={styles.card1}>
            <div className={styles.socialContainer}>
              <a href="#" className={styles.containerOne}>
                <Image src="/ig.png" alt="Instagram" width={24} height={24} />
              </a>
              <a href="#" className={styles.containerTwo}>
                <Image src="/twitter.png" alt="Twitter" width={24} height={24} />
              </a>
              <a href="#" className={styles.containerThree}>
                <Image src="/lin.png" alt="LinkedIn" width={24} height={24} />
              </a>
              <a href="#" className={styles.containerFour}>
                <Image src="/wa.png" alt="WhatsApp" width={24} height={24} />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamsCard;
