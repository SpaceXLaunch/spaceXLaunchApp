import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Launches from '../components/Launches';

const client = new ApolloClient({
  uri: '/api/graphql'
})

export default function Home() {
  return (
    <ApolloProvider client={client}>
    <div className={styles.container}>
      <Head>
        <title>SpaceX Launch App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="stylesheet" href="https://bootswatch.com/4/cyborg/bootstrap.min.css" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="https://www.spacex.com/" rel="noreferrer" target="_blank"><Image alt="" src={"https://logodix.com/logo/359.png"} width= "500px" height= "300px" style={{backgroundColor: "transparent"}}></Image></a>
        </h1>
        <Launches />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.logo}>
            <Image src="https://sdtimes.com/wp-content/uploads/2020/04/1_oBm_3saYz4AI_MS6OekdFQ.png" alt="Vercel Logo" width={200} height={75}/>
          </span>
        </a>
      </footer>
    </div>
    </ApolloProvider>
  )
}
