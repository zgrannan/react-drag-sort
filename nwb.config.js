module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ReactSortable',
      externals: {
        react: 'React'
      }
    }
  }
}
