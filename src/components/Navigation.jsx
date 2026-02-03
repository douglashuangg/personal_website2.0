import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <nav style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      fontSize: '1.2rem',
      paddingTop: '0.5rem'
    }}>
      <Link to="/" style={{
        color: 'inherit',
        textDecoration: 'none',
        transition: 'opacity 0.2s'
      }}>
        home
      </Link>
      <Link to="/bookshelf" style={{
        color: 'inherit',
        textDecoration: 'none',
        transition: 'opacity 0.2s'
      }}>
        bookshelf
      </Link>
      <Link to="/projects" style={{
        color: 'inherit',
        textDecoration: 'none',
        transition: 'opacity 0.2s'
      }}>
        projects
      </Link>
      <Link to="/blog" style={{
        color: 'inherit',
        textDecoration: 'none',
        transition: 'opacity 0.2s'
      }}>
        blog
      </Link>
      <Link to="/typing" style={{
        color: 'inherit',
        textDecoration: 'none',
        transition: 'opacity 0.2s'
      }}>
        typing
      </Link>
    </nav>
  )
}

export default Navigation
