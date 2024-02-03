import styles from './Slider.module.scss'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import First from '../../../assets/images/slider/banner.png'
import Second from '../../../assets/images/slider/banner2.png'
import Third from '../../../assets/images/slider/banner3.png'

const items = [
  First,
  Second,
  Third
];

const Slider = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setIndex((prevIndex) => prevIndex === items.length - 1 ? 0 : prevIndex + 1);
    }, 5000);
    return () => {
      resetTimeout();
    }
  }, [index]);

  return (
    <section className={styles.slider__wrapper}>
      <div className={`${styles.slider} ${styles.banner__violet}`}>
        <h4>Change old book on new</h4>
        <button className={styles.arrow}></button>
      </div>
      <div className={`${styles.banner} ${styles.banner__lilac}`}>
        <h4>top 100 books 2022</h4>
        <button className={styles.arrow}></button>
      </div>
      <div className={styles.slider__container}>
        <motion.div
          className={styles.slider__img}
          style={{backgroundImage: `url(${items[index].src})`}}
          key={index}
          initial={{x: 300, opacity: 0}}
          animate={{x: 0, opacity: 1}}
          exit={{x: -300, opacity: 0}}
        />
      </div>

      <div className={styles.slider__indicators}>
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setIndex(i);
            }}
            className={`${styles.slider__indicator} ${index === i ? styles.slider__indicator__active : ""}`}
          ></button>
        ))}
      </div>
    </section>
  )
}

export default Slider
