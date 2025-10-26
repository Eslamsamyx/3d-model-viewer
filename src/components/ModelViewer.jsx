import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF, Environment, ContactShadows, Html } from '@react-three/drei'
import { Suspense } from 'react'
import LoadingScreen from './LoadingScreen'

function Model({ url, position, scale = 1 }) {
  const { scene } = useGLTF(url)
  return <primitive object={scene} position={position} scale={scale} />
}

// For composite models with multiple models
function CompositeModelWithLabel({ variant, position }) {
  return (
    <group position={position}>
      <Html
        position={[0, 4, 0]}
        center
        distanceFactor={8}
        style={{
          pointerEvents: 'none'
        }}
      >
        <div style={{
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          color: 'white',
          padding: '8px 16px',
          borderRadius: '5px',
          fontSize: '16px',
          fontWeight: 'bold',
          textTransform: 'capitalize',
          whiteSpace: 'nowrap',
          border: '2px solid #646cff'
        }}>
          {variant.type}
        </div>
      </Html>
      {/* Render all models in the composite scene */}
      {variant.models.map((modelData, idx) => (
        <Model
          key={idx}
          url={modelData.path}
          position={modelData.position}
          scale={modelData.scale}
        />
      ))}
    </group>
  )
}

// For regular single-path models
function SingleModelWithLabel({ variant, position }) {
  return (
    <group position={position}>
      <Html
        position={[0, 4, 0]}
        center
        distanceFactor={8}
        style={{
          pointerEvents: 'none'
        }}
      >
        <div style={{
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          color: 'white',
          padding: '8px 16px',
          borderRadius: '5px',
          fontSize: '16px',
          fontWeight: 'bold',
          textTransform: 'capitalize',
          whiteSpace: 'nowrap',
          border: '2px solid #646cff'
        }}>
          {variant.type}
        </div>
      </Html>
      <Model url={variant.path} position={[0, 0, 0]} />
    </group>
  )
}

function ModelViewer({ variants }) {
  // Single model centered - no spacing needed
  const positions = variants.length === 1
    ? [[0, 0, 0]]
    : variants.map((_, index) => [
        (index - (variants.length - 1) / 2) * 30,
        0,
        0
      ])

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <Canvas
        camera={{ position: [0, 8, 25], fov: 55 }}
        shadows
      >
        <Suspense fallback={<LoadingScreen />}>
          <ambientLight intensity={0.6} />
          <spotLight
            position={[20, 20, 20]}
            angle={0.2}
            penumbra={1}
            intensity={1.5}
            castShadow
          />
          <spotLight
            position={[-20, 20, 20]}
            angle={0.2}
            penumbra={1}
            intensity={1.5}
            castShadow
          />
          <pointLight position={[0, 10, -10]} intensity={0.5} />

          {/* Render model(s) centered */}
          {variants.map((variant, index) => {
            // Check if this is a composite model (has models array) or single model (has path)
            const isComposite = variant.models && Array.isArray(variant.models)
            const key = isComposite
              ? variant.models.map(m => m.path).join('-')
              : variant.path

            return isComposite ? (
              <CompositeModelWithLabel
                key={key}
                variant={variant}
                position={positions[index]}
              />
            ) : (
              <SingleModelWithLabel
                key={key}
                variant={variant}
                position={positions[index]}
              />
            )
          })}

          <ContactShadows
            position={[0, -1, 0]}
            opacity={0.4}
            scale={50}
            blur={2}
            far={6}
          />

          {/* Grid helper for better spatial awareness */}
          <gridHelper args={[100, 50, '#444444', '#222222']} position={[0, -1, 0]} />

          <Environment preset="city" />
          <OrbitControls
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            minDistance={1}
            maxDistance={500}
            zoomSpeed={1.2}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default ModelViewer
