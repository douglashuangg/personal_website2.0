import Navigation from './Navigation'

function Layout({ title, children }) {
  return (
    <div style={{ 
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      width: '100%',
    }}>
      {/* Main content area */}
      <div style={{ 
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        paddingTop: '2%',
        minHeight: '100vh'
      }}>
        <div style={{
          maxWidth: '1050px',
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
              marginBottom: '3rem',
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

      {/* Footer */}
      <footer style={{
        backgroundColor: '#000',
        color: '#fff',
        padding: '4rem 2rem 3rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '50vh',
        width: '100vw',
        marginLeft: 'calc(-50vw + 50%)',
        boxSizing: 'border-box'
      }}>
        <div style={{
          maxWidth: '1050px',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          fontSize: '1.5rem',
          textTransform: 'uppercase'
        }}>
          <a href="https://www.linkedin.com/in/douglashuang-/" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'none' }}>LinkedIn.</a>
          <a href="https://github.com/douglashuangg" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'none' }}>GitHub.</a>
        </div>
      </footer>
    </div>
  )
}

export default Layout
