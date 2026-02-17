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
          Hi! I'm a mechatronics engineering student at the University of Waterloo. I make embedded systems work. Hit me up to talk about drones, autonomous vehicles, wearables and more. Previously at Avidrone Aerospace building cargo delivery drones. In my spare time, you will catch me training for my next marathon, playing volleyball (or any sport really), or reading a good book.
        </p>
        
        <img 
          src="/drone_sketch.png" 
          alt="Minimalist drone sketch" 
          style={{
            position: 'absolute',
            top: '20%', // Shifted up? Or down? Let's move it out of the way. Maybe bottom right?
            // User said "move it out of the way, like the text width is cut off still". 
            // If I move it further right, it might be off screen if overflow is hidden (it's not on body, but Layout container is 800px).
            // Actually, Layout container has overflow visible default.
            // Let's move it FAR right so it hangs off the content block.
            right: '-280px', 
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
