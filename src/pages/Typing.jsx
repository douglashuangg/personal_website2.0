import { useState, useEffect, useRef } from 'react'
import Layout from '../components/Layout'
import { motion, AnimatePresence } from 'framer-motion'

const DOUGLAS_RECORD = 173

function Typing() {
  const quote = "Good sailors are made in rough waters."
  const [input, setInput] = useState("")
  const [startTime, setStartTime] = useState(null)
  const [wpm, setWpm] = useState(0)
  const [isFinished, setIsFinished] = useState(false)
  const inputRef = useRef(null)

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  useEffect(() => {
    if (input.length === 1 && !startTime) {
      setStartTime(Date.now())
    }

    if (startTime && !isFinished) {
      const timeElapsed = (Date.now() - startTime) / 60000 // minutes
      // Only calculate WPM after 200ms to avoid the initial extreme spike
      if (timeElapsed > 0.0033) { 
        const words = input.length / 5
        setWpm(Math.round(words / timeElapsed))
      }
    }

    if (input === quote && !isFinished) {
      setIsFinished(true)
    }
  }, [input, startTime, isFinished, quote])

  const handleInputChange = (e) => {
    const val = e.target.value
    if (!isFinished && val.length <= quote.length) {
      setInput(val)
    }
  }

  const reset = () => {
    setIsFinished(false)
    setInput("")
    setStartTime(null)
    setWpm(0)
    setTimeout(() => {
      if (inputRef.current) inputRef.current.focus()
    }, 0)
  }

  const renderQuote = () => {
    return quote.split('').map((char, index) => {
      let color = '#999999' // default
      if (index < input.length) {
        color = input[index] === quote[index] ? '#333333' : '#e11d48'
      }
      
      const isCursor = index === input.length && !isFinished

      return (
        <span key={index} style={{ position: 'relative', display: 'inline-block' }}>
          {isCursor && (
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
              style={{
                position: 'absolute',
                left: 0,
                top: '10%',
                height: '80%',
                width: '2px',
                backgroundColor: '#333',
                zIndex: 1
              }}
            />
          )}
          <span style={{ color, transition: 'color 0.1s', whiteSpace: 'pre' }}>
            {char}
          </span>
        </span>
      )
    })
  }

  return (
    <Layout title="typing">
      <div 
        onClick={() => inputRef.current?.focus()}
        style={{ 
          cursor: 'text',
          position: 'relative'
        }}
      >
        <p style={{ 
          fontSize: '1.2rem',
          color: '#000',
          margin: 0,
          marginBottom: '2rem',
          textAlign: 'left'
        }}>
          Can you type faster than me? Type my favorite excerpts from books.
        </p>

        <div style={{
          fontSize: '2rem',
          lineHeight: '1.5',
          fontFamily: 'serif',
          textAlign: 'left',
          maxWidth: '600px',
          position: 'relative'
        }}>
          {renderQuote()}
          
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={handleInputChange}
            autoFocus
            spellCheck="false"
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            style={{
              position: 'absolute',
              opacity: 0,
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              cursor: 'default'
            }}
          />
        </div>

        <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <div>
            <span style={{ fontSize: '0.9rem', color: '#000', display: 'block' }}>wpm</span>
            <span style={{ fontSize: '1.5rem', fontWeight: '500', color: '#333' }}>{wpm}</span>
          </div>
          <AnimatePresence>
            {isFinished && (
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '2rem'
                }}
              >
                <div style={{ color: '#000', fontWeight: '500' }}>
                  {wpm >= DOUGLAS_RECORD ? `You're fast! You beat me! I typed this at ${DOUGLAS_RECORD} wpm.` : `Nice try. I typed this at ${DOUGLAS_RECORD} wpm.`}
                </div>
                <button 
                  onClick={reset}
                  style={{
                    background: 'none',
                    border: '1px solid #333',
                    padding: '0.4rem 1rem',
                    borderRadius: '20px',
                    cursor: 'pointer',
                    fontSize: '0.9rem'
                  }}
                >
                  Try Again
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Layout>
  )
}

export default Typing
