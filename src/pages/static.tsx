export async function getStaticProps() {
  return {
    props: {
      message: 'This is a static page',
    },
  }
}

export default function Page({ message }: { message: string }) {
  return (
    <main>
      <h1>{message}</h1>
    </main>
  )
}
