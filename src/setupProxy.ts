import { createProxyMiddleware } from 'http-proxy-middleware';
module.exports = function (app: any) {
  app.use(
    '/',
    createProxyMiddleware({
      target: 'http://localhost:8080', //api 요청을 보낼 서버 주소
      changeOrigin: true,
    })
  );
};
