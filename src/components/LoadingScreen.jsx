import { Html, useProgress } from '@react-three/drei'

function LoadingScreen() {
  const { progress, loaded, total } = useProgress()

  return (
    <Html center>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}>
        {/* Loading Spinner */}
        <div style={{
          width: '60px',
          height: '60px',
          border: '4px solid rgba(255, 255, 255, 0.2)',
          borderTop: '4px solid #646cff',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
          marginBottom: '20px'
        }} />

        {/* Loading Text */}
        <div style={{
          fontSize: '24px',
          fontWeight: 'bold',
          marginBottom: '10px'
        }}>
          Loading Model...
        </div>

        {/* Progress Percentage */}
        <div style={{
          fontSize: '18px',
          marginBottom: '20px',
          opacity: 0.8
        }}>
          {progress.toFixed(0)}%
        </div>

        {/* Progress Bar */}
        <div style={{
          width: '300px',
          height: '6px',
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          borderRadius: '3px',
          overflow: 'hidden'
        }}>
          <div style={{
            width: `${progress}%`,
            height: '100%',
            backgroundColor: '#646cff',
            transition: 'width 0.3s ease',
            borderRadius: '3px'
          }} />
        </div>

        {/* File Count */}
        <div style={{
          fontSize: '14px',
          marginTop: '10px',
          opacity: 0.6
        }}>
          {loaded} / {total} resources
        </div>

        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    </Html>
  )
}

export default LoadingScreen
