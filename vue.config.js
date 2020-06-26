module.exports = {
    pages: {
      'index': {
        entry: './src/pages/Home.vue',
        template: 'public/index.html',
        title: 'Home',
        chunks: [ 'chunk-vendors', 'chunk-common', 'index' ]
      }
    }