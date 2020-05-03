'use strict'

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
// landing page- web
Route.group(() => {
    Route.get('/home', 'HomeController.index').as('home-page')

    Route.get('/top-selling', 'HomeController.getTopSelling').as('top-selling')

    Route.get('category/:slug', 'CategoryController.show').as('detail-category')

    Route.get('product/:slug', 'ProductController.show').as('detail-product')
    
}).namespace('Web');
Route.get('/home', '')
Route.on('/').render('welcome')
