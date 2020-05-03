'use strict'
const Cache = use('Cache');
const CategoryRepository = use('App/Repositories/CategoryRepository')
const ProductRepository = use('App/Repositories/ProductRepository')

class CategoryController {
  constructor () {
    this.categoryRepository = new CategoryRepository()
    this.productRepository = new ProductRepository()
  }

  async show ({ params, request, response, view }) {
    try {
      let slug = params.slug
      if (!slug) {
        return view.render('web.errors.404', {categories})
      }
      let category = await this.categoryRepository.findBy('slug', slug)
      if (!category) {
        return view.render('web.errors.404', {categories})
      }
      let { page = 1, perPage = 9 } = request.all()
      let products = await this.productRepository.where({ category_id: category.id })
        .paginate(page, perPage)

      return view.render('web.category', { products: products.toJSON() })
    } catch (err) {
      console.log('err', err)
      return view.render('web.errors.500')
    }
  }
}

module.exports = CategoryController
