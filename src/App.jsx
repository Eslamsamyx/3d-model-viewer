import { useState } from 'react'
import ModelViewer from './components/ModelViewer'
import ModelList from './components/ModelList'
import ImageModal from './components/ImageModal'
import ToggleSwitch from './components/ToggleSwitch'
import { models } from './modelsConfig'
import './App.css'

function App() {
  const [selectedModel, setSelectedModel] = useState(models[0])
  const [selectedImage, setSelectedImage] = useState(null)
  const [showTextured, setShowTextured] = useState(false)

  // Get single variant to display based on toggle state
  const getVisibleVariants = () => {
    if (!selectedModel) return []

    const baseVariant = selectedModel.variants.find(v => v.type === 'base') || selectedModel.variants[0]

    // If toggle is ON and textured variant exists, show textured instead of base
    if (showTextured && selectedModel.variants.length > 1) {
      const texturedVariant = selectedModel.variants.find(v => v.type === 'textured')
      return texturedVariant ? [texturedVariant] : [baseVariant]
    }

    // Default: show base variant
    return [baseVariant]
  }

  const handleModelSelect = (model) => {
    setSelectedModel(model)
    // Reset toggle when changing models for cleaner UX
    setShowTextured(false)
  }

  const hasTexturedVariant = selectedModel && selectedModel.variants.length > 1

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
      {/* Model List Sidebar */}
      <div style={{
        position: 'fixed',
        left: '0',
        zIndex: 1000
      }}>
        <ModelList
          models={models}
          currentModel={selectedModel}
          onSelectModel={handleModelSelect}
        />
      </div>

      {/* 3D Viewer */}
      <div style={{
        marginLeft: '300px',
        width: 'calc(100vw - 300px)',
        height: '100vh'
      }}>
        {selectedModel && (
          <>
            {/* Model Info Card */}
            <div style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              backgroundColor: 'rgba(0, 0, 0, 0.85)',
              color: 'white',
              padding: '20px',
              borderRadius: '10px',
              zIndex: 100,
              maxWidth: '400px',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)'
            }}>
              <h3 style={{ margin: '0 0 15px 0', fontSize: '22px', fontWeight: '700' }}>
                {selectedModel.composite && <span style={{ marginRight: '8px' }}>🏙️</span>}
                {selectedModel.name}
              </h3>

              {/* Toggle Switch */}
              {hasTexturedVariant && (
                <div style={{ marginBottom: '15px' }}>
                  <ToggleSwitch
                    checked={showTextured}
                    onChange={setShowTextured}
                    disabled={!hasTexturedVariant}
                    label="Switch to Textured"
                    tooltip={hasTexturedVariant ? "Toggle between base and textured versions" : "Only base version available"}
                  />
                </div>
              )}

              {/* Viewing Mode Info */}
              <div style={{
                backgroundColor: 'rgba(100, 108, 255, 0.1)',
                padding: '10px 12px',
                borderRadius: '6px',
                marginBottom: '12px',
                border: '1px solid rgba(100, 108, 255, 0.3)'
              }}>
                <div style={{ fontSize: '12px', opacity: 0.7, marginBottom: '4px' }}>
                  Currently Viewing:
                </div>
                <div style={{ fontSize: '14px', fontWeight: '600' }}>
                  {selectedModel.composite && '🏙️ '}
                  {showTextured && hasTexturedVariant
                    ? '🎨 Textured Version'
                    : hasTexturedVariant
                    ? '📦 Base Version'
                    : '📦 Single Variant'}
                </div>
              </div>

              {/* Controls Info */}
              <div style={{
                fontSize: '13px',
                opacity: 0.7,
                lineHeight: '1.6'
              }}>
                <div style={{ fontWeight: '600', marginBottom: '6px' }}>🖱️ Controls:</div>
                <div>• Rotate: Left-click + drag</div>
                <div>• Zoom: Scroll wheel</div>
                <div>• Pan: Right-click + drag</div>
              </div>
            </div>

            {/* Reference Images */}
            {selectedModel.images.length > 0 && (
              <div style={{
                position: 'absolute',
                bottom: '20px',
                right: '20px',
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                padding: '15px',
                borderRadius: '8px',
                zIndex: 100,
                maxWidth: '250px'
              }}>
                <div style={{
                  color: 'white',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  marginBottom: '12px',
                  opacity: 0.9
                }}>
                  📷 Reference Images
                </div>
                {selectedModel.images.map((img, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedImage({ src: img, name: selectedModel.name })}
                    style={{
                      cursor: 'pointer',
                      borderRadius: '5px',
                      overflow: 'hidden',
                      marginBottom: index < selectedModel.images.length - 1 ? '10px' : '0',
                      position: 'relative',
                      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                      border: '2px solid rgba(100, 108, 255, 0.3)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)'
                      e.currentTarget.style.boxShadow = '0 5px 15px rgba(100, 108, 255, 0.5)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  >
                    <img
                      src={img}
                      alt={`${selectedModel.name} reference`}
                      style={{
                        width: '100%',
                        display: 'block'
                      }}
                    />
                    <div style={{
                      position: 'absolute',
                      bottom: '5px',
                      right: '5px',
                      backgroundColor: 'rgba(0, 0, 0, 0.7)',
                      color: 'white',
                      fontSize: '11px',
                      padding: '3px 8px',
                      borderRadius: '3px'
                    }}>
                      🔍 Click to enlarge
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Image Modal */}
            {selectedImage && (
              <ImageModal
                imageSrc={selectedImage.src}
                imageName={selectedImage.name}
                onClose={() => setSelectedImage(null)}
              />
            )}

            {/* 3D Model Viewer - key includes toggle state for proper remounting */}
            <ModelViewer
              key={`${selectedModel.id}-${showTextured}`}
              variants={getVisibleVariants()}
            />
          </>
        )}
      </div>
    </div>
  )
}

export default App
