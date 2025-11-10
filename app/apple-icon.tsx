import { ImageResponse } from 'next/og'

export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 120,
          background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          borderRadius: '20%',
          fontFamily: 'system-ui',
          fontWeight: 'bold',
          position: 'relative',
          boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
        }}
      >
        {/* Main face container */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
          width: '140px',
          height: '140px',
        }}>

          {/* Spiky hair */}
          <div style={{
            position: 'absolute',
            top: '10px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: '8px'
          }}>
            <div style={{
              width: '8px',
              height: '20px',
              background: '#3b82f6',
              borderRadius: '4px',
              transform: 'rotate(-10deg)'
            }} />
            <div style={{
              width: '8px',
              height: '26px',
              background: '#8b5cf6',
              borderRadius: '4px'
            }} />
            <div style={{
              width: '8px',
              height: '20px',
              background: '#10b981',
              borderRadius: '4px',
              transform: 'rotate(10deg)'
            }} />
          </div>

          {/* Eyes */}
          <div style={{
            display: 'flex',
            gap: '24px',
            marginTop: '50px',
            marginBottom: '8px'
          }}>
            {/* Left eye - wink */}
            <div style={{
              width: '30px',
              height: '8px',
              background: '#1f2937',
              borderRadius: '4px'
            }} />
            {/* Right eye - open */}
            <div style={{
              width: '16px',
              height: '16px',
              background: '#1f2937',
              borderRadius: '50%',
              position: 'relative',
            }}>
              {/* Eye highlight */}
              <div style={{
                width: '6px',
                height: '6px',
                background: 'white',
                borderRadius: '50%',
                position: 'absolute',
                top: '3px',
                left: '3px'
              }} />
            </div>
          </div>

          {/* Nose */}
          <div style={{
            width: '8px',
            height: '8px',
            background: '#ef4444',
            borderRadius: '50%',
            marginBottom: '8px'
          }} />

          {/* Big smile */}
          <div style={{
            width: '60px',
            height: '30px',
            border: '6px solid #1f2937',
            borderTop: 'none',
            borderRadius: '0 0 60px 60px',
            position: 'relative'
          }}>
            {/* Tongue */}
            <div style={{
              width: '12px',
              height: '6px',
              background: '#ef4444',
              borderRadius: '50%',
              position: 'absolute',
              bottom: '-3px',
              left: '24px'
            }} />
          </div>

          {/* Sparkles */}
          <div style={{
            position: 'absolute',
            top: '20px',
            right: '10px',
            width: '6px',
            height: '6px',
            background: '#fbbf24',
            borderRadius: '50%'
          }} />
          <div style={{
            position: 'absolute',
            bottom: '20px',
            left: '10px',
            width: '4px',
            height: '4px',
            background: '#34d399',
            borderRadius: '50%'
          }} />
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}