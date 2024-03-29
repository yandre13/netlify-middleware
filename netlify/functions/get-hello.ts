import { getSubs } from '@/lib/xata.subs'
import { Handler, HandlerEvent, HandlerContext } from '@netlify/functions'

const handler: Handler = async (
  event: HandlerEvent,
  context: HandlerContext
) => {
  console.log('Hello from the console!')
  // console.log('Event:', event)
  // console.log('Context:', context)
  // const joke = await fetch('https://icanhazdadjoke.com/', {
  //   headers: {
  //     Accept: 'application/json',
  //   },
  // })
  const subs = await getSubs()

  // const jsonData = await joke.json()
  return {
    statusCode: 200,
    body: JSON.stringify(subs),
  }
}

export { handler }
