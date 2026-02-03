import Layout from '../components/Layout'

function Bookshelf() {
  return (
    <Layout title="bookshelf">
      <div style={{
        display: 'flex',
        gap: '2.5rem',
        flexWrap: 'wrap'
      }}>
        <img 
          src="/china_airborne_cover.jpg" 
          alt="China Airborne" 
          style={{
            width: '150px',
            height: 'auto',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            borderRadius: '4px'
          }}
        />
        <img 
          src="/project_hail_mary_cover.jpg" 
          alt="Project Hail Mary" 
          style={{
            width: '150px',
            height: 'auto',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            borderRadius: '4px'
          }}
        />
      </div>
    </Layout>
  )
}

export default Bookshelf
