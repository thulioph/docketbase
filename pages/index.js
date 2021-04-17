import React, { useContext } from 'react'
import Link from 'next/link'

import  AppDataContext from 'src/context/app'

import Loading from 'src/components/Loading'
import FileMetadata from 'src/components/FileMetadata'

import styles from 'styles/Home.module.css'

export default function Home() {
  const { loading, data } = useContext(AppDataContext)

  if (loading) {
    return (
      <Loading />
    )
  }

  return (
    <React.Fragment>
      <div className={styles.container}>
        <main className={styles.main}>
          <header>
            <h1 className={styles.title}>
              <Link href="/">
                <a>DocketBase</a>
              </Link>
            </h1>
          </header>

          <section className={styles.grid}>
            {data.map((item, idx) => (
              <FileMetadata key={idx} {...item} />
            ))}
          </section>
        </main>
      </div>
    </React.Fragment>
  )
}