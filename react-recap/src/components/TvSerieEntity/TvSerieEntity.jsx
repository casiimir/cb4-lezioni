import styles from './index.module.scss';

const TvSerieEntity = ({ cardData }) => {
  const { name, overview, poster_path } = cardData;

  return (
    <div className={styles.TvSerieEntity}>
      <img className={styles.image} src={`https://image.tmdb.org/t/p/w342${poster_path}`} alt={ name } />
      <div className={styles.text}>
        <h1 className={styles.title}>{ name }</h1>
        <p className={styles.description}>{ overview }</p>
      </div>
    </div>
  )
}

export default TvSerieEntity;