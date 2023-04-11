export const GET = () => {
  return new Response(
    JSON.stringify({ message: 'Hello' }),
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )
}
