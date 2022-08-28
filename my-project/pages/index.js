import Head from 'next/head';
import Header from '../components/Header';


export default function Home() {
  return (
    <div>
      <Head>
        <title>MOC News</title>
      </Head>

      <h1>Let's build MOC News!</h1>

      { /* Header */ }
      <Header />

      <main>

      { /* Sidebar */ }
      { /* Newsfeed */ }
      { /* Widgets */ }

      </main>

    </div>
  )
}
