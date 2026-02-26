import Layout from '../components/Layout'

function Home() {
  return (
    <Layout title="Douglas Huang">
      <div style={{
        position: 'relative',
        width: '100%',
        minHeight: '200px'
      }}>
        <p style={{ 
          fontSize: '1.2rem',
          textAlign: 'left',
          margin: 0,
          maxWidth: '100%', // Let text take full width available
          position: 'relative',
          zIndex: 1
        }}>
          Hi! I'm a mechatronics engineering student at the University of Waterloo. I'm interested in firmware for all types of embedded systems like drones, wearables, and autonomous vehicles. Previously at Avidrone Aerospace building cargo delivery drones.
          <br /><br />
          In my spare time, you will catch me training for my next marathon, playing volleyball (or any sport really), or reading a good book <a href="/bookshelf" style={{ color: '#4A7FB5', fontStyle: 'italic' }}>(check out my bookshelf)</a>. I'm also trying to learn enough Chinese to read a Chinese newspaper by the end of this year.
        </p>

        {/* Profile Photo */}
        <div style={{
          display: 'inline-block',
          marginTop: '3rem',
          zIndex: 1
        }}>
          <img 
            src="/hongkong_doug.jpg" 
            alt="Douglas Huang" 
            style={{
              width: '280px',
              height: '350px',
              objectFit: 'cover',
              objectPosition: 'center 40%',
              display: 'block',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            }}
          />
        </div>
        
        <img 
          src="/drone_sketch.png" 
          alt="Minimalist drone sketch" 
          style={{
            position: 'absolute',
            top: '20%',
            right: '-380px', 
            transform: 'translateY(-50%) rotate(15deg)',
            width: '450px',
            height: 'auto',
            opacity: 0.7,
            zIndex: 0,
            mixBlendMode: 'multiply',
            pointerEvents: 'none'
          }}
        />
      </div>
    </Layout>
  )
}

export default Home
