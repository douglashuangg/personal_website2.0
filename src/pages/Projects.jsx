import Layout from '../components/Layout'

const linkStyle = {
  fontSize: '1.3rem',
  color: '#4A7FB5',
  textDecoration: 'none',
  borderBottom: '1px solid transparent',
  transition: 'border-color 0.2s ease',
  cursor: 'pointer',
}

function ProjectLink({ label, href, isExternal = false }) {
  const props = isExternal
    ? { href, target: '_blank', rel: 'noopener noreferrer' }
    : { href }

  return (
    <li style={{ marginBottom: '0.5rem' }}>
      <a
        {...props}
        style={linkStyle}
        onMouseEnter={e => e.target.style.borderBottomColor = '#333'}
        onMouseLeave={e => e.target.style.borderBottomColor = 'transparent'}
      >
        {label}
      </a>
    </li>
  )
}

function Projects() {
  return (
    <Layout title="projects & resume">
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, textAlign: 'left' }}>
        <ProjectLink label="school notes" href="/school-notes" />
      </ul>
    </Layout>
  )
}

export default Projects
