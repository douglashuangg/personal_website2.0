import Navigation from './Navigation'

function Layout({ title, children }) {
  return (
    <div style={{ 
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      paddingTop: '2%',
      minHeight: '100vh'
    }}>
      <div style={{
        maxWidth: '900px',
        width: '100%',
        padding: '0 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
      }}>
        {/* Main Content Column */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          flex: 1
        }}>
          <h1 style={{ 
            fontSize: '3.5rem', 
            fontWeight: '400',
            margin: 0,
            marginBottom: '3rem'
          }}>
            {title}
          </h1>
          
          <div style={{ width: '100%' }}>
            {children}
          </div>
        </div>

        {/* Sidebar Navigation Column */}
        <div style={{
          marginLeft: '2rem'
        }}>
          <Navigation />
        </div>
      </div>
    </div>
  )
}

export default Layout
