const proxy = require("http-proxy-middleware");

module.exports = app => {
  app.use(
    "/hello-world",
    proxy({
      target: "http://127.0.0.1:5000",
      changeOrigin: true
    })
  );
  app.use(
    "/get-ssl-session",
    proxy({
      target: "http://127.0.0.1:5000",
      changeOrigin: true
    })
  );
}