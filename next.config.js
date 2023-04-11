module.exports = {
  reactStrictMode: true,
  webpack(config) {
    config.resolve.modules.push(__dirname);
    config.resolve.modules.push('src');
    config.resolve.modules.push('src/fonts');

    return config;
  },
};