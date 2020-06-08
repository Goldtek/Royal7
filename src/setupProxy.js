const { createProxyMiddleware } = require("http-proxy-middleware");

// const api_url = process.env.REACT_APP_BASE_URL;
module.exports = function (app) {
    app.use(
        createProxyMiddleware("/api/send/mail", {
            target: `https://royal7.herokuapp.com`,
            changeOrigin: true,
        })
    );
};
