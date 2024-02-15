// setupProxy.js

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/auth', // The path you want to proxy
    createProxyMiddleware({
      target: 'http://localhost:8080', // The target URL where your backend is running
      changeOrigin: true,
    })
  );
};
