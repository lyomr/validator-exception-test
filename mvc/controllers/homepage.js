module.exports = function (router, app) {
  router.route('/').get((req, res) => {
    let model = require('models/global')(req, res)
    model.content.pageTitle = '{content.appTitle} - Homepage'
    model.content.hello = 'Hi! I\'m a variable trickling down through the MVC structure!'
    model.content.picLabel = 'Here\'s a silly picture of Teddy Roosevelt:'
    model.teddyPath = '/images/teddy.jpg'
    res.render('homepage', model)
  })

  router.route('/testing').get((req, res) => {
    let model = require('models/global')(req, res)
    model.content.pageTitle = '{content.appTitle} - Homepage'
    model.content.hello = 'Hi! I\'m a variable trickling down through the MVC structure!'
    model.content.picLabel = 'Here\'s a silly picture of Teddy Roosevelt:'
    model.teddyPath = '/images/teddy.jpg'
    res.render('testing', model)
  })

  router.route('/partial').get((req, res) => {
    console.log('PARTIAL ROUTE CALLED')
    res.status(200).render('partial')
  })

  router.route('/test').get((req, res) => {
    console.log('TEST ROUTE CALLED')
    res.status(200).render('test')
  })
}
