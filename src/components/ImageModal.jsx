import { useEffect } from 'react'

function ImageModal({ imageSrc, imageName, onClose }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [onClose])

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        cursor: 'pointer',
        padding: '40px'
      }}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          fontSize: '24px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'background-color 0.2s ease',
          zIndex: 10000
        }}
        onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.3)'}
        onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
      >
        ✕
      </button>

      {/* Image name */}
      <div
        style={{
          position: 'absolute',
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'white',
          fontSize: '20px',
          fontWeight: 'bold',
          textAlign: 'center',
          padding: '10px 20px',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          borderRadius: '5px',
          pointerEvents: 'none'
        }}
      >
        {imageName}
      </div>

      {/* Image container */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '90%',
          maxHeight: '90%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'default'
        }}
      >
        <img
          src={imageSrc}
          alt={imageName}
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            objectFit: 'contain',
            borderRadius: '10px',
            boxShadow: '0 10px 50px rgba(0, 0, 0, 0.5)'
          }}
        />
      </div>

      {/* Instructions */}
      <div
        style={{
          position: 'absolute',
          bottom: '20px',
          color: 'rgba(255, 255, 255, 0.7)',
          fontSize: '14px',
          textAlign: 'center',
          pointerEvents: 'none'
        }}
      >
        Press ESC or click outside to close
      </div>
    </div>
  )
}

export default ImageModal
