import { useState } from 'react'

function ModelList({ models, onSelectModel, currentModel }) {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredModels = models.filter(model =>
    model.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div style={{
      position: 'fixed',
      left: 0,
      top: 0,
      width: '300px',
      height: '100vh',
      backgroundColor: '#1a1a1a',
      color: 'white',
      padding: '20px',
      overflowY: 'auto',
      boxShadow: '2px 0 10px rgba(0,0,0,0.3)',
      zIndex: 1000
    }}>
      <h2 style={{ marginTop: 0, fontSize: '24px', marginBottom: '20px' }}>
        3D Models
      </h2>

      <input
        type="text"
        placeholder="Search models..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: '100%',
          padding: '10px',
          marginBottom: '20px',
          borderRadius: '5px',
          border: '1px solid #333',
          backgroundColor: '#2a2a2a',
          color: 'white',
          fontSize: '14px'
        }}
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {filteredModels.map((model) => (
          <div
            key={model.id}
            onClick={() => onSelectModel(model)}
            style={{
              padding: '15px',
              borderRadius: '8px',
              backgroundColor: currentModel?.id === model.id ? '#4a4a4a' : '#2a2a2a',
              cursor: 'pointer',
              border: currentModel?.id === model.id ? '2px solid #646cff' : '2px solid transparent',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              if (currentModel?.id !== model.id) {
                e.currentTarget.style.backgroundColor = '#3a3a3a'
              }
            }}
            onMouseLeave={(e) => {
              if (currentModel?.id !== model.id) {
                e.currentTarget.style.backgroundColor = '#2a2a2a'
              }
            }}
          >
            {/* Display reference images if available */}
            {model.images && model.images.length > 0 && (
              <img
                src={model.images[0]}
                alt={model.name}
                style={{
                  width: '100%',
                  height: '150px',
                  objectFit: 'cover',
                  borderRadius: '5px',
                  marginBottom: '10px'
                }}
              />
            )}

            <div style={{ fontWeight: 'bold', fontSize: '16px', marginBottom: '5px' }}>
              {model.composite && <span style={{ marginRight: '6px' }}>🏙️</span>}
              {model.name}
            </div>

            {/* Show variant count and composite badge */}
            <div style={{ fontSize: '12px', opacity: 0.7 }}>
              {model.composite && (
                <span style={{
                  backgroundColor: 'rgba(100, 108, 255, 0.3)',
                  padding: '2px 6px',
                  borderRadius: '3px',
                  marginRight: '6px',
                  fontSize: '11px'
                }}>
                  Scene
                </span>
              )}
              {model.variants.length} variant{model.variants.length > 1 ? 's' : ''}
              {model.images.length > 0 && ` • ${model.images.length} image${model.images.length > 1 ? 's' : ''}`}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ModelList
