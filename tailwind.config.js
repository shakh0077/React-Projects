module.exports = {
    theme: {
      extend: {
        animation: {
          'pulse-bg': 'pulseBg 2s ease-in-out infinite',
        },
        keyframes: {
          pulseBg: {
            '0%, 100%': { backgroundColor: 'rgba(255, 255, 255, 0.2)' },
            '50%': { backgroundColor: 'rgba(255, 255, 255, 0.8)' },
          },
        },
      },
    },
    plugins: [],
  }
  