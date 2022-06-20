const PROXY_CONFIG = [
  {
    context: ['/api'],
    target: 'https://finnhub.io',
    secure: true,
    logLevel: 'debug',
    changeOrigin: true
  }
];
module.exports = PROXY_CONFIG;
