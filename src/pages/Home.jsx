import Layout from '../components/Layout'

function Home() {
  return (
    <Layout title="DOUGLAS HUANG">
      <p style={{ 
        fontSize: '1.2rem',
        textAlign: 'left',
        margin: 0,
        maxWidth: '750px'
      }}>
        Hi! I'm a mechatronics engineering student at the University of Waterloo. I love the world of embedded systems, where I write software to control hardware. I'm interested in drones, autonomous vehicles, wearables and many more. In my spare time, you will catch me training for my next marathon, playing volleyball (or any sport really), or reading a good book.
      </p>
    </Layout>
  )
}

export default Home
