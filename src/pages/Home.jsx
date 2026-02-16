import Layout from '../components/Layout'

function Home() {
  return (
    <Layout title="Douglas Huang">
      <p style={{ 
        fontSize: '1.2rem',
        textAlign: 'left',
        margin: 0,
        maxWidth: '750px'
      }}>
        Hi! I'm a mechatronics engineering student at the University of Waterloo. I make embedded systems work. Hit me up to talk about drones, autonomous vehicles, wearables and more. Previously at Avidrone Aerospace building cargo delivery drones. In my spare time, you will catch me training for my next marathon, playing volleyball (or any sport really), or reading a good book.
      </p>
    </Layout>
  )
}

export default Home
