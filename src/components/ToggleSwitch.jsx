function ToggleSwitch({ checked, onChange, disabled, label, tooltip }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        opacity: disabled ? 0.5 : 1,
        cursor: disabled ? 'not-allowed' : 'pointer',
        padding: '12px',
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        borderRadius: '8px',
        border: checked ? '2px solid #646cff' : '2px solid rgba(255, 255, 255, 0.1)',
        transition: 'all 0.3s ease'
      }}
      onClick={() => !disabled && onChange(!checked)}
      title={tooltip}
    >
      {/* Toggle Switch */}
      <div
        style={{
          position: 'relative',
          width: '50px',
          height: '26px',
          backgroundColor: checked ? '#646cff' : 'rgba(255, 255, 255, 0.2)',
          borderRadius: '13px',
          transition: 'background-color 0.3s ease',
          cursor: disabled ? 'not-allowed' : 'pointer'
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '3px',
            left: checked ? '26px' : '3px',
            width: '20px',
            height: '20px',
            backgroundColor: 'white',
            borderRadius: '50%',
            transition: 'left 0.3s ease',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
          }}
        />
      </div>

      {/* Label */}
      <div style={{ flex: 1 }}>
        <div style={{
          fontSize: '14px',
          fontWeight: '600',
          color: 'white',
          marginBottom: '2px',
          display: 'flex',
          alignItems: 'center',
          gap: '6px'
        }}>
          <span>🔄</span>
          <span>{label}</span>
        </div>
        <div style={{
          fontSize: '11px',
          color: 'rgba(255, 255, 255, 0.6)'
        }}>
          {checked ? 'Viewing textured version' : 'Viewing base version'}
        </div>
      </div>

      {/* Status Badge */}
      <div style={{
        fontSize: '12px',
        fontWeight: 'bold',
        color: checked ? '#646cff' : 'rgba(255, 255, 255, 0.5)',
        textTransform: 'uppercase',
        letterSpacing: '0.5px'
      }}>
        {checked ? 'ON' : 'OFF'}
      </div>
    </div>
  )
}

export default ToggleSwitch
