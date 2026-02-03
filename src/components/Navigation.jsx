import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

function Navigation() {
  const location = useLocation();

  const getStyle = (path) => ({
    color: 'inherit',
    textDecoration: 'none',
    transition: 'opacity 0.2s',
    opacity: location.pathname === path ? 1 : 0.6,
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  });

  const AnimatedLink = ({ to, label }) => {
    const isActive = location.pathname === to;
    const characters = label.split('');

    return (
      <Link to={to} style={getStyle(to)}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ 
            opacity: isActive ? 1 : 0, 
            transition: 'opacity 0.2s',
            pointerEvents: 'none'
          }}>•</span>
          <div style={{ display: 'flex' }}>
            {characters.map((char, index) => (
              <motion.span
                key={index}
                animate={isActive ? { y: [0, -8, 0] } : {}}
                transition={{
                  duration: 0.8,
                  delay: isActive ? index * 0.1 : 0,
                  repeat: isActive ? Infinity : 0,
                  repeatDelay: 10,
                  ease: "easeInOut"
                }}
                style={{ display: 'inline-block', whiteSpace: char === ' ' ? 'pre' : 'normal' }}
              >
                {char}
              </motion.span>
            ))}
          </div>
        </div>
      </Link>
    );
  };

  return (
    <nav style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      fontSize: '1.2rem',
      paddingTop: '0.5rem'
    }}>
      <AnimatedLink to="/" label="home" />
      <AnimatedLink to="/bookshelf" label="bookshelf" />
      <AnimatedLink to="/projects" label="projects" />
      <AnimatedLink to="/blog" label="blog" />
      <AnimatedLink to="/typing" label="typing" />
    </nav>
  )
}

export default Navigation
