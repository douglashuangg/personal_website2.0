import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

function Navigation() {
  const location = useLocation();

  const getStyle = (path) => ({
    color: '#333333', /* Slightly lighter dark ink color */
    textDecoration: 'none',
    textTransform: 'uppercase',
    transition: 'font-weight 0.2s, opacity 0.2s',
    opacity: 1, /* Full opacity for all links */
    fontWeight: location.pathname === path ? 'bold' : 'normal',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  });

  const AnimatedLink = ({ to, label }) => {
    const isActive = location.pathname === to;
    const characters = label.split('');

    return (
      <Link to={to} style={getStyle(to)}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ position: 'relative' }}>
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
            {/* Hand-drawn squiggly underline */}
            {isActive && (
              <svg
                style={{
                  position: 'absolute',
                  bottom: '-4px',
                  left: 0,
                  width: '100%',
                  height: '6px',
                  overflow: 'visible',
                }}
                preserveAspectRatio="none"
                viewBox="0 0 100 6"
              >
                <path
                  d="M0 3 Q 5 0, 10 3 Q 15 6, 20 3 Q 25 0, 30 3 Q 35 6, 40 3 Q 45 0, 50 3 Q 55 6, 60 3 Q 65 0, 70 3 Q 75 6, 80 3 Q 85 0, 90 3 Q 95 6, 100 3"
                  fill="none"
                  stroke="#333"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
            )}
          </div>
        </div>
      </Link>
    );
  };

  return (
    <nav style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
      fontSize: '1.2rem',
      paddingTop: '0.5rem',
      width: '160px'
    }}>
      <AnimatedLink to="/" label="home" />
      <AnimatedLink to="/bookshelf" label="bookshelf" />
      <AnimatedLink to="/projects" label="projects & resume" />
      <AnimatedLink to="/blog" label="blog" />
      <AnimatedLink to="/typing" label="typing" />
    </nav>
  )
}

export default Navigation
