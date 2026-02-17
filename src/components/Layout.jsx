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
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        minHeight: '100vh'
      }}>
        {/* Standard Top Navigation */}
        <div style={{ 
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          marginBottom: '4rem'
        }}>
          <div style={{
            width: '100%',
            borderBottom: '2px solid #eaeaea', // Slightly thicker than hairline
            paddingBottom: '1.5rem',
            paddingTop: '1rem',
          }}>
            <Navigation />
          </div>
        </div>



        <div style={{
          maxWidth: '100%',
          width: '100%',
          padding: '0 2rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start'
        }}>
          {/* Main Content Column */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            flex: 1,
            // paddingLeft: '15%', // Removed to center the block
            maxWidth: '800px', // Constrain width for better reading
            margin: '0 auto', // Center the block itself
            position: 'relative' // For reference
          }}>
            <h1 style={{ 
              fontSize: '3.5rem', 
              fontWeight: '400',
              margin: 0,
              marginBottom: '3rem',
            }}>
              {title}
            </h1>
            
            <div style={{ width: '100%', paddingBottom: '4rem' }}>
              {children}
            </div>
          </div>
        </div>
      </div>

      {/* Footer - Only on Home Page */}
      {title === 'Douglas Huang' && (
        <footer style={{
          display: 'flex',
          justifyContent: 'center',
          padding: '2rem',
          width: '100%',
          marginTop: 'auto'
        }}>
          <div style={{
            display: 'flex',
            gap: '0.8rem', // Consistent small gap
          }}>
            <a href="https://www.linkedin.com/in/douglashuang-/" target="_blank" rel="noopener noreferrer" style={{ color: '#000', textDecoration: 'none', display: 'flex', alignItems: 'center' }} aria-label="LinkedIn">
              <svg width="1.3em" height="1.3em" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="https://github.com/douglashuangg" target="_blank" rel="noopener noreferrer" style={{ color: '#000', textDecoration: 'none', display: 'flex', alignItems: 'center' }} aria-label="GitHub">
              <svg width="1.3em" height="1.3em" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
          </div>
        </footer>
      )}

    </div>
  )
}

export default Layout
