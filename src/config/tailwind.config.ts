import { plugin } from 'twrnc';

module.exports = {
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        'text-shadow': {
          textShadowColor: 'rgba(0, 0, 0, 0.1)',
          textShadowOffset: { width: 1, height: 1 },
          textShadowRadius: 5,
        },
      });
    }),
  ],
};
