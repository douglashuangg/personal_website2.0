import { useState } from 'react'
import Layout from '../components/Layout'

function BookCover({ src, alt, summary, style = {} }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      style={{
        position: 'relative',
        display: 'inline-block',
        cursor: 'pointer',
        transition: 'transform 0.3s ease',
        transform: `${style.transform || ''} ${hovered ? 'scale(1.05)' : ''}`.trim(),
        transformOrigin: style.transformOrigin || 'center center',
        zIndex: hovered ? 10 : 1, // Bring to front on hover
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Tooltip Bubble */}
      <div style={{
        position: 'absolute',
        bottom: '100%',
        left: '50%',
        transform: `translateX(-50%) translateY(${hovered ? '-15px' : '-5px'})`,
        width: '220px',
        padding: '1rem',
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        color: '#333',
        borderRadius: '8px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
        opacity: hovered ? 1 : 0,
        pointerEvents: 'none',
        transition: 'all 0.3s ease',
        fontSize: '0.9rem',
        textAlign: 'center',
        zIndex: 20,
        marginBottom: '10px',
        backdropFilter: 'blur(5px)',
      }}>
        {summary}
      </div>

      <img
        src={src}
        alt={alt}
        draggable="false"
        onDragStart={(e) => e.preventDefault()}
        style={{
          width: '150px',
          height: '225px',
          objectFit: 'cover',
          boxShadow: style.boxShadow || '0 4px 8px rgba(0,0,0,0.15)',
          display: 'block',
        }}
      />
      {/* Dark overlay on hover */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0,0,0,0.25)',
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.3s ease',
          pointerEvents: 'none',
        }}
      />
    </div>
  )
}

function Bookshelf() {
  return (
    <Layout title="bookshelf">
      <p style={{ margin: '0 0 2rem 0', fontSize: '1.2rem', textAlign: 'left' }}>
        Hover for brief summary.
      </p>
      <div style={{
        display: 'flex',
        gap: '2.5rem',
        flexWrap: 'wrap',
        userSelect: 'none',
        alignItems: 'flex-end'
      }}>
        <BookCover
          src="/china_airborne_cover.jpg"
          alt="China Airborne"
          summary="4/5: interesting perspective into china's growth into the aerospace industry"
        />
        <BookCover
          src="/project_hail_mary_cover.jpg"
          alt="Project Hail Mary"
          summary="5/5: peak scifi"
        />
        <BookCover
          src="/name_of_the_wind.jpg"
          alt="The Name of the Wind"
          summary="5/5: one of my top fantasy series"
        />
      </div>
    </Layout>
  )
}

export default Bookshelf

