import { ImageResponse } from 'next/og'

export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          borderRadius: '50%',
          fontFamily: 'system-ui',
          fontWeight: 'bold',
          position: 'relative',
        }}
      >
        {/* Winking face */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {/* Eyes */}
          <div style={{ display: 'flex', gap: '6px', marginBottom: '2px' }}>
            {/* Left eye - wink */}
            <div style={{
              width: '8px',
              height: '2px',
              background: '#1f2937',
              borderRadius: '1px'
            }} />
            {/* Right eye - open */}
            <div style={{
              width: '4px',
              height: '4px',
              background: '#1f2937',
              borderRadius: '50%'
            }} />
          </div>

          {/* Nose */}
          <div style={{
            width: '2px',
            height: '2px',
            background: '#ef4444',
            borderRadius: '50%',
            marginBottom: '2px'
          }} />

          {/* Smile */}
          <div style={{
            width: '12px',
            height: '6px',
            borderBottom: '2px solid #1f2937',
            borderRadius: '0 0 12px 12px',
            borderTop: 'none',
            borderLeft: 'none',
            borderRight: 'none'
          }} />
        </div>

        {/* Spiky hair */}
        <div style={{
          position: 'absolute',
          top: '2px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '2px'
        }}>
          <div style={{ width: '2px', height: '4px', background: '#10b981' }} />
          <div style={{ width: '2px', height: '6px', background: '#8b5cf6' }} />
          <div style={{ width: '2px', height: '4px', background: '#3b82f6' }} />
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}