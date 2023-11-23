import React from 'react';
import Menu from './Menu';
import Footer from './Footer';
import { useSelector } from 'react-redux';
import styles from '../styles/Favorite.module.css';

export default function Favorit() {
  const favorites = useSelector((state) => state.news.favorites)

  return (
    <div className={styles.main}>
      <div>
        <Menu />
      </div>
      <div className={styles.container}>
        {favorites.map((favorite, index) => (
          <div key={favorite.title} className={styles.cardContainer}>
            <div className={styles.card}>
              <img className={styles.image} src={favorite.urlToImage} alt={favorite.title} />
              <div>
                <h3 className={styles.title}>{favorite.title}</h3>
              </div>
              <span className={styles.author}>
                <strong>{favorite.author}</strong> from {favorite.source.name}
              </span>
              <p className={styles.description}>{favorite.description}</p>
              <div className={styles.cardBot}>
                <span>{new Date(favorite.publishedAt).toUTCString()}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}