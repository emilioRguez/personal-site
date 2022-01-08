import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Personal website building by a developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        Let&apos;s go to create amazing <br />
        things on the internet!
        </h1>

        <p className={styles.description}>
          Technology  •  Creativity  •  Enterpreuniship
        </p>
      </main>

      <footer className={styles.footer}>
          Made with 💙 by Emilio Rodriguez.
      </footer>
    </div>
  )
}
