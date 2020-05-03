'use strict'
const Cache = use('Cache');
const CategoryRepository = use('App/Repositories/CategoryRepository')
const ProductRepository = use('App/Repositories/ProductRepository')

class OrderController {
  constructor () {
    this.categoryRepository = new CategoryRepository()
    this.productRepository = new ProductRepository()
  }
}

module.exports = OrderController
