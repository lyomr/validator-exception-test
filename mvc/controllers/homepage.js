module.exports = function (app) {
  app.route('/').get((req, res) => {
    let model = require('models/global')(req, res)
    model.content.pageTitle = '{content.appTitle} - Homepage'
    model.content.hello = 'Hi! I\'m a variable trickling down through the MVC structure!'
    model.content.picLabel = 'Here\'s a silly picture of Teddy Roosevelt:'
    model.teddyPath = '/images/teddy.jpg'
    res.render('homepage', model)
  })

  app.route('/testing').get((req, res) => {
    let model = require('models/global')(req, res)
    model.content.pageTitle = '{content.appTitle} - Homepage'
    model.content.hello = 'Hi! I\'m a variable trickling down through the MVC structure!'
    model.content.picLabel = 'Here\'s a silly picture of Teddy Roosevelt:'
    model.teddyPath = '/images/teddy.jpg'
    res.render('testing', model)
  })

  app.route('/partial').get((req, res) => {
    console.log('PARTIAL CALLED')
    res.status(200).render('partial')
  })

  app.route('/test').get((req, res) => {
    res.status(200).send('<!DOCTYPE html><html><body><h1>The template Tag</h1><p>Hello World</p></body></html>')
  })
}
