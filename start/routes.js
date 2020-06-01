'use strict'
const fs = use('fs')
const Helpers = use('Helpers')

const readFile = Helpers.promisify(fs.readFile)
/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
    Route.any('*', async ({ response, view }) => {
        response.download(Helpers.publicPath('index.html'))
    })
}).prefix('/admin')
// landing page- web
Route.group(() => {
    Route.get('/', 'HomeController.index').as('index');
    Route.get('/home', 'HomeController.index').as('home-page')

    Route.get('/top-selling', 'HomeController.getTopSelling').as('top-selling')
    Route.get('/contacts', 'HomeController.contact').as('contacts')
    Route.get('/about', 'HomeController.about').as('about')
    Route.get('/products', 'ProductController.index').as('products.index')

    Route.get('categories/:slug', 'CategoryController.show').as('detail-category')

    Route.get('products/:slug', 'ProductController.show').as('detail-product')
    
}).namespace('Web');

