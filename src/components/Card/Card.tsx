import styles from './Card.module.scss';

interface CardProps {
  title: string;
  image: string;
  description: string;
}

const Card: React.FC<CardProps> = ({title, image, description}) => {

  return (
      <div className={styles.card} style={{backgroundImage: `url(${image})`}}>
        <div className={styles.card__title}>{title}</div>
        <div className={styles.card__description}>{description}</div>
      </div>
  )
}
export default Card;
