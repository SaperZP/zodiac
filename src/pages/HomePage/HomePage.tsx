import styles from './HomePage.module.scss';
import Card from "../../components/Card";

const cardsData = [
  {
    title: 'Card 1',
    image: 'https://via.placeholder.com/300x200',
    description: 'This is the description for card 1',
  },
  {
    title: 'Card 2',
    image: 'https://via.placeholder.com/300x200',
    description: 'This is the description for card 2',
  },
];

const HomePage = () => {
  return (
      <section className={styles.homePageContainer}>
        <h1> Zodiac signs</h1>

        <div className={styles.homePageContainer}>
          {cardsData.map((card) => (
              <Card key={card.description} {...card} />
          ))}
        </div>
      </section>
  )
}

export default HomePage;
