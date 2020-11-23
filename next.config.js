const withPWA = require('next-pwa')


const settings = {
  pwa: {
    dest: 'public',
  },
  env: {
    UNSPLASH_ACCESS_KEY: process.env.UNSPLASH_ACCESS_KEY,
    UNSPLASH_USER: process.env.UNSPLASH_USER
  }
};

module.exports = process.env.NODE_ENV === 'development' ? settings : withPWA(settings);
