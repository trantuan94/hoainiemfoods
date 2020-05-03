'use strict'
const Cache = use('Cache');
const CategoryRepository = use('App/Repositories/CategoryRepository')
const ProductRepository = use('App/Repositories/ProductRepository')

class ProductController {
  constructor () {
    this.productRepository = new ProductRepository()
    this.categoryRepository = new CategoryRepository()
  }
  
  async show ({params, request, response, view }) {
    try {
      let prodSlug = params.slug
      if (!prodSlug) {
        return view.render('web.errors.404')
      }
      let product = await this.productRepository.with('category').findBy('slug', prodSlug)
      if (!product) {
        return view.render('web.errors.404')
      }

      return view.render('web.item_detail', { product })
    } catch (err) {
      console.log(err)
      return view.render('web.errors.500')
    }
  }
}

module.exports = ProductController
