import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [data, setData] = useState()
  const handleClick = async () => {
    console.log('clicked')
    const res = await fetch('/.netlify/functions/get-hello')
    const data = await res.json()
    console.log(data)
    setData(data)
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>hello world</h1>

        <br />
        <br />
        <hr />
        <br />
        <br />
        <button onClick={handleClick}>Click</button>

        {data && JSON.stringify(data, null, 2)}
      </main>
    </>
  )
}
