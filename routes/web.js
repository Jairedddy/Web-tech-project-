const authController = require('../app/http/controllers/authController.js');
const homeController = require('../app/http/controllers/homeController.js')
const cartController = require('../app/http/controllers/customers/cartController.js')
const orderController = require('../app/http/controllers/customers/orderController.js')

const guest = require('../app/http/middleware/guest')
const auth = require('../app/http/middleware/auth')

function initRoutes(app){
    app.get('/',homeController().index)
    app.get('/login',guest,authController().login)
    app.post('/login',authController().postLogin)
    app.get('/register',guest,authController().register)
    app.post('/register',authController().postRegister)
    app.post('/logout',authController().logout)

    app.get('/cart',cartController().index)
    app.post('/update-cart',cartController().update)

    app.post('/orders',auth,orderController().store)
    app.get('/customer/orders',auth,orderController().index)
    app.get('/customer/orders/:id',auth,orderController().show)

}

module.exports = initRoutes