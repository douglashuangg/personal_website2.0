import { useState, useEffect } from 'react'
import Navigation from '../components/Navigation'
import ReactMarkdown from 'react-markdown'

const courses = [
  {
    id: 'ece459',
    label: 'ECE459 Programming For Performance',
    file: '/notes/ece459.md',
  },
  {
    id: 'mte546',
    label: 'MTE546 Multi-data Sensor Fusion',
    file: '/notes/mte546.md',
  },
]

function SchoolNotes() {
  const [activeCourse, setActiveCourse] = useState(null)
  const [markdown, setMarkdown] = useState('')
  const [loading, setLoading] = useState(false)

  const active = activeCourse ? courses.find(c => c.id === activeCourse) : null

  useEffect(() => {
    if (!active) {
      setMarkdown('')
      return
    }
    setLoading(true)
    fetch(active.file)
      .then(res => res.text())
      .then(text => {
        setMarkdown(text)
        setLoading(false)
      })
      .catch(() => {
        setMarkdown('Failed to load notes.')
        setLoading(false)
      })
  }, [activeCourse])

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      width: '100%',
      padding: '0 clamp(1rem, 4vw, 2rem)',
      boxSizing: 'border-box',
    }}>
      {/* Navigation */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        marginBottom: '2rem',
      }}>
        <div style={{
          width: '100%',
          borderBottom: '2px solid #eaeaea',
          paddingBottom: '1.5rem',
          paddingTop: '1rem',
        }}>
          <Navigation />
        </div>
      </div>

      {/* Main area: sidebar + content */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        flex: 1,
        width: '100%',
      }}>
        {/* Left sidebar */}
        <div style={{
          width: '280px',
          minWidth: '200px',
          flexShrink: 0,
          padding: '0 clamp(1rem, 3vw, 1.5rem)',
          borderRight: '1px solid #eaeaea',
          textAlign: 'left',
        }}>
          <button
            onClick={() => setActiveCourse(null)}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.05)'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = !activeCourse ? 'rgba(0,0,0,0.04)' : 'transparent'}
            style={{
              background: 'none',
              border: 'none',
              outline: 'none',
              padding: '8px 6px',
              fontSize: '0.85rem',
              color: !activeCourse ? '#000' : '#333',
              fontWeight: 400,
              cursor: 'pointer',
              textAlign: 'left',
              fontFamily: 'inherit',
              transition: 'all 0.15s ease',
              width: '100%',
              backgroundColor: !activeCourse ? 'rgba(0,0,0,0.04)' : 'transparent',
              marginBottom: '1rem',
            }}
          >
            home
          </button>
          <p style={{
            fontSize: '0.75rem',
            color: '#333',
            margin: 0,
            marginBottom: '0.4rem',
            padding: '0 6px',
            fontWeight: 500,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            textAlign: 'left',
          }}>
            4B Mechatronics Engineering
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {courses.map(course => {
              const isActive = activeCourse === course.id
              return (
              <li
                key={course.id}
                style={{ marginBottom: '0.2rem' }}
              >
                <button
                  onClick={() => setActiveCourse(course.id)}
                  onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.05)'}
                  onMouseLeave={e => e.currentTarget.style.backgroundColor = isActive ? 'rgba(0,0,0,0.04)' : 'transparent'}
                  style={{
                    background: 'none',
                    border: 'none',
                    outline: 'none',
                    padding: '8px 6px',
                    fontSize: '0.85rem',
                    color: isActive ? '#000' : '#333',
                    fontWeight: 400,
                    cursor: 'pointer',
                    textAlign: 'left',
                    fontFamily: 'inherit',
                    transition: 'all 0.15s ease',
                    width: '100%',
                    backgroundColor: isActive ? 'rgba(0,0,0,0.04)' : 'transparent',
                  }}
                >
                  {course.label}
                </button>
              </li>
              )
            })}
          </ul>
        </div>

        {/* Center content */}
        <div style={{
          flex: 1,
          minWidth: 0,
          padding: '0 clamp(1rem, 5vw, 3rem)',
          maxWidth: '800px',
          textAlign: 'left',
        }}>
          {active ? (
            <div style={{
              fontSize: '1.1rem',
              color: '#000',
              lineHeight: '1.6',
            }}>
              {loading ? (
                <p style={{ color: '#999' }}>Loading notes...</p>
              ) : (
                <ReactMarkdown>{markdown}</ReactMarkdown>
              )}
            </div>
          ) : (
            <>
              <h1 style={{
                fontSize: '2rem',
                fontWeight: 400,
                margin: 0,
                marginBottom: '1.5rem',
              }}>
                School Notes from University of Waterloo
              </h1>
              <p style={{
                fontSize: '1.1rem',
                color: '#000',
                marginBottom: '2rem',
                lineHeight: '1.6',
              }}>
                I often get caught up just trying to pass exams and forget to actually learn and enjoy the content. Here's my attempt to note down what I learn in a useful way.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default SchoolNotes
