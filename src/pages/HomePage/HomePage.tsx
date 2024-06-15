import styles from './HomePage.module.scss';
import Card from "../../components/Card";
import taurus from '../../assets/zodiac_signs/taurus.jpg';
import gemini from '../../assets/zodiac_signs/gemini.png';
import cancer from '../../assets/zodiac_signs/cancer.jpg';
import leo from '../../assets/zodiac_signs/leo.jpg';
import virgo from '../../assets/zodiac_signs/virgo.jpg';
import libra from '../../assets/zodiac_signs/libra.jpg';
import scorpio from '../../assets/zodiac_signs/scorpio.jpg';
import sagittarius from '../../assets/zodiac_signs/sagittarius.jpg';
import capricorn from '../../assets/zodiac_signs/capricornus.jpg';
import aquarius from '../../assets/zodiac_signs/aquarius.jpg';
import pieces from '../../assets/zodiac_signs/pisces.jpg';

const cardsData = [
  {
    title: 'Taurus',
    image: taurus,
    description: 'Taurus is an earth sign known for its stability and practicality. People born under this sign are often reliable, patient, and determined. They appreciate beauty and comfort.',
  },
  {
    title: 'Gemini',
    image: gemini,
    description: 'Gemini is an air sign known for its versatility and curiosity. People born under this\n' +
        '            sign are often adaptable, communicative, and witty. They have a love for learning and exploring.',
  },
  {
    title: 'Cancer',
    image: cancer,
    description: 'Cancer is a water sign known for its emotional depth and nurturing nature. People born\n' +
        '            under this sign are often compassionate, intuitive, and protective. They value family and home life.',
  },
  {
    title: 'Leo',
    image: leo,
    description: 'Leo is a fire sign known for its charisma and leadership qualities. People born under\n' +
        '            this sign are often confident, generous, and enthusiastic. They enjoy the spotlight.',
  },
  {
    title: 'Virgo',
    image: virgo,
    description: 'Virgo is an earth sign known for its attention to detail and practicality. People born\n' +
        '            under this sign are often analytical, organized, and helpful. They strive for perfection.',
  },
  {
    title: 'Libra',
    image: libra,
    description: 'Libra is an air sign known for its balance and charm. People born under this sign are\n' +
        '            often diplomatic, sociable, and fair-minded. They seek harmony in relationships.',
  },
  {
    title: 'Scorpio',
    image: scorpio,
    description: 'Scorpio is a water sign known for its intensity and passion. People born under this sign\n' +
        '            are often resourceful, determined, and perceptive. They value deep connections.',
  },
  {
    title: 'Sagittarius',
    image: sagittarius,
    description: 'Sagittarius is a fire sign known for its adventurous spirit and optimism. People born\n' +
        '            under this sign are often enthusiastic, independent, and open-minded.',
  },
  {
    title: 'Capricorn',
    image: capricorn,
    description: 'Capricorn is an earth sign known for its discipline and ambition. People born under this\n' +
        '            sign are often responsible, patient, and practical. They value achievement and stability.',
  },
  {
    title: 'Aquarius',
    image: aquarius,
    description: 'Pisces is a water sign known for its sensitivity and creativity. People born under this\n' +
        '            sign are often compassionate, artistic, and empathetic. They value emotional connections.',
  },
  {
    title: 'Pieces',
    image: pieces,
    description: 'Aries is the first sign of the zodiac and represents the fire element. People born under\n' +
        '            this sign are known\n' +
        '            for their courage, leadership, determination. They are adventurous and energetic.',
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
