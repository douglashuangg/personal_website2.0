import Navigation from './Navigation'

function Layout({ title, titleSize, children }) {
  return (
    <div style={{ 
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      width: '100%',
      padding: '0 clamp(1rem, 4vw, 2rem)',
      boxSizing: 'border-box',
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
          padding: '0 clamp(1rem, 5vw, 2rem)',
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
              fontSize: titleSize || '3.5rem', 
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
          width: '100vw',
          marginLeft: 'calc(-1 * clamp(1rem, 4vw, 2rem))',
          marginTop: 'auto',
          boxSizing: 'border-box',
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
            <a href="https://curius.app/douglas-huang" target="_blank" rel="noopener noreferrer" style={{ color: '#000', textDecoration: 'none', display: 'flex', alignItems: 'center' }} aria-label="Curius">
              <svg width="1.3em" height="1.3em" viewBox="0 0 24 24" fill="currentColor"><path d="M21 4.5C21 3.67 20.33 3 19.5 3c-.16 0-.31.02-.46.07C17.2 3.67 14.1 5.13 12 6.5 9.9 5.13 6.8 3.67 4.96 3.07 4.81 3.02 4.66 3 4.5 3 3.67 3 3 3.67 3 4.5v13c0 .83.67 1.5 1.5 1.5.16 0 .31-.02.46-.07C6.8 18.33 9.9 16.87 12 15.5c2.1 1.37 5.2 2.83 7.04 3.43.15.05.3.07.46.07.83 0 1.5-.67 1.5-1.5v-13zM12 13.5c-2.1-1.37-5.2-2.83-7.04-3.43-.15-.05-.3-.07-.46-.07-.17 0-.33.03-.5.08V4.5c0-.28.22-.5.5-.5.05 0 .1.01.15.02C6.46 4.62 9.53 6.06 12 7.5c2.47-1.44 5.54-2.88 7.35-3.48.05-.01.1-.02.15-.02.28 0 .5.22.5.5v5.58c-.17-.05-.33-.08-.5-.08-.16 0-.31.02-.46.07-1.84.6-4.94 2.06-7.04 3.43z"/></svg>
            </a>
          </div>
        </footer>
      )}

    </div>
  )
}

export default Layout
