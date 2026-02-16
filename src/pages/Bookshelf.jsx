import { useState } from 'react'
import Layout from '../components/Layout'

function BookCover({ src, alt, style = {} }) {
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
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
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
        />
        <BookCover
          src="/project_hail_mary_cover.jpg"
          alt="Project Hail Mary"
        />
        <BookCover
          src="/name_of_the_wind.jpg"
          alt="The Name of the Wind"
        />
      </div>
    </Layout>
  )
}

export default Bookshelf

