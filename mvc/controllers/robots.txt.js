const path = require('path')

module.exports = function (router, app) {
  const file = path.join(app.get('viewsPath'), 'robots.txt')

  router.route('/robots.txt').get((req, res) => {
    res.setHeader('Content-Type', 'text/plain')
    res.sendFile(file)
  })
}
