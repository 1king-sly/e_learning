// next.config.js

module.exports = {
    images: {
      domains: ['res.cloudinary.com'],
    },
    webpack: (config) => {
      config.externals.push({ sharp: 'commonjs sharp', canvas: 'commonjs canvas' });
      return config;
  }
  };
  