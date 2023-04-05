const handler = async (request, context) => {
  console.log('Hello from the console!')
  console.log('Request:', request)
  console.log('Context:', context)
  const joke = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'application/json',
    },
  })

  const jsonData = await joke.json()
  return Response.json(jsonData)
}

export default handler
