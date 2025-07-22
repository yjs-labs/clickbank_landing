import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>My Affiliate Landing Page</title>
        <meta name="description" content="Earn money with this amazing offer!" />
      </Head>
      <main style={{ textAlign: 'center', padding: '50px' }}>
        <h1>Lose Weight Without Starving</h1>
        <p>Discover how thousands are shedding pounds with this simple trick...</p>
        <a
          href="https://your-hoplink.clickbank.net" // replace with your real HopLink
          style={{
            display: 'inline-block',
            padding: '15px 25px',
            background: '#0070f3',
            color: '#fff',
            borderRadius: '8px',
            marginTop: '20px',
            textDecoration: 'none',
            fontWeight: 'bold',
          }}
        >
          Learn More
        </a>
      </main>
    </>
  )
}