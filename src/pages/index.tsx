﻿import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '../styles/Home.module.scss'
import Sidebar from '../components/Sidebar/Sidebar'
import Slider from '../components/Slider/Slider'
import Books from '../components/Books/Books'
import {
  booksApi, GetBooksBySubjectQueryResult,
  useLazyGetBooksBySubjectQuery
} from '../api/booksApi'
import React, { useEffect, useState } from 'react'
import { IBook } from '../types'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import Loader from '../components/Loader/Loader'
import { removeDuplicates } from '../utils'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { AnimatePresence, motion } from 'framer-motion'
import MobilSidebar from '../components/MobilSidebar/MobilSidebar'

const inter = Inter({subsets: ['latin']});

export const getServerSideProps = (async (params: { query: { subject: string | null } }) => {
  const urlParams = new URLSearchParams();
  const subject = params.query.subject ? params.query.subject : "Architecture";
  urlParams.append("q", `"subject:${subject}"`);
  urlParams.append("pageIndex", "0");
  urlParams.append("maxResults", "6");
  const response = await fetch("https://www.googleapis.com/books/v1/volumes?" + urlParams.toString());

  const data: { items: IBook[] } = await response.json();
  if (!data.items) {
    return {
      props: {
        data: [],
        subject: subject,
        error: true
      }
    }
  }
  return {
    props: {
      data: removeDuplicates(data.items),
      subject: subject,
      error: false
    }
  }
})

const Home = ({data, subject, error}: InferGetServerSidePropsType<GetServerSideProps>) => {
  const route = useRouter().asPath;
  const [nextPageIndex, setNextPageIndex] = useState(6);
  const [books, setBooks] = useState<IBook[]>([]);
  const [trigger, result, lastPromiseInfo] = useLazyGetBooksBySubjectQuery<GetBooksBySubjectQueryResult>();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [canLoadMore, setCanLoadMore] = useState(true);

  const handleLoadMore = () => {
    setLoading(true);
    trigger({subject: subject, pageIndex: nextPageIndex});
    setNextPageIndex(nextPageIndex + 6)
  };

  useEffect(() => {
    setBooks([]);
    setNextPageIndex(6);
    setCanLoadMore(true);
    dispatch(booksApi.util?.resetApiState());
  }, [route]);

  useEffect(() => {
    if (result.isSuccess && result.data) {
      setBooks(removeDuplicates([...books, ...result.data]));
    } else if (result.isSuccess && !result.data) {
      setCanLoadMore(false);
    }

    setLoading(false);
  }, [result]);

  return (
    <>
      <Head>
        <title>Book Shop</title>
        <meta name="description" content="Development on Next.js, Redux-toolkit, Redux-persist, Typescript"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <main className={styles.main}>
        <Slider/>
        <section className={styles.content__wrapper}>
          <MobilSidebar currentCategory={subject}/>
          <div className={styles.sidebar__wrapper}>
            <Sidebar currentCategory={subject}/>
          </div>
          <div className={styles.books}>
            {books ? 
              <Books books={[...data, ...books]}/> :
              <div className={styles.no__content}>No items found...</div>}
            {canLoadMore ?
              <div className={styles.btn__wrapper}>
                <AnimatePresence>
                  {loading && 
                    <motion.div
                      initial={{ opacity: 0.5, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: "auto" }}
                      transition={{ duration: 0.5 }}
                    >
                      <Loader/>
                    </motion.div>
                  }
                </AnimatePresence>
                <AnimatePresence>
                  <motion.button
                    className={styles.btn}
                    style={{width: "100%"}}
                    onClick={handleLoadMore}
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    Load more
                  </motion.button>
                </AnimatePresence>
              </div> :
              <AnimatePresence>
                <motion.div
                  className={styles.btn__wrapper}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  No more books in this category...
                </motion.div>
              </AnimatePresence>
            }
          </div>
        </section>
      </main>
    </>
  )
}

export default Home
