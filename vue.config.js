const env = process.env.VUE_APP_NOCONFIG || process.env.NODE_ENV

console.log(env)

module.exports = {
  css: {
    loaderOptions: {
      css: env === 'noconfig' ? {} : { importLoaders: 3 },
    },
  },
}
