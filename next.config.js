/** @type {import('next').NextConfig} */
const webpack = require("webpack");
var $ = require("jquery");
    if (typeof window !== "undefined") {
        window.$ = window.jQuery = require("jquery");
    }
const nextConfig = {webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    
    config.plugins.push(
     new webpack.ProvidePlugin({
     $: "jquery",
     jQuery: "jquery",
     "window.jQuery": "jquery",
  }));
 return config;
}
}

module.exports = nextConfig
